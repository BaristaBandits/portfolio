const directory = document.querySelector(".resource-notebook");
if (directory) {
  const search = directory.querySelector("[data-opportunity-search]");
  const region = directory.querySelector("[data-opportunity-region]");
  const entries = [...directory.querySelectorAll("[data-opportunity]")].map((item) => ({ item, text: item.textContent.toLowerCase() }));
  const filter = () => {
    const words = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    entries.forEach(({ item, text }) => {
      const match = (region.value === "all" || item.dataset.region === region.value) && words.every((word) => text.includes(word));
      item.hidden = !match;
      if (match) visible += 1;
    });
    directory.querySelector("[data-opportunity-count]").textContent = `${visible} of ${entries.length} opportunities`;
    directory.querySelector("[data-opportunity-empty]").hidden = visible !== 0;
  };
  search.addEventListener("input", filter);
  region.addEventListener("change", filter);
  directory.querySelector("[data-opportunity-tools]").hidden = false;
  filter();
  const checklist = directory.querySelector("[data-application-checklist]");
  const checks = [...checklist.querySelectorAll('input[type="checkbox"]')];
  const storageKey = "swathi-application-checklist-v1";
  const storageNote = checklist.querySelector("[data-checklist-storage]");
  let storageAvailable = true;
  try {
    const raw = JSON.parse(localStorage.getItem(storageKey) || "[]");
    const saved = new Set(Array.isArray(raw) ? raw.filter((value) => typeof value === "string") : []);
    checks.forEach((input) => {
      input.checked = saved.has(input.value);
    });
  } catch {
    storageAvailable = false;
  }
  const progress = (save = true) => {
    const selected = checks.filter((input) => input.checked).map((input) => input.value);
    checklist.querySelector("[data-checklist-progress]").textContent = `${selected.length} of ${checks.length} steps complete`;
    if (save) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(selected));
        storageAvailable = true;
      } catch {
        storageAvailable = false;
      }
    }
    storageNote.textContent = storageAvailable
      ? "Progress is saved only in this browser. Nothing is sent to a server."
      : "Browser storage is unavailable. Your checklist works for this visit.";
  };
  checks.forEach((input) => input.addEventListener("change", () => progress()));
  const reset = checklist.querySelector("[data-checklist-reset]");
  reset.hidden = false;
  reset.addEventListener("click", () => {
    checks.forEach((input) => {
      input.checked = false;
    });
    progress();
  });
  progress(false);
}
