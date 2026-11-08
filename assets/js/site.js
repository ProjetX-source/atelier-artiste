(() => {
  'use strict';
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.site-nav');
  if (toggle && navigation) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Ouvrir le menu');
      navigation.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const opened = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(opened));
      toggle.setAttribute('aria-label', opened ? 'Fermer le menu' : 'Ouvrir le menu');
      navigation.classList.toggle('is-open', opened);
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => { if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu(); });
  }

  const dialog = document.querySelector('.lightbox');
  if (dialog && typeof dialog.showModal === 'function') {
    const bigImage = dialog.querySelector('img');
    const caption = dialog.querySelector('.lightbox-caption');
    document.querySelectorAll('.lightbox-trigger').forEach(button => {
      button.addEventListener('click', () => {
        const src = button.dataset.lightboxSrc;
        if (!src) return;
        bigImage.src = src;
        bigImage.alt = button.dataset.lightboxAlt || 'Photographie de l’œuvre';
        caption.textContent = bigImage.alt;
        dialog.showModal();
      });
    });
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { bigImage.removeAttribute('src'); });
  }
})();
