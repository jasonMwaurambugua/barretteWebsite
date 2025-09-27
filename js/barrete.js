// Collapse the Bootstrap navbar on link click (mobile)
(function() {
  var navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  var navCollapse = document.getElementById('navMenu');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Only collapse if Bootstrap is present
      if (typeof bootstrap === 'undefined') return;
      var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (!bsCollapse) {
        bsCollapse = new bootstrap.Collapse(navCollapse, {toggle:false});
      }
      bsCollapse.hide();
    });
  });
})();
