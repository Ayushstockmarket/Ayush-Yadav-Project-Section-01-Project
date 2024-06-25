let menuButton=document.querySelector('#menu-btn');
let Navbar=document.querySelector('.flex-nav');
menuButton.onclick= ()=>{
  Navbar.classList.toggle('active')
}

// Swipper .js Will be added
var swiper = new Swiper(".course-slider", {
  spaceBetween:20,
  grabCursor:true,
  loop:true,
  clickable:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
