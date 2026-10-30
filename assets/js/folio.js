/* Progressive enhancement: all content remains available without JavaScript. */
document.querySelectorAll("[data-folio-filter]").forEach((section) => {
  const search = section.querySelector("[data-filter-search]");
  const buttons = [...section.querySelectorAll("[data-filter]")];
  const items = [...section.querySelectorAll("[data-filter-item]")];
  const count = section.querySelector("[data-filter-count]");
  const empty = section.querySelector("[data-filter-empty]");
  const normalize = (text) => text.normalize("NFKD").toLowerCase().trim();
  // Exclude expandable citation/abstract text from search to keep matches useful.
  const entries = items.map((item) => ({
    item,
    text: normalize(
      [...item.children]
        .filter((child) => child.tagName !== "DETAILS")
        .map((child) => child.textContent)
        .join(" ")
    ),
  }));
  let topic = "all";
  const update = () => {
    const terms = normalize(search.value).split(/\s+/).filter(Boolean);
    let visible = 0;
    entries.forEach(({ item, text }) => {
      const matches = (topic === "all" || item.dataset.topic === topic) && terms.every((term) => text.includes(term));
      item.hidden = !matches;
      const listItem = item.closest("li");
      if (listItem) listItem.hidden = !matches;
      if (matches) visible += 1;
    });
    section.querySelectorAll("ol.bibliography").forEach((list) => {
      const hasResults = [...list.querySelectorAll("[data-filter-item]")].some((item) => !item.hidden);
      list.hidden = !hasResults;
      const heading = list.previousElementSibling;
      if (heading && heading.matches("h2.bibliography, h3.bibliography")) heading.hidden = !hasResults;
    });
    const noun = section.querySelector(".folio-papers") ? "paper" : "project";
    count.textContent = `${visible} of ${items.length} ${noun}${items.length === 1 ? "" : "s"}`;
    empty.hidden = visible !== 0;
  };
  search.addEventListener("input", update);
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      topic = button.dataset.filter;
      buttons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
      update();
    })
  );
  section.querySelector("[data-filter-controls]").hidden = false;
  update();
});
