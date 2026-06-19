(function () {
  "use strict";

  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    } else {
      callback();
    }
  }

  function sendFrameHeight() {
    if (window.self === window.top) return;

    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body ? body.scrollHeight : 0,
      body ? body.offsetHeight : 0,
      html ? html.clientHeight : 0,
      html ? html.scrollHeight : 0,
      html ? html.offsetHeight : 0
    );

    window.parent.postMessage({ type: "besay-portfolio-height", height: height }, "*");
  }

  function requestFrameResize() {
    window.setTimeout(sendFrameHeight, 40);
    window.setTimeout(sendFrameHeight, 220);
  }

  function initPortfolioPage() {
    const root = document.querySelector(".rdbx-scope");
    if (!root) return;

    const mobileMainTabs = root.querySelectorAll(".rdbx-mobile-main-tab");
    const portfolioTabs = root.querySelectorAll(".rdbx-page-nav .rdbx-tab");
    const portfolioPanels = root.querySelectorAll(".rdbx-page-panels .rdbx-panel");
    const filterBlocks = root.querySelectorAll(".rdbx-page-filter-extra");
    const allFilters = root.querySelectorAll(".rdbx-filter");
    const themeSwitches = root.querySelectorAll(".rdbx-theme-switch");
    const contactsToggle = root.querySelector(".rdbx-contacts-toggle");
    const portfolioCards = root.querySelectorAll(
      ".rdbx-site-card, .rdbx-brandbook-card, .rdbx-custom-card, .rdbx-mailing-card, .rdbx-social-card"
    );

    const activeFilters = {
      type: "all",
      area: "all"
    };

    function setMobileView(viewName) {
      const nextView = viewName === "portfolio" ? "portfolio" : "about";
      root.setAttribute("data-mobile-view", nextView);

      mobileMainTabs.forEach(function (button) {
        const isActive = button.getAttribute("data-mobile-view") === nextView;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      requestFrameResize();
    }

    function getActivePanelName() {
      const activeTab = root.querySelector(".rdbx-page-nav .rdbx-tab.is-active");
      return activeTab ? activeTab.getAttribute("data-tab") : "sites";
    }

    function updateFilterBlocks(tabName) {
      filterBlocks.forEach(function (block) {
        const isActive = block.getAttribute("data-filter-owner") === tabName;
        block.classList.toggle("is-active", isActive);
        block.setAttribute("aria-hidden", isActive ? "false" : "true");
      });

      const activeTypeGroup = root.querySelector(
        '.rdbx-page-filter-extra.is-active .rdbx-filter-group[data-filter-group="type"]'
      );
      const activeTypeButton = activeTypeGroup
        ? activeTypeGroup.querySelector(".rdbx-filter.is-active") || activeTypeGroup.querySelector(".rdbx-filter")
        : null;

      activeFilters.type = activeTypeButton ? activeTypeButton.getAttribute("data-filter") || "all" : "all";
    }

    function applyFilters() {
      const activePanel = root.querySelector(".rdbx-page-panels .rdbx-panel.is-active");

      portfolioCards.forEach(function (card) {
        if (activePanel && !activePanel.contains(card)) {
          card.classList.remove("is-hidden");
          return;
        }

        const cardTypes = (card.getAttribute("data-type") || "").split(",").map(function (item) {
          return item.trim();
        });
        const cardAreas = (card.getAttribute("data-area") || "").split(",").map(function (item) {
          return item.trim();
        });

        const typeMatch = activeFilters.type === "all" || cardTypes.indexOf(activeFilters.type) !== -1;
        const areaMatch = activeFilters.area === "all" || cardAreas.indexOf(activeFilters.area) !== -1;

        card.classList.toggle("is-hidden", !(typeMatch && areaMatch));
      });
    }

    function setPortfolioTab(tabName) {
      const nextTab = tabName || "sites";

      portfolioTabs.forEach(function (tab) {
        const isActive = tab.getAttribute("data-tab") === nextTab;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      portfolioPanels.forEach(function (panel) {
        const isActive = panel.getAttribute("data-panel") === nextTab;
        panel.classList.toggle("is-active", isActive);
      });

      updateFilterBlocks(nextTab);
      applyFilters();
    }

    function setTheme(themeName) {
      const theme = themeName === "light" ? "light" : "dark";
      root.setAttribute("data-theme", theme);

      themeSwitches.forEach(function (button) {
        button.setAttribute("aria-checked", theme === "light" ? "true" : "false");
      });
    }

    mobileMainTabs.forEach(function (button) {
      button.addEventListener("click", function () {
        setMobileView(button.getAttribute("data-mobile-view"));
      });
    });

    portfolioTabs.forEach(function (tab) {
      tab.setAttribute("role", "tab");
      tab.addEventListener("click", function () {
        setPortfolioTab(tab.getAttribute("data-tab"));
      });
    });

    allFilters.forEach(function (filter) {
      filter.addEventListener("click", function () {
        const group = filter.closest(".rdbx-filter-group");
        if (!group) return;

        const groupName = group.getAttribute("data-filter-group");
        const value = filter.getAttribute("data-filter") || "all";
        if (!groupName) return;

        activeFilters[groupName] = value;

        group.querySelectorAll(".rdbx-filter").forEach(function (button) {
          button.classList.toggle("is-active", button === filter);
        });

        applyFilters();
      });
    });

    themeSwitches.forEach(function (button) {
      button.addEventListener("click", function () {
        const currentTheme = root.getAttribute("data-theme") || "dark";
        setTheme(currentTheme === "dark" ? "light" : "dark");
      });
    });

    if (contactsToggle) {
      contactsToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        const isOpen = root.classList.toggle("is-contacts-open");
        contactsToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      document.addEventListener("click", function (event) {
        if (!root.contains(event.target)) return;
        if (event.target.closest(".rdbx-menu-socials") || event.target.closest(".rdbx-contacts-toggle")) return;

        root.classList.remove("is-contacts-open");
        contactsToggle.setAttribute("aria-expanded", "false");
      });
    }

    function setupPopupZoom(options) {
      const popup = root.querySelector(options.popup);
      const image = root.querySelector(options.image);
      const wrap = root.querySelector(options.wrap);
      const closeButton = root.querySelector(options.close);
      const backdrop = root.querySelector(options.backdrop);
      const zoomInButton = root.querySelector(options.zoomIn);
      const zoomOutButton = root.querySelector(options.zoomOut);
      const zoomResetButton = root.querySelector(options.zoomReset);
      const cards = root.querySelectorAll(options.card);

      if (!popup || !image || !wrap) return;

      let zoom = 1;
      let panX = 0;
      let panY = 0;
      let dragging = false;
      let startX = 0;
      let startY = 0;
      let startPanX = 0;
      let startPanY = 0;

      const minZoom = 1;
      const maxZoom = 2.4;
      const step = 0.2;

      function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }

      function clampPan() {
        if (zoom <= 1) {
          panX = 0;
          panY = 0;
          return;
        }

        const rect = wrap.getBoundingClientRect();
        const maxPanX = (rect.width * (zoom - 1)) / 2;
        const maxPanY = (rect.height * (zoom - 1)) / 2;

        panX = clamp(panX, -maxPanX, maxPanX);
        panY = clamp(panY, -maxPanY, maxPanY);
      }

      function updateZoom() {
        clampPan();
        image.style.transform = "translate3d(" + panX + "px," + panY + "px,0) scale(" + zoom + ")";
        wrap.classList.toggle("is-zoomed", zoom > 1);

        if (zoomResetButton) {
          zoomResetButton.textContent = Math.round(zoom * 100) + "%";
        }
      }

      function setZoom(nextZoom) {
        zoom = clamp(nextZoom, minZoom, maxZoom);
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
        wrap.classList.remove("is-dragging");
        updateZoom();
      }

      function openPopup(card) {
        const src = card.getAttribute("data-popup-image") || "";
        const title = card.getAttribute("data-popup-title") || "";

        image.setAttribute("src", src);
        image.setAttribute("alt", title);

        if (typeof options.beforeOpen === "function") {
          options.beforeOpen(card);
        }

        resetZoom();
        popup.classList.add("is-open");
        popup.setAttribute("aria-hidden", "false");
      }

      function closePopup() {
        popup.classList.remove("is-open");
        popup.setAttribute("aria-hidden", "true");
        resetZoom();
      }

      cards.forEach(function (card) {
        card.addEventListener("click", function () {
          openPopup(card);
        });
      });

      if (zoomInButton) {
        zoomInButton.addEventListener("click", function () {
          setZoom(zoom + step);
        });
      }

      if (zoomOutButton) {
        zoomOutButton.addEventListener("click", function () {
          setZoom(zoom - step);
        });
      }

      if (zoomResetButton) {
        zoomResetButton.addEventListener("click", resetZoom);
      }

      if (closeButton) closeButton.addEventListener("click", closePopup);
      if (backdrop) backdrop.addEventListener("click", closePopup);

      wrap.addEventListener("wheel", function (event) {
        if (!popup.classList.contains("is-open")) return;
        event.preventDefault();
        setZoom(zoom + (event.deltaY < 0 ? step : -step));
      }, { passive: false });

      wrap.addEventListener("pointerdown", function (event) {
        if (zoom <= 1) return;

        dragging = true;
        startX = event.clientX;
        startY = event.clientY;
        startPanX = panX;
        startPanY = panY;
        wrap.classList.add("is-dragging");

        try {
          wrap.setPointerCapture(event.pointerId);
        } catch (error) {}
      });

      wrap.addEventListener("pointermove", function (event) {
        if (!dragging) return;
        panX = startPanX + event.clientX - startX;
        panY = startPanY + event.clientY - startY;
        updateZoom();
      });

      function endDrag(event) {
        dragging = false;
        wrap.classList.remove("is-dragging");

        try {
          wrap.releasePointerCapture(event.pointerId);
        } catch (error) {}
      }

      wrap.addEventListener("pointerup", endDrag);
      wrap.addEventListener("pointercancel", endDrag);
      wrap.addEventListener("dblclick", function () {
        setZoom(zoom > 1 ? 1 : 1.8);
      });

      document.addEventListener("keydown", function (event) {
        if (!popup.classList.contains("is-open")) return;

        if (event.key === "Escape") closePopup();
        if (event.key === "+" || event.key === "=") setZoom(zoom + step);
        if (event.key === "-") setZoom(zoom - step);
        if (event.key === "0") resetZoom();
      });
    }

    const socialGrid = root.querySelector(".rdbx-socials-grid");
    if (socialGrid) {
      Array.from(socialGrid.querySelectorAll(".rdbx-social-card"))
        .sort(function (a, b) {
          return Number(b.getAttribute("data-social-followers") || 0) - Number(a.getAttribute("data-social-followers") || 0);
        })
        .forEach(function (card) {
          socialGrid.appendChild(card);
        });
    }

    setupPopupZoom({
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

    setupPopupZoom({
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
        const popupLink = root.querySelector(".rdbx-social-popup-link");
        if (!popupLink) return;

        const link = card.getAttribute("data-social-link") || "";
        if (link) {
          popupLink.href = link;
          popupLink.textContent = "Смотреть сообщество";
          popupLink.classList.remove("is-hidden");
        } else {
          popupLink.removeAttribute("href");
          popupLink.classList.add("is-hidden");
        }
      }
    });

    root.querySelectorAll('.rdbx-request-button[href="#popup:myformbesay"]').forEach(function (button) {
      button.addEventListener("click", function (event) {
        if (window.self === window.top) return;
        event.preventDefault();
        window.parent.postMessage({ type: "besay-open-popup", hash: "#popup:myformbesay" }, "*");
      });
    });

    setTheme(root.getAttribute("data-theme") || "dark");
    setMobileView(root.getAttribute("data-mobile-view") || "about");
    setPortfolioTab(getActivePanelName());

    if ("ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(requestFrameResize);
      resizeObserver.observe(document.documentElement);
      resizeObserver.observe(document.body);
    }

    window.addEventListener("load", requestFrameResize);
    window.addEventListener("resize", requestFrameResize);
    requestFrameResize();
  }

  onReady(initPortfolioPage);
})();
