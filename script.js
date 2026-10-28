const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('#nav-links');

// Open and close the navigation menu on small screens.
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menuToggle.textContent = isOpen ? '×' : '☰';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
      menuToggle.textContent = '☰';
    });
  });
}

// Display the current year in the footer.
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
