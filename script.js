// script.js — API Studio V6
// Responsibilities:
// - Add accessible keyboard activation to cards
// - Ripple feedback and pressed state for touch devices
// - Minimal, fast, no theme toggles (light-only)

(function () {
  const cards = Array.from(document.querySelectorAll('.api-card'));

  function createRipple(card, clientX, clientY) {
    const rect = card.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height) * 1.2;
    ripple.style.position = 'absolute';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (clientY - rect.top - size / 2) + 'px';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.background = 'radial-gradient(circle, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.02) 40%, transparent 60%)';
    ripple.style.opacity = '0';
    ripple.style.transform = 'scale(.6)';
    ripple.style.transition = 'transform 420ms cubic-bezier(.2,.9,.2,1), opacity 420ms';
    card.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.opacity = '1';
      ripple.style.transform = 'scale(1.6)';
    });
    setTimeout(() => {
      ripple.style.opacity = '0';
      setTimeout(() => ripple.remove(), 420);
    }, 420);
  }

  cards.forEach(card => {
    // make focusable for keyboard
    card.tabIndex = 0;

    // pointer interactions
    card.addEventListener('pointerdown', (e) => {
      // pressed visual (CSS :active handles opacity on some browsers; we do extra)
      card.classList.add('pressed');
      card.style.opacity = '0.5';
      try { createRipple(card, e.clientX, e.clientY); } catch (err) {}
    });

    ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => {
      card.addEventListener(ev, () => {
        card.classList.remove('pressed');
        card.style.opacity = '';
      });
    });

    // keyboard activation
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // emulate click - follow href if present
        const href = card.getAttribute('href');
        card.classList.add('pressed');
        setTimeout(() => card.classList.remove('pressed'), 150);
        if (href) window.location.href = href;
      }
    });

    // ensure accessible label role
    card.setAttribute('role', 'link');
  });

  // Micro-optimisation: ensure svh height fix on mobile iOS/Android
  (function setSVH(){
    try {
      const svh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--svh', `${svh}px`);
    } catch(e) {}
  })();

  // Expose small API for debugging
  window.APIS_STUDIO_V6 = {
    cardsCount: cards.length
  };
})();
