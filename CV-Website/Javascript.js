// Script to make the navigation bar sticky
window.onscroll = function () {
  stickyNav();
};

var navbar = document.querySelector("header");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
