
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Mobile navigation
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Open navigation'
    );
  });
}

// Automatically update the copyright year
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}
