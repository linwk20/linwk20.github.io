// Progressive enhancement: publication content is always visible without JavaScript.
(() => {
  "use strict";

  function initialize() {
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;
    const cards = document.querySelectorAll(".publications .publication-entry");
    if (!cards.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const search = document.getElementById("bibsearch");
    const animations = new Map();
    let disabled = reducedMotion.matches || Boolean(search && (search.value.trim() || window.location.hash));

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const card = entry.target;
        observer.unobserve(card);
        if (disabled || reducedMotion.matches || card.contains(document.activeElement) || card.closest(".unloaded, [hidden]")) continue;

        const animation = card.animate([
          { opacity: 0.78, transform: "translateY(8px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 420, easing: "cubic-bezier(0.2, 0.65, 0.3, 1)" });
        animations.set(card, animation);
        animation.addEventListener("finish", () => animations.delete(card), { once: true });
      }
    }, { threshold: 0.06 });

    function stop() {
      disabled = true;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }

    // Filtering repositions rows immediately; never animate the new text positions.
    if (search) {
      search.addEventListener("input", stop, { capture: true, once: true });
      search.addEventListener("search", stop, { capture: true, once: true });
      window.addEventListener("hashchange", stop, { once: true });
    }
    reducedMotion.addEventListener("change", (event) => { if (event.matches) stop(); });
    document.addEventListener("focusin", (event) => {
      const card = event.target.closest(".publication-entry");
      if (!card) return;
      observer.unobserve(card);
      const animation = animations.get(card);
      if (animation) { animation.cancel(); animations.delete(card); }
    });

    if (!disabled) {
      cards.forEach((card) => {
        if (card.getClientRects().length && card.getBoundingClientRect().top >= window.innerHeight) observer.observe(card);
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})();
