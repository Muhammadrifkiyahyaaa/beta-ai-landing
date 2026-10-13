/* Animasi muncul saat di-scroll.
   Semua teks sudah ada di HTML; skrip ini hanya menambahkan efek.
   Kalau skrip gagal atau browser tidak mendukung, teks tetap tampil. */
(function () {
  if (!('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    'main h2, main h3, main p, main li, main .assistant'
  );
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

  targets.forEach(function (el) {
    el.classList.add('reveal');
    if (el.tagName === 'LI') {
      // item daftar muncul berurutan, bukan serentak
      var index = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.transitionDelay = Math.min(index, 5) * 70 + 'ms';
    }
    io.observe(el);
  });
})();
