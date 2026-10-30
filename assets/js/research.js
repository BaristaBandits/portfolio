document.querySelectorAll("[data-stepper]").forEach((stepper) => {
  const buttons = [...stepper.querySelectorAll("[data-step-button]")];
  const panels = [...stepper.querySelectorAll("[data-step-panel]")];
  const all = stepper.querySelector("[data-step-all]");
  const show = (index) => {
    panels.forEach((panel, i) => {
      panel.hidden = index !== null && i !== index;
    });
    buttons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    all.setAttribute("aria-pressed", String(index === null));
  };
  buttons.forEach((button, index) => button.addEventListener("click", () => show(index)));
  all.addEventListener("click", () => show(null));
  stepper.querySelector("[data-step-controls]").hidden = false;
  const hint = stepper.parentElement.querySelector("[data-step-hint]");
  if (hint) hint.hidden = false;
  show(null);
});
document.querySelectorAll("[data-demo]").forEach((demo) => {
  const input = demo.querySelector("input");
  if (!input) return;
  const value = demo.querySelector("[data-demo-value]");
  const update = () => {
    const number = Number(input.value);
    if (demo.dataset.demo === "logits") {
      value.textContent = number.toFixed(1);
      const points = Array.from({ length: 100 }, (_, i) => {
        const rank = i + 1;
        const score = 5 - number * Math.log(rank);
        return `${i ? "L" : "M"}${45 + i * 4.55},${30 + (5 - score) * 15}`;
      });
      demo.querySelector("[data-demo-curve]").setAttribute("d", points.join(" "));
      demo.querySelector("[data-demo-explanation]").textContent =
        `At α = ${number.toFixed(1)}, the score drops by ${(number * Math.log(100)).toFixed(2)} between ranks 1 and 100. A larger slope creates a more concentrated softmax distribution for these fixed ranks.`;
    } else if (demo.dataset.demo === "smoothing") {
      value.textContent = `${number}%`;
      const local = [0.7, 0.2, 0.1];
      const neighbor = [0.3, 0.35, 0.35];
      local.forEach((probability, index) => {
        const mixed = 100 * ((1 - number / 100) * probability + (number / 100) * neighbor[index]);
        demo.querySelector(`[data-probability="${index}"]`).style.width = `${mixed}%`;
        demo.querySelector(`[data-probability-value="${index}"]`).textContent = `${mixed.toFixed(1)}%`;
      });
    }
  };
  input.addEventListener("input", update);
  demo.querySelector("[data-demo-controls]").hidden = false;
  update();
});
