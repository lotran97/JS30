window.onscroll=function(){
	stickyNav();
}

let navbar = document.querySelector('#main');
let logo = document.querySelector('.logo');

let sticky = navbar.offsetTop;


function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("nav2");
    logo.classList.add("logo2");

  } else {
    navbar.classList.remove("nav2");
    logo.classList.remove("logo2");
  }
}