const THEME_KEY = "theme";

const getStoredTheme = (): "light" | "dark" | null => {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
};

const initTheme = () => {
  const root = document.documentElement;
  const toggle = document.querySelector<HTMLButtonElement>(
    "[data-theme-toggle]",
  );
  if (!toggle) return;

  const updateMeta = () => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (!meta) return;

    const paper = getComputedStyle(root).getPropertyValue("--paper").trim();
    if (paper) meta.setAttribute("content", paper);
  };

  toggle.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;

    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); the
      // in-page theme still applies for this visit.
    }

    updateMeta();
  });

  const scheme = window.matchMedia("(prefers-color-scheme: dark)");
  const onSchemeChange = (event: MediaQueryListEvent) => {
    if (getStoredTheme() !== null) return;
    root.dataset.theme = event.matches ? "dark" : "light";
    updateMeta();
  };

  if (typeof scheme.addEventListener === "function") {
    scheme.addEventListener("change", onSchemeChange);
  }
};

const initMenu = () => {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-menu-panel]");
  if (!toggle || !panel) return;

  const label = toggle.querySelector<HTMLElement>(".menu-toggle-label");
  const pageRegions = [
    document.querySelector<HTMLElement>("main"),
    document.querySelector<HTMLElement>("footer"),
  ].filter((region): region is HTMLElement => region !== null);

  const setOpen = (open: boolean) => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.classList.toggle("is-open", open);
    if (label) label.textContent = open ? "Close" : "Menu";

    document.documentElement.classList.toggle("menu-open", open);
    pageRegions.forEach((region) => region.toggleAttribute("inert", open));

    if (!open) {
      const active = document.activeElement;
      if (active instanceof HTMLElement && panel.contains(active)) active.blur();
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  panel.addEventListener("click", (event) => {
    if ((event.target as Element).closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (toggle.getAttribute("aria-expanded") !== "true") return;
    const target = event.target as Node;
    if (!panel.contains(target) && !toggle.contains(target)) setOpen(false);
  });

  const wide = window.matchMedia("(min-width: 761px)");
  if (typeof wide.addEventListener === "function") {
    wide.addEventListener("change", (event) => {
      if (event.matches) setOpen(false);
    });
  }
};

const initActiveNav = () => {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"),
  );
  if (!links.length || !("IntersectionObserver" in window)) return;

  const ids = ["work", "about", "experience", "contact"];
  const sections = ids
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null);

  if (!sections.length) return;

  const setCurrent = (id: string) => {
    links.forEach((link) => {
      if (link.hash === `#${id}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const visibleSections = new Map<string, number>();

  const clearCurrent = () => {
    links.forEach((link) => link.removeAttribute("aria-current"));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      if (!visibleSections.size) {
        clearCurrent();
        return;
      }

      const [current] = [...visibleSections.entries()].sort(
        (a, b) => b[1] - a[1],
      );
      if (current) setCurrent(current[0]);
    },
    {
      rootMargin: "-40% 0px -50% 0px",
      threshold: [0, 0.1, 0.5],
    },
  );

  sections.forEach((section) => observer.observe(section));
};

const init = () => {
  initTheme();
  initMenu();
  initActiveNav();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
