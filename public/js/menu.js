const profileBtn = document.querySelector('.img-profile');
const nav = document.querySelector('.nav-wrapper');

profileBtn.addEventListener('click', toggleMenu);
document.addEventListener('click', mouseClickOutsideMenu);

function toggleMenu () {
  nav.classList.toggle('nav-hide');
}

function mouseClickOutsideMenu (e) {
 if (!profileBtn.contains(e.target)) {
   nav.classList.add('nav-hide');
 }
}

