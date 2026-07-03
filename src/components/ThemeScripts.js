"use client";

import { useEffect } from "react";

export default function ThemeScripts() {
  useEffect(() => {
    const cleanups = [];

    // ===== functions.php inline script =====
    const toggle = document.getElementById("mobile-menu-toggle");
    const nav = document.getElementById("site-navigation");
    const closeBtn = document.getElementById("mobile-menu-close");

    if (toggle && nav) {
      const onToggle = () => {
        nav.classList.toggle("active");
        toggle.classList.toggle("active");
        document.body.classList.toggle("menu-open");
      };
      toggle.addEventListener("click", onToggle);
      cleanups.push(() => toggle.removeEventListener("click", onToggle));
    }

    if (closeBtn && nav && toggle) {
      const onClose = () => {
        nav.classList.remove("active");
        toggle.classList.remove("active");
        document.body.classList.remove("menu-open");
      };
      closeBtn.addEventListener("click", onClose);
      cleanups.push(() => closeBtn.removeEventListener("click", onClose));
    }

    const submenuItems = document.querySelectorAll(".menu-item-has-children");
    const closeAllSubmenus = () => {
      submenuItems.forEach((item) => item.classList.remove("submenu-active"));
      document
        .querySelectorAll(".mega-column")
        .forEach((col) => col.classList.remove("is-open"));
    };

    submenuItems.forEach((item) => {
      const trigger = item.querySelector(":scope > a");
      const panel = item.querySelector(".mega-menu, .bs-dropdown");
      const panelLinks = item.querySelectorAll(".mega-menu a, .bs-dropdown a");

      if (trigger) {
        const onTriggerClick = (event) => {
          // Desktop: the dropdown opens on hover — let the link navigate.
          if (!window.matchMedia("(max-width: 900px)").matches) return;
          event.preventDefault();
          event.stopPropagation();
          const isOpen = item.classList.contains("submenu-active");
          closeAllSubmenus();
          if (!isOpen) {
            item.classList.add("submenu-active");
          }
        };
        trigger.addEventListener("click", onTriggerClick);
        cleanups.push(() => trigger.removeEventListener("click", onTriggerClick));
      }

      if (panel) {
        const onPanelClick = (event) => {
          event.stopPropagation();
        };
        panel.addEventListener("click", onPanelClick);
        cleanups.push(() => panel.removeEventListener("click", onPanelClick));
      }

      if (panelLinks.length) {
        panelLinks.forEach((link) => {
          const onLinkClick = () => {
            closeAllSubmenus();
            if (window.matchMedia("(max-width: 900px)").matches) {
              if (nav) nav.classList.remove("active");
              if (toggle) toggle.classList.remove("active");
              document.body.classList.remove("menu-open");
            }
          };
          link.addEventListener("click", onLinkClick);
          cleanups.push(() => link.removeEventListener("click", onLinkClick));
        });
      }
    });

    const onDocClickSubmenu = (event) => {
      if (!event.target.closest(".menu-item-has-children")) {
        closeAllSubmenus();
      }
    };
    document.addEventListener("click", onDocClickSubmenu);
    cleanups.push(() => document.removeEventListener("click", onDocClickSubmenu));

    const isMobile = () => window.matchMedia("(max-width: 900px)").matches;
    const megaHeaders = document.querySelectorAll(".mega-col-header");
    megaHeaders.forEach((header) => {
      if (header.dataset.bound === "1") return;
      header.dataset.bound = "1";
      const onHeaderClick = (event) => {
        if (!isMobile()) return;
        event.preventDefault();
        event.stopPropagation();
        const column = header.closest(".mega-column");
        if (!column) return;
        const isOpen = column.classList.contains("is-open");
        document
          .querySelectorAll(".mega-column")
          .forEach((col) => col.classList.remove("is-open"));
        if (!isOpen) {
          column.classList.add("is-open");
        }
      };
      header.addEventListener("click", onHeaderClick);
      cleanups.push(() => {
        header.removeEventListener("click", onHeaderClick);
        delete header.dataset.bound;
      });
    });

    // ===== footer.php script =====
    const serviceToggles = document.querySelectorAll(".service-card-toggle");
    serviceToggles.forEach((cardToggle) => {
      const card = cardToggle.closest(".service-card-detailed");
      const list = card ? card.querySelector(".service-card-list") : null;
      if (!card || !list) return;
      list.style.maxHeight = "0px";
      const onCardToggle = () => {
        const isOpen = card.classList.toggle("is-open");
        cardToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        list.style.maxHeight = isOpen ? `${list.scrollHeight}px` : "0px";
      };
      cardToggle.addEventListener("click", onCardToggle);
      cleanups.push(() => cardToggle.removeEventListener("click", onCardToggle));
    });

    const onResize = () => {
      document
        .querySelectorAll(".service-card-detailed.is-open .service-card-list")
        .forEach((list) => {
          list.style.maxHeight = `${list.scrollHeight}px`;
        });
    };
    window.addEventListener("resize", onResize);
    cleanups.push(() => window.removeEventListener("resize", onResize));

    // Service Card Highlighting Logic
    function highlightService() {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          if (target.classList.contains("service-card-detailed")) {
            document.querySelectorAll(".service-card-detailed").forEach((card) => {
              card.classList.remove("highlight-card");
            });

            target.classList.add("highlight-card");

            if (!target.classList.contains("is-open")) {
              const cardToggle = target.querySelector(".service-card-toggle");
              if (cardToggle) cardToggle.click();
            }
          }

          setTimeout(() => {
            const yOffset = -120;
            const y =
              target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 350);
        }
      }
    }

    highlightService();

    window.addEventListener("hashchange", highlightService);
    cleanups.push(() => window.removeEventListener("hashchange", highlightService));

    const onDocClickHighlight = (e) => {
      if (!e.target.closest(".service-card-detailed")) {
        document.querySelectorAll(".service-card-detailed").forEach((card) => {
          card.classList.remove("highlight-card");
        });
      }
    };
    document.addEventListener("click", onDocClickHighlight);
    cleanups.push(() => document.removeEventListener("click", onDocClickHighlight));

    // Read More functionality for Service Card Description
    const serviceDescs = document.querySelectorAll(".service-card-desc");
    serviceDescs.forEach((desc) => {
      const fullText = desc.innerText;

      const originalStyle = desc.style.cssText;
      desc.style.webkitLineClamp = "unset";
      desc.style.display = "block";
      desc.style.maxHeight = "none";

      const lineHeight = parseFloat(window.getComputedStyle(desc).lineHeight);
      const height = desc.offsetHeight;

      desc.style.cssText = originalStyle;

      if (height > lineHeight * 2.2) {
        const truncatedText = fullText.substring(0, 95) + "... ";

        desc.innerHTML =
          truncatedText +
          '<a href="javascript:void(0)" class="read-more-btn" style="display:inline; margin-left:5px;">See more</a>';

        const onDescClick = (e) => {
          if (e.target.classList.contains("read-more-btn")) {
            e.preventDefault();
            const isTruncated = e.target.innerText === "See more";
            if (isTruncated) {
              desc.innerHTML =
                fullText +
                ' <a href="javascript:void(0)" class="read-more-btn" style="display:inline; margin-left:5px;">See less</a>';
            } else {
              desc.innerHTML =
                truncatedText +
                '<a href="javascript:void(0)" class="read-more-btn" style="display:inline; margin-left:5px;">See more</a>';
            }
          }
        };
        desc.addEventListener("click", onDescClick);
        cleanups.push(() => desc.removeEventListener("click", onDescClick));
      }
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
