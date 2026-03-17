(function () {
  'use strict';

  var panels  = document.querySelectorAll('.tab-panel');
  var buttons = document.querySelectorAll('.tab-btn');
  var validIds = Array.prototype.map.call(panels, function (p) { return p.id; });

  function showTab(id) {
    if (validIds.indexOf(id) === -1) id = 'about';
    panels.forEach(function (p) {
      p.classList.toggle('active', p.id === id);
    });
    buttons.forEach(function (b) {
      b.classList.toggle('active', b.dataset.tab === id);
    });
  }

  function activeTabFromHash() {
    var hash = window.location.hash.slice(1);
    return validIds.indexOf(hash) !== -1 ? hash : 'about';
  }

  // Tab button clicks
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tab = btn.dataset.tab;
      history.pushState(null, '', '#' + tab);
      showTab(tab);
    });
  });

  // Sidebar / inline tab links
  document.addEventListener('click', function (e) {
    var link = e.target.closest('.tab-link');
    if (!link) return;
    var tab = link.dataset.tab;
    if (!tab) return;
    e.preventDefault();
    history.pushState(null, '', '#' + tab);
    showTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Back/forward navigation
  window.addEventListener('popstate', function () {
    showTab(activeTabFromHash());
  });

  // Initial render
  showTab(activeTabFromHash());
}());
