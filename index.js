
const swiper = new Swiper('.services-swiper', {
    loop: true,
    centeredSlides: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 4,
    breakpoints: {
      1180: {
        slidesPerView: 3,
      },
      1020: {
        slidesPerView: 3,
      },
      700: {
        slidesPerView: 3,
      },
      520: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 3,
      },
      370: {
        slidesPerView: 2,
      },
    },

    loop: true,
    autoplay: {
      delay: false,
      disableOnInteraction: true,
    },
    freeMode: true,
    speed: 4000,
    freeModeMomentum: false,
  });



  
// const partnerSlider = new Swiper(".swiper-partners", {
//     loop: true,
//     freeMode: true,
//     spaceBetween: 0,
//     grabCursor: true,
//     slidesPerView: 4,
//     breakpoints: {
//       1180: {
//         slidesPerView: 4,
//       },
//       1020: {
//         slidesPerView: 4,
//       },
//       700: {
//         slidesPerView: 3,
//       },
//       520: {
//         slidesPerView: 1,
//       },
//       420: {
//         slidesPerView: 3,
//       },
//       370: {
//         slidesPerView: 2,
//       },
//     },
//     loop: true,
//     autoplay: {
//       delay: false,
//       disableOnInteraction: true,
//     },
//     freeMode: true,
//     speed: 4000,
//     freeModeMomentum: false,
//   });