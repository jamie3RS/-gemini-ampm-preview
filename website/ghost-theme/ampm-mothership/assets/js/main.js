// AMPM Group — site interactions.
// Reveal-on-scroll, counter animation, nav active state.

(function () {
  'use strict';

  // ---- Nav active state ----
  // Set is-active class on the nav link whose href matches the current section.
  function setNavActive() {
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    var sectionMap = {
      '': 'home',
      '/work': 'work',
      '/insights': 'insights',
      '/companies': 'companies',
      '/approach': 'approach',
      '/people': 'people',
      '/contact': 'contact'
    };
    // Find longest matching prefix
    var key = '';
    for (var prefix in sectionMap) {
      if (path === prefix || path.indexOf(prefix + '/') === 0) {
        if (prefix.length > key.length) key = prefix;
      }
    }
    var active = sectionMap[key] || 'home';
    var links = document.querySelectorAll('[data-nav-key]');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-nav-key') === active) {
        links[i].classList.add('is-active');
      }
    }
  }

  // ---- Reveal-on-scroll ----
  function setupReveal() {
    var elements = document.querySelectorAll('.reveal:not(.is-in)');
    if (!elements.length || !('IntersectionObserver' in window)) {
      // No-op fallback: just show everything.
      for (var i = 0; i < elements.length; i++) elements[i].classList.add('is-in');
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(function (el) { io.observe(el); });
  }

  // ---- Counter animation ----
  function setupCounters() {
    var counters = document.querySelectorAll('[data-counter]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseInt(el.getAttribute('data-counter'), 10);
        var duration = 1200;
        var start = performance.now();
        function tick(now) {
          var t = Math.min(1, (now - start) / duration);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased).toLocaleString();
          if (t < 1) requestAnimationFrame(tick);
        }
        el.textContent = '0';
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.3 });

    counters.forEach(function (el) { io.observe(el); });
  }

  // ---- Ghost members form state classes ----
  // When a data-members-form submits, Ghost handles the API call but doesn't
  // toggle visual state. We add .success / .error classes for our CSS.
  function setupMembersFormFeedback() {
    var forms = document.querySelectorAll('[data-members-form]');
    forms.forEach(function (form) {
      form.addEventListener('submit', function () {
        form.classList.remove('error');
        form.classList.add('loading');
      });
    });

    // Ghost dispatches a custom event when the API call completes.
    document.addEventListener('signup', function (ev) {
      var form = document.querySelector('[data-members-form]');
      if (form) {
        form.classList.remove('loading');
        form.classList.add('success');
      }
    });
  }

  // ---- Init ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    setNavActive();
    setupReveal();
    setupCounters();
    setupMembersFormFeedback();
  }
})();
