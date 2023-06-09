let scroll1 = window.pageYOffset;
window.onscroll = function () {
    let scroll2 = window.pageYOffset;
    if (scroll2 < scroll1) {
        document.querySelector('nav').style.top = "0";

    } else {
        document.querySelector('nav').style.top = "-470px";
    }

    scroll1 = scroll2;
}


// const navScroll = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         navScroll.classList.add('navbar-scrolled');
//     } else if (window.scrollY <= 50) {
//         navScroll.classList.remove('navbar-scrolled')
//     }
// })

let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
