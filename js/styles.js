
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", ()=>{
  navMenu.classList.toggle("nav-menu_visible");

  if(navMenu.classList.contains("nav-menu-visible")){
    navToggle.setAttribute("aria-label", "Cerrar Menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir Menú");
  }
} )

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBarId").style.top = "0";
    document.getElementById("navBarId").style.backgroundColor = "#F598D7";
  } else {
    document.getElementById("navBarId").style.top = "-100px";
    document.getElementById("navBarId").style.transition = "0.5s";
    document.getElementById("navBarId").style.backgroundColor = "transparent";
  }
  prevScrollpos = currentScrollPos;
} 
 
