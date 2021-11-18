import '../scss/style.scss';

// Variables
const hamburgerOpenBtn = document.getElementById('hamburgerOpenBtn');
const mobileNavbar = document.getElementById('mobileNavbar');
const hamburgerCloseBtn = document.getElementById('hamburgerCloseBtn');

// Functions
const openMobileNavbar = () => {
  hamburgerOpenBtn.classList.add('hide');
  mobileNavbar.classList.remove('hide');
};

const closeMobileNavbar = () => {
  mobileNavbar.classList.add('hide');
  hamburgerOpenBtn.classList.remove('hide');
};

// Event Listeners
hamburgerOpenBtn.addEventListener('click', openMobileNavbar);
hamburgerCloseBtn.addEventListener('click', closeMobileNavbar);
