// Show the platform's search shortcut next to the search control.
document.addEventListener("readystatechange", () => {
  if (document.readyState !== "interactive") return;
  const hint = document.querySelector("#search-toggle .search-kbd");
  if (!hint) return;
  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  hint.textContent = isMac ? "⌘K" : "Ctrl K";
});
