(function () {
  function initDashboard() {
    const root = document.querySelector(".rdbx-scope");
    if (!root) return;

    const tabs = root.querySelectorAll(".rdbx-tab");
    const panels = root.querySelectorAll(".rdbx-panel");
    const themeSwitches = root.querySelectorAll(".rdbx-theme-switch");
    const themeSwitch = themeSwitches[0];
    const datetime = root.querySelector(".rdbx-datetime");

    function setTab(tabName) {
      tabs.forEach(function (tab) {
        const isActive = tab.getAttribute("data-tab") === tabName;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panels.forEach(function (panel) {
        const isActive = panel.getAttribute("data-panel") === tabName;
        panel.classList.toggle("is-active", isActive);
      });
    }

    tabs.forEach(function (tab) {
      tab.setAttribute("role", "tab");
      tab.addEventListener("click", function () {
        setTab(tab.getAttribute("data-tab"));
      });
    });



    function setTheme(theme) {
      const isLight = theme === "light";
      root.setAttribute("data-theme", isLight ? "light" : "dark");
      themeSwitches.forEach(function (switcher) {
        switcher.setAttribute("aria-checked", isLight ? "true" : "false");
      });
    }

    themeSwitches.forEach(function (switcher) {
      switcher.addEventListener("click", function () {
        const current = root.getAttribute("data-theme") || "dark";
        setTheme(current === "dark" ? "light" : "dark");
      });
    });

    function updateDateTime() {
      if (!datetime) return;
      const now = new Date();
      const date = now.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
      const time = now.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
      });
      datetime.textContent = date + " · " + time;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    const siteFilters = root.querySelectorAll(".rdbx-filter");
    const siteCards = root.querySelectorAll(".rdbx-site-card");
    const activeSiteFilters = {
      type: "all",
      area: "all"
    };

    function applySiteFilters() {
      siteCards.forEach(function (card) {
        const cardTypes = (card.getAttribute("data-type") || "").split(",");
        const cardAreas = (card.getAttribute("data-area") || "").split(",");
        const typeMatch = activeSiteFilters.type === "all" || cardTypes.indexOf(activeSiteFilters.type) !== -1;
        const areaMatch = activeSiteFilters.area === "all" || cardAreas.indexOf(activeSiteFilters.area) !== -1;
        card.classList.toggle("is-hidden", !(typeMatch && areaMatch));
      });
    }

    siteFilters.forEach(function (filter) {
      filter.addEventListener("click", function () {
        const group = filter.closest(".rdbx-filter-group");
        if (!group) return;

        const groupName = group.getAttribute("data-filter-group");
        const value = filter.getAttribute("data-filter");

        activeSiteFilters[groupName] = value;

        group.querySelectorAll(".rdbx-filter").forEach(function (button) {
          button.classList.toggle("is-active", button === filter);
        });

        root.querySelectorAll(".rdbx-mobile-filter").forEach(function (select) {
          if (select.getAttribute("data-filter-group") === groupName) {
            select.value = value;
          }
        });

        applySiteFilters();
      });
    });

    root.querySelectorAll(".rdbx-mobile-filter").forEach(function (select) {
      select.addEventListener("change", function () {
        const groupName = select.getAttribute("data-filter-group");
        const value = select.value;

        activeSiteFilters[groupName] = value;

        const group = root.querySelector('.rdbx-filter-group[data-filter-group="' + groupName + '"]');
        if (group) {
          group.querySelectorAll(".rdbx-filter").forEach(function (button) {
            button.classList.toggle("is-active", button.getAttribute("data-filter") === value);
          });
        }

        applySiteFilters();
      });
    });

    function setupDashboardPopupZoom(config) {
      const popupElement = root.querySelector(config.popup);
      const popupImage = root.querySelector(config.image);
      const popupImageWrap = root.querySelector(config.wrap);
      const popupClose = root.querySelector(config.close);
      const popupBackdrop = root.querySelector(config.backdrop);
      const zoomInButton = root.querySelector(config.zoomIn);
      const zoomOutButton = root.querySelector(config.zoomOut);
      const zoomResetButton = root.querySelector(config.zoomReset);

      let zoom = 1;
      let panX = 0;
      let panY = 0;
      let dragging = false;
      let dragStartX = 0;
      let dragStartY = 0;
      let startPanX = 0;
      let startPanY = 0;

      const minZoom = 1;
      const maxZoom = 2.4;
      const zoomStep = 0.2;

      function clampPan() {
        if (!popupImageWrap || zoom <= 1) {
          panX = 0;
          panY = 0;
          return;
        }

        const rect = popupImageWrap.getBoundingClientRect();
        const maxPanX = (rect.width * (zoom - 1)) / 2;
        const maxPanY = (rect.height * (zoom - 1)) / 2;

        panX = Math.max(-maxPanX, Math.min(maxPanX, panX));
        panY = Math.max(-maxPanY, Math.min(maxPanY, panY));
      }

      function updateZoom() {
        if (!popupImage) return;

        clampPan();
        popupImage.style.transform = "translate3d(" + panX + "px, " + panY + "px, 0) scale(" + zoom + ")";

        if (popupImageWrap) {
          popupImageWrap.classList.toggle("is-zoomed", zoom > 1);
        }

        if (zoomResetButton) {
          zoomResetButton.textContent = Math.round(zoom * 100) + "%";
        }
      }

      function setZoom(nextZoom) {
        zoom = Math.max(minZoom, Math.min(maxZoom, nextZoom));

        if (zoom === 1) {
          panX = 0;
          panY = 0;
        }

        updateZoom();
      }

      function resetZoom() {
        zoom = 1;
        panX = 0;
        panY = 0;
        dragging = false;

        if (popupImageWrap) {
          popupImageWrap.classList.remove("is-dragging");
        }

        updateZoom();
      }

      function openPopup(imageSrc, title, card) {
        if (!popupElement) return;

        if (popupImage) {
          popupImage.setAttribute("src", imageSrc || "");
          popupImage.setAttribute("alt", title || "");
        }

        if (typeof config.beforeOpen === "function") {
          config.beforeOpen(card);
        }

        resetZoom();
        popupElement.classList.add("is-open");
        popupElement.setAttribute("aria-hidden", "false");
      }

      function closePopup() {
        if (!popupElement) return;

        popupElement.classList.remove("is-open");
        popupElement.setAttribute("aria-hidden", "true");
        resetZoom();
      }

      root.querySelectorAll(config.card).forEach(function (card) {
        card.addEventListener("click", function () {
          openPopup(
            card.getAttribute("data-popup-image"),
            card.getAttribute("data-popup-title"),
            card
          );
        });
      });

      if (zoomInButton) {
        zoomInButton.addEventListener("click", function () {
          setZoom(zoom + zoomStep);
        });
      }

      if (zoomOutButton) {
        zoomOutButton.addEventListener("click", function () {
          setZoom(zoom - zoomStep);
        });
      }

      if (zoomResetButton) {
        zoomResetButton.addEventListener("click", resetZoom);
      }

      if (popupImageWrap) {
        popupImageWrap.addEventListener("wheel", function (event) {
          if (!popupElement || !popupElement.classList.contains("is-open")) return;
          event.preventDefault();

          const direction = event.deltaY < 0 ? zoomStep : -zoomStep;
          setZoom(zoom + direction);
        }, { passive: false });

        popupImageWrap.addEventListener("pointerdown", function (event) {
          if (zoom <= 1) return;

          dragging = true;
          dragStartX = event.clientX;
          dragStartY = event.clientY;
          startPanX = panX;
          startPanY = panY;

          popupImageWrap.classList.add("is-dragging");

          try {
            popupImageWrap.setPointerCapture(event.pointerId);
          } catch (error) {}
        });

        popupImageWrap.addEventListener("pointermove", function (event) {
          if (!dragging) return;

          panX = startPanX + (event.clientX - dragStartX);
          panY = startPanY + (event.clientY - dragStartY);
          updateZoom();
        });

        function endDrag(event) {
          dragging = false;
          popupImageWrap.classList.remove("is-dragging");

          try {
            popupImageWrap.releasePointerCapture(event.pointerId);
          } catch (error) {}
        }

        popupImageWrap.addEventListener("pointerup", endDrag);
        popupImageWrap.addEventListener("pointercancel", endDrag);

        popupImageWrap.addEventListener("dblclick", function () {
          setZoom(zoom > 1 ? 1 : 1.8);
        });
      }

      if (popupClose) popupClose.addEventListener("click", closePopup);
      if (popupBackdrop) popupBackdrop.addEventListener("click", closePopup);

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closePopup();
        }

        if (!popupElement || !popupElement.classList.contains("is-open")) return;

        if (event.key === "+" || event.key === "=") {
          setZoom(zoom + zoomStep);
        }

        if (event.key === "-") {
          setZoom(zoom - zoomStep);
        }

        if (event.key === "0") {
          resetZoom();
        }
      });

      return {
        open: openPopup,
        close: closePopup,
        reset: resetZoom
      };
    }

    setupDashboardPopupZoom({
      popup: ".rdbx-popup",
      image: ".rdbx-popup-image",
      wrap: ".rdbx-popup-image-wrap",
      close: ".rdbx-popup-close",
      backdrop: ".rdbx-popup-backdrop",
      zoomIn: ".rdbx-popup-zoom-in",
      zoomOut: ".rdbx-popup-zoom-out",
      zoomReset: ".rdbx-popup-zoom-reset",
      card: ".rdbx-mailing-card"
    });

    const socialFilters = root.querySelectorAll(".rdbx-social-filter");
    const socialGrid = root.querySelector(".rdbx-socials-grid");

    function sortSocialCardsByFollowers() {
      if (!socialGrid) return;

      const cards = Array.from(socialGrid.querySelectorAll(".rdbx-social-card"));
      cards
        .sort(function (a, b) {
          const aFollowers = Number(a.getAttribute("data-social-followers") || 0);
          const bFollowers = Number(b.getAttribute("data-social-followers") || 0);
          return bFollowers - aFollowers;
        })
        .forEach(function (card) {
          socialGrid.appendChild(card);
        });
    }

    sortSocialCardsByFollowers();

    const socialCards = root.querySelectorAll(".rdbx-social-card");
    const socialEmpty = root.querySelector(".rdbx-social-empty");

    function applySocialFilter(value) {
      let visibleCount = 0;

      socialCards.forEach(function (card) {
        const cardType = card.getAttribute("data-social-type") || "";
        const isVisible = value === "all" || cardType === value;

        card.classList.toggle("is-hidden", !isVisible);
        if (isVisible) visibleCount += 1;
      });

      if (socialEmpty) {
        socialEmpty.classList.toggle("is-hidden", visibleCount > 0);
      }
    }

    socialFilters.forEach(function (filter) {
      filter.addEventListener("click", function () {
        const value = filter.getAttribute("data-social-filter") || "all";

        socialFilters.forEach(function (button) {
          button.classList.toggle("is-active", button === filter);
        });

        applySocialFilter(value);
      });
    });

    const socialPopupLink = root.querySelector(".rdbx-social-popup-link");

    setupDashboardPopupZoom({
      popup: ".rdbx-social-popup",
      image: ".rdbx-social-popup-image",
      wrap: ".rdbx-social-popup-image-wrap",
      close: ".rdbx-social-popup-close",
      backdrop: ".rdbx-social-popup-backdrop",
      zoomIn: ".rdbx-social-zoom-in",
      zoomOut: ".rdbx-social-zoom-out",
      zoomReset: ".rdbx-social-zoom-reset",
      card: ".rdbx-social-card",
      beforeOpen: function (card) {
        if (!socialPopupLink || !card) return;

        const type = card.getAttribute("data-social-type");
        const link = card.getAttribute("data-social-link");
        const buttonText = type === "instagram" ? "Смотреть профиль" : "Смотреть сообщество";

        socialPopupLink.textContent = buttonText;

        if (link) {
          socialPopupLink.setAttribute("href", link);
          socialPopupLink.classList.remove("is-hidden");
        } else {
          socialPopupLink.removeAttribute("href");
          socialPopupLink.classList.add("is-hidden");
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDashboard);
  } else {
    initDashboard();
  }
})();
