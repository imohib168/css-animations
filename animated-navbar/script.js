const hamburger = document.getElementById('hamburger');
const ccc = document.querySelector('.hoverlay');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', handleHamburger);

function handleHamburger() {
  hamburger.classList.toggle('open');
  ccc.classList.toggle('show-hoverlay');
  document.body.classList.toggle('no-scroll');
  navbar.classList.toggle('show-navbar');
  menu.classList.toggle('fadeoffline');
}
