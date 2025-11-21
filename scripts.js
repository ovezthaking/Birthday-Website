document.addEventListener('DOMContentLoaded', function() {
  const gifts = document.querySelectorAll('.gift-img');
  gifts.forEach(function(g) {
    g.setAttribute('tabindex', '0');
    g.style.cursor = 'pointer';
    g.addEventListener('click', function() { g.classList.toggle('revealed'); });
    g.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); g.classList.toggle('revealed'); }
    });
  });
});
