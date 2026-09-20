const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    cursorGlow.animate({ left: `${event.clientX}px`, top: `${event.clientY}px` }, { duration: 500, fill: 'forwards' });
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${Math.min((entry.target.dataset.delay || 0) * 55, 300)}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.dataset.delay = index % 5;
  revealObserver.observe(element);
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.filter').forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((button) => {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    });
    filterButton.classList.add('active');
    filterButton.setAttribute('aria-selected', 'true');
    const filter = filterButton.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

const modal = document.querySelector('.project-modal');
const modalTitle = document.querySelector('#modal-title');
const modalMeta = document.querySelector('#modal-meta');
const modalDescription = document.querySelector('#modal-description');
const modalArt = document.querySelector('.modal-art');
const closeModal = () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title;
    modalMeta.textContent = card.dataset.meta;
    modalDescription.textContent = card.dataset.description;
    const sourceImage = card.querySelector('.project-image');
    modalArt.className = `modal-art ${[...sourceImage.classList].find((name) => name.startsWith('image-')) || ''}`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});
document.querySelector('.modal-close')?.addEventListener('click', closeModal);
document.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
