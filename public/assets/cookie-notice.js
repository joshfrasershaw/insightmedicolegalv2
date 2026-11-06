/* Sitewide cookie notice: informational only, no optional tracking is deployed. */
(() => {
  "use strict";
  const key = "insight_cookie_notice_v1";
  function init() {
    const banner = document.createElement("aside");
    banner.id = "cookie-notice";
    banner.className = "cookie-notice";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-labelledby", "cookie-notice-title");
    banner.hidden = true;
    banner.innerHTML = '<div class="cookie-notice__body"><h2 id="cookie-notice-title">Cookies &amp; privacy</h2><p>We don\'t use analytics or advertising cookies. We only store your dismissal of this notice in your browser. <a href="/cookie-policy/">Read our cookie policy</a>.</p></div><button type="button" class="cookie-notice__dismiss">Got it</button>';
    document.body.appendChild(banner);
    function show() {
      banner.hidden = false;
    }
    banner.querySelector(".cookie-notice__dismiss").addEventListener("click", () => {
      try { localStorage.setItem(key, "dismissed"); } catch (error) { /* Storage may be blocked. */ }
      banner.hidden = true;
    });
    for (const footer of document.querySelectorAll(".footer-links")) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "cookie-notice__reopen";
      button.textContent = "Cookie notice";
      button.addEventListener("click", () => {
        show();
        banner.querySelector(".cookie-notice__dismiss").focus();
      });
      footer.appendChild(button);
    }
    try {
      if (localStorage.getItem(key) !== "dismissed") show();
    } catch (error) {
      show();
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
