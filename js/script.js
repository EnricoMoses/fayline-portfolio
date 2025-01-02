// fixed header on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0)
});


// active hamburger icon
const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".nav-mobile");

hamb.addEventListener("click", function(){
    this.classList.toggle("active");
    nav.classList.toggle("active");
});

//typing animation
var typed = new Typed ("#jobs", {
    strings: ["Chef.", "Boss.", "Atlet.", "Model.", "Baker."],
    typeSpeed: 75,
    loop: true
})

//transition animation
AOS.init({
    offset: 1
  });