// document.getElementById("check").addEventListener("change", function() {
//   const sideMenu = document.getElementById("side-menu");
//   if (this.checked) {
//       sideMenu.style.left = "0"; // Open menu (slide in)
//   } else {
//       sideMenu.style.left = "-100%"; // Close menu (slide out)
//   }
// });

document.getElementById("check").addEventListener("change", function() {
  const sideMenu = document.getElementById("side-menu");
  const menuList = sideMenu.querySelector("#side-menu > ul"); // Select the <ul> inside side-menu

  if (this.checked) {
      sideMenu.style.left = "0"; // Open menu (slide in)
      
      // Delay adding the 'show' class to <ul> by 1 second (1000 ms)
      setTimeout(() => {
          menuList.classList.add("show");
      }, 600);
  } else {
      sideMenu.style.left = "-100%"; // Close menu (slide out)
      
      // Remove the 'show' class from <ul> immediately to hide it
      menuList.classList.remove("show");
  }
});


$(document).ready(function() {
  $('.toggle-submenu').on('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    $(this).closest('li').find('.submenu').slideToggle(400); // Slide toggle the corresponding submenu with animation
  });
});


$(document).ready(function() {
  $('.nav-link').on('click', function() {
      // Remove active class from all nav links
      $('.nav-link').removeClass('active');
      
      // Add active class to the clicked link
      $(this).addClass('active');
  });
});

$(document).ready(function(){
  // Initialize Owl Carousel
  $('#websites-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // Remove inline styles applied by Owl Carousel after initialization
  $('.owl-carousel .owl-item img').each(function() {
    $(this).removeAttr('style');  // Remove inline styles like width and height
  });
});


// $(document).ready(function() {
//   $("#package-cards-carousel").owlCarousel({
//     items: 3, 
//     loop: true, 
//     margin: 10, 
//     dots: true, 
//     autoplay: false, 
//     autoplayTimeout: 3000,
//     autoplaySpeed: 2000, 
//     nav: true, 
//     navSpeed: 500, 
//     responsive: {
//       0: {
//         items: 1 
//       },
//       600: {
//         items: 2 
//       },
//       1000: {
//         items: 3 
//     }
//   }
//   });

//   // Hook up custom navigation buttons
//   $('.package-prev').click(function() {
//     $('#package-cards-carousel').trigger('prev.owl.carousel', [1000]); 
//   });

//   $('.package-next').click(function() {
//     $('#package-cards-carousel').trigger('next.owl.carousel', [1000]); 
//   });
// });

// // $(document).ready(function(){
// //   $("#logo-carousel").owlCarousel({
// //     loop: true,
// //     margin: 10,
// //     autoplay: false,
// //     autoplayTimeout: 3000,
// //     autoplayHoverPause: true,
// //     animateOut: 'slideOutUp', // Use slide animations for vertical effect
// //     animateIn: 'slideInDown',
// //     items: 2, // Show one item at a time for vertical scroll
// //     nav: false,
// //     dots: false
// //   });
// // });




$(document).ready(function() {
  var swiper = new Swiper('.services-swiper', {
    loop: true, // Enable infinite looping
    freeMode: true, // Enable free mode for continuous movement
    speed: 3000, // Adjust speed to control continuous scroll speed
    autoplay: {
      delay: 0, // Removes delay between transitions
      disableOnInteraction: false // Keep autoplay running even after interaction
    },
    slidesPerView: 4, // Number of logos visible at once
    spaceBetween: 10, // Space between logos
    allowTouchMove: false, // Disable user control for a smoother continuous effect
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
});

  
$(document).ready(function () {
  // Initialize Swiper
  var swiper = new Swiper('#testimonial-carousel', {
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    navigation: {
      nextEl: '.custom-nav .next',
      prevEl: '.custom-nav .prev',
    },
    // Configure breakpoints for responsive behavior
    breakpoints: {
      // When the window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // When the window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      // When the window width is >= 1024px
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    },
    on: {
      // Reattach custom navigation after breakpoint change
      breakpoint: function () {
        initCustomNav();
      }
    }
  });

  // Function to initialize custom navigation for dots
  function initCustomNav() {
    $('.custom-nav .dots').off('click').on('click', 'span', function () {
      var index = $(this).data('index');
      swiper.slideToLoop(index);
    });
  }

  // Initial call to custom navigation setup
  initCustomNav();
});



$(document).ready(function() {
  var imageCarousel = new Swiper('.image-carousel-1', {
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false 
    },
    slidesPerView: 4, 
    spaceBetween: 10,
    allowTouchMove: false,  // Disable touch for smoother autoplay
    breakpoints: {
      // When window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // When window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // When window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      // When window width is >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
});


$(document).ready(function() {
  var imageCarousel = new Swiper('.image-carousel-2', {
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,                       // No delay for continuous scrolling effect
      disableOnInteraction: false,    // Keep autoplay running even after interaction
      reverseDirection: true          // Reverse autoplay direction for right-to-left effect
    },
    slidesPerView: 4, 
    spaceBetween: 10,
    allowTouchMove: false,  // Disable touch for smoother autoplay
 
    breakpoints: {
      // When window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // When window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // When window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      // When window width is >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
});



$(document).ready(function() {
  var swiper1 = new Swiper('#swiper-container-1', {
      direction: 'vertical', // Set carousel direction to vertical
      loop: true, // Enable infinite looping
      freeMode: true, // Enable free mode for continuous movement
      speed: 3000, // Adjust speed to control continuous scroll speed
      autoplay: {
          delay: 0, // Removes delay between transitions
          disableOnInteraction: false // Keep autoplay running even after interaction
      },

      slidesPerView: 4, // Number of logos visible at once
      spaceBetween: 10, // Space between logos
      allowTouchMove: false // Disable user control for a smoother continuous effect
  });

// Carousel moving top-to-bottom
var swiper2 = new Swiper('#swiper-container-2', {
  direction: 'vertical',
  loop: true,
  autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true // Set to true for top-to-bottom effect
  },
  speed: 3000,
  slidesPerView: 4,
  spaceBetween: 10,
  allowTouchMove: false,
  on: {
      init: function () {
          this.slideTo(0); // Start from the first slide
      }
  }
});


  var swiper3 = new Swiper('#swiper-container-3', {
      direction: 'vertical', // Set carousel direction to vertical
      loop: true, // Enable infinite looping
      freeMode: true, // Enable free mode for continuous movement
      speed: 3000, // Adjust speed to control continuous scroll speed
      autoplay: {
          delay: 0, // Removes delay between transitions
          disableOnInteraction: false // Keep autoplay running even after interaction
      },
      slidesPerView: 4, // Number of logos visible at once
      spaceBetween: 10, // Space between logos
      allowTouchMove: false // Disable user control for a smoother continuous effect
  });
});



$(document).ready(function () {
  var swiper1 = new Swiper("#website-carousel-1", {
    direction: 'vertical',
    freeMode: true,
    loop: true,
    loopedSlides: 3,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    speed: 3000,
    slidesPerView: 'auto',
    spaceBetween: 20,
    allowTouchMove: false
  });

  var swiper2 = new Swiper("#website-carousel-2", {
    direction: 'vertical',
    loop: true,
    loopedSlides: 3,
    speed: 3000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true
    },
    slidesPerView: 'auto',
    spaceBetween: 20,
    allowTouchMove: false
  });
});



// ANIME JS ANIMATIONS 

$(document).ready(function() {

  // Animation for the triangle using Anime.js
anime({
  targets: '.triangle',
  translateY: [
    { value: -30, duration: 500, easing: 'easeInOutSine' },
    { value: 0, duration: 500, easing: 'easeInOutSine' }
  ],
  rotate: {
    value: '1turn', // Rotate 360 degrees
    duration: 2000,
    easing: 'easeInOutSine'
  },
  loop: true // Repeat the animation
});


  anime({
    targets: '#header-icon',
    rotate: [
      { value: -5, duration: 100, easing: 'easeInOutSine' },
      { value: 5, duration: 100, easing: 'easeInOutSine' },
      { value: -5, duration: 100, easing: 'easeInOutSine' },
      { value: 0, duration: 100, easing: 'easeInOutSine' }
    ],
    scale: [
      { value: 1.1, duration: 200, easing: 'easeInOutQuad' },  // Zoom in slightly
      { value: 0.95, duration: 200, easing: 'easeInOutQuad' }, // Shrink slightly
      { value: 1.05, duration: 200, easing: 'easeInOutQuad' }, // Zoom in again
      { value: 1, duration: 200, easing: 'easeInOutQuad' }     // Back to normal size
    ],
    loop: true, // Infinite loop for continuous jiggle + zoom effect
    duration: 1200 // Total time for one complete animation cycle
  });

  
  anime({
    targets: ['.box','.threeD-square img'],
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'linear'
    },
    loop: true
  });



  anime({
    targets: '.arrow img',
    translateX: [
      { value: -10, duration: 100, easing: 'easeInOutSine' }, // Move left
      { value: 10, duration: 100, easing: 'easeInOutSine' }, // Move right
      { value: -5, duration: 100, easing: 'easeInOutSine' }, // Move left again
      { value: 5, duration: 100, easing: 'easeInOutSine' }, // Move right again
      { value: 0, duration: 100, easing: 'easeInOutSine' } // Return to original position
    ],
    rotate: {
      value: '1turn', // Full 360-degree rotation
      duration: 2000, // Duration for the complete rotation
      easing: 'easeInOutSine' // Easing function for smoothness
    },
    loop: true // Repeat indefinitely
  });


  // anime({
  //   targets: '.arrow img',
  //   rotate: {
  //     value: 360,
  //     duration: 2000,
  //     easing: 'linear',
  //   },
  //   translateX: function() {
  //     return anime.random(-500, 0);
  //   },
  //   translateY: function() {
  //     return anime.random(-300, 300);
  //   },
  //   scale: [
  //     { value: 1.5, duration: 700, easing: 'easeInOutQuad' },
  //     { value: 1, duration: 700, easing: 'easeInOutQuad' }
  //   ],
  //   opacity: [
  //     { value: 0.5, duration: 500, easing: 'easeInOutQuad' },
  //     { value: 1, duration: 500, easing: 'easeInOutQuad' }
  //   ],
  //   duration: 4000,
  //   easing: 'easeInOutSine',
  //   loop: true,
  //   direction: 'alternate',
  //   delay: anime.stagger(100),
  // });

  anime({
    targets: '.abstract',
    scale: [1, 1.2],
    easing: 'easeInOutSine',
    duration: 1500,
    loop: true,
    direction: 'alternate'
  });

  anime({
    targets: '#circle',
    rotate: {
      value: 360,
      duration: 4000,
      easing: 'linear',
      loop: true
    },
    scale: [
      { value: 1.2, duration: 1000, easing: 'easeInOutQuad' },
      { value: 1, duration: 1000, easing: 'easeInOutQuad' }
    ],
    loop: true
  });

  anime({
    targets: '#loader-image',
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'linear'
    },
    loop: true
  });


  anime({
    targets: '.laptop-bounce',
    translateY: [
      { value: -10, duration: 600, easing: 'easeInOutSine' }, 
      { value: 0, duration: 600, easing: 'easeInOutSine' }  
    ],
    loop: true 
  });
  anime({
    targets: '.peoples-animation', 
    scale: [
      { value: 1.1, duration: 500 }, 
      { value: 1, duration: 500 } 
    ],
    duration: 2000, 
    easing: 'easeInOutSine', 
    loop: true 
  });

  anime({
    targets: '.be-the-best', 
    translateY: [0, -20], 
    duration: 1000, 
    easing: 'easeInOutSine', 
    direction: 'alternate', 
    loop: true 
  });

  anime({
    targets: '.mockup-book',
    translateY: [
      { value: -10, duration: 300, easing: 'easeInOutQuad' }, // Increased duration
      { value: 0, duration: 300, easing: 'easeInOutQuad' }
    ],
    loop: true, // Loop the animation indefinitely
    easing: 'easeInOutQuad', // Easing function for smoothness
    duration: 600 // Increased duration for the bounce
  });

  anime({
    targets: '.spiral img',
    scaleX: [
      { value: 1.5, duration: 800, easing: 'easeOutElastic(1, 0.5)' }, // Stretch along the x-axis
      { value: 0.7, duration: 800, easing: 'easeOutElastic(1, 0.5)' }, // Shrink along the x-axis
      { value: 1, duration: 1200, easing: 'easeOutElastic(1, 0.5)' }   // Return to original size
    ],
    duration: 3000, // Total duration of the animation
    loop: true, // Repeat the animation indefinitely
    direction: 'alternate' // Alternate between stretching and shrinking
  });
  
  anime({
    targets: ['.concentric-square img', '.concentric-square-container'], // Combine both targets
    rotate: {
      value: '1turn',
      duration: 3000,
      easing: 'linear'
    },
    scale: [
      { value: 1.2, duration: 1000, easing: 'easeInOutSine' },
      { value: 1, duration: 1000, easing: 'easeInOutSine' }
    ],
    opacity: [
      { value: 0.7, duration: 1000, easing: 'easeInOutSine' },
      { value: 1, duration: 1000, easing: 'easeInOutSine' }
    ],
    loop: true
  });
  

  anime({
    targets: '.Concentric-circle-2',
    rotate: {
      value: '1turn', // Rotate a full turn
      duration: 3000, // Duration of the rotation
      easing: 'linear', // Linear easing for continuous rotation
    },
    scale: [
      { value: 1.2, duration: 1000, easing: 'easeInOutSine' }, // Scale up
      { value: 1, duration: 1000, easing: 'easeInOutSine' }    // Scale back down
    ],
    loop: true // Repeat the animation indefinitely
  });

  

  
  function getRandomPosition(max) {
    return Math.random() * max - max / 2; // Generate random position within range
  }
  
  function getRandomPosition(max, isY = false) {
    return isY ? Math.random() * max - max / 2 : Math.random() * max - max / 2; // Generate random position within range
  }
  
  // function animateArrow() {
  //   anime({
  //     targets: ['.arrow-2 img','.arrow-3 img',],
  //     translateX: getRandomPosition(600), // Horizontal movement remains large
  //     translateY: getRandomPosition(100, true), // Decreased vertical range to -50 to 50
  //     duration: 2000, // Duration of the animation
  //     easing: 'easeInOutQuad', // Easing function
  //     complete: animateArrow // Repeat the animation when complete
  //   });
  // }
  
  function animateArrow() {
    anime({
      targets: ['.arrow-2 img', '.arrow-3 img'],
      rotate: {
        value: 360, // Rotate 360 degrees
        duration: 2000, // Duration of the animation
        easing: 'easeInOutQuad'
      },
      loop: true // Repeat the animation infinitely
    });
  }
  

  // Start the animation
  animateArrow();
  anime({
    targets: '.About-Image',
    translateX: [-20, 20], // Moves the image back and forth horizontally
    scale: [1, 1.05], // Gentle scaling to give a breathing effect
    duration: 3000, // Duration of the animation cycle
    easing: 'easeInOutQuad', // Smooth easing for a natural effect
    direction: 'alternate', // Alternates between forward and backward
    loop: true // Loops the animation indefinitely
});

});
// ANIME JS ANIMATIONS 




// GSAP ANIMATIONS 
$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);

 // GSAP 3D twirl effect on mouse move for multiple package cards
const cards = document.querySelectorAll('.package-card');

cards.forEach(card => {
  // Initial styles for the card
  card.style.backgroundColor = '#edf1f8';  
  card.style.transition = 'background 1s ease-in-out';

  // Mousemove event for 3D effect
  card.addEventListener('mousemove', (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5; 
    const y = (clientY - top) / height - 0.5; 

    const strength = 10; 
    gsap.to(card, {
      rotationY: x * strength,
      rotationX: -y * strength,
      transformPerspective: 800,
      duration: 0.5, 
      ease: "power2.out"
    });
  });

  // Mouseenter event for background change
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      background: 'radial-gradient(circle, #ffffff, #abbaab)', 
      duration: 0.5,
      ease: "power2.out"
    });
  });

  // Mouseleave event to reset the card to its initial position and background
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      transformPerspective: 800,
      duration: 0.5, // Smooth reset for rotation
      ease: "power2.out"
    });
    gsap.to(card, {
      background: '#edf1f8',
      duration: 0.1, // Quick reset for background color
      ease: "power2.out"
    });
  });
});


  // Scroll-triggered animations for headings
  const headings = document.querySelectorAll('.animated-heading');

  headings.forEach((heading) => {
    gsap.from(heading, {
      scrollTrigger: {
        trigger: heading, 
        start: 'top 95%', 
        end: 'bottom 20%', 
        scrub: 0.5, // Smooth animation
        toggleActions: 'play reverse play reverse'
      },
      opacity: 0, 
      y: 30, 
      duration: 1.5,
      ease: 'power2.inOut' 
    });
  });

  // Animation for logos section
  const boxes = gsap.utils.toArray('.logos-box');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.logo-section',
      start: 'top 80%', 
      end: 'bottom 60%', 
      scrub: 1, 
      toggleActions: 'play none none reverse'
    }
  });

  boxes.forEach((box, index) => {
    tl.fromTo(box, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "circ.out",
        delay: index * 0.1 
      },
      "<");
  });

  // Customer satisfaction section animations
  const satisfactionBoxes = gsap.utils.toArray('.customer-satisfaction-box');

  const satisfactionTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.customer-satisfaction-container',
      start: 'top 90%', 
      end: 'bottom 70%', 
      scrub: 0.2, 
      toggleActions: 'play none none reverse',
      ease: "power2.out"
    }
  });

  satisfactionBoxes.forEach((box, index) => {
    satisfactionTl.fromTo(box, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "back.out(1.7)",
        delay: index * 0.3 
      }, 
      "<");
  });

  // Animation for logo cards
  const logoCards = gsap.utils.toArray('.logo-sec-card');

  const logoCardTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.logo-cards-section',
      start: 'top 60%',
      end: 'bottom 30%',
      scrub: 1, 
      toggleActions: 'play none none reverse'
    }
  });

  logoCards.forEach((card, index) => {
    const direction = index % 2 === 0 ? -100 : 100; 
    logoCardTl.fromTo(card, 
      { x: direction, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1.5, 
        ease: "expo.out", 
        delay: index * 0.2 
      }, 
      "<"); 
  });


// Web design card animations
// const designCards = gsap.utils.toArray('.website-Designs');

// const designCardTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.website-Designs-Cards',
//     start: 'top 75%', 
//     end: 'bottom 0%', // Increase the distance to make it scroll over a longer area
//     scrub: 2, // Adjusting scrub value for smoother and slower scrolling
//     toggleActions: 'play none none reverse',
//     invalidateOnRefresh: true // Ensures recalculation when the window resizes
//   }
// });

// // Animate each card with a staggered slide effect
// designCards.forEach((card, index) => {
//   const direction = index % 2 === 0 ? -150 : 150; // Slide from left if index is even, from right if odd

//   designCardTl.fromTo(card, 
//     { 
//       x: direction, // Start further left (-150) or right (150)
//       opacity: 0 // Start invisible
//     }, 
//     { 
//       x: 0, // Slide to the original position
//       opacity: 1, // Fade in
//       ease: "expo.out", // Use a smoother easing function for fluid animation
//     }, 
//     index * 0.3  // Stagger timing for smoother animation (delays based on index)
//   );
// });

  
  // Column animations
  const columns = gsap.utils.toArray('.animated-column');

  columns.forEach((col, index) => {
    const offset = index % 2 === 0 ? 100 : -100; 
    gsap.fromTo(col, 
      { y: offset, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: col,
          start: 'top 75%', 
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Experience-driven text and icon animations
  const firstDiv = document.querySelector('.experience-driven-text');
  const secondDiv = document.querySelector('.experience-driven-icons');

  gsap.from(firstDiv, {
    scrollTrigger: {
      trigger: firstDiv,
      start: 'top 80%', 
      toggleActions: 'play none none reverse',
    },
    x: 100, 
    opacity: 0, 
    duration: 1, 
    ease: 'power2.out',
  });

  gsap.from(secondDiv, {
    scrollTrigger: {
      trigger: secondDiv,
      start: 'top 80%', 
      toggleActions: 'play none none reverse',
    },
    x: 100, 
    opacity: 0, 
    duration: 1, 
    ease: 'power2.out',
    delay: 0.5,
  });

// GSAP animation script
gsap.from(".first-col", {
  duration: 1.5,       // Shorter duration for a smoother feel
  x: -150,             // Increased distance for a more dynamic entry
  opacity: 0,
  ease: "power2.out",  // Softer easing for a smoother animation
  stagger: 0.2,        // Reduced stagger for a continuous flow
});

gsap.from(".second-col", {
  duration: 1.5,       // Match duration for both columns
  x: 150,              // Mirror distance from the opposite side
  opacity: 0,
  ease: "power2.out",  // Consistent easing
  delay: 0.2,          // Slight delay for a natural entry sequence
});


});


// GSAP ANIMATIONS 

$(document).ready(function() {
  // Initially, hide all tab content except the first one
  $('.tab-content-section').hide(); // Hide all content sections
  $('.tab-content-section:first').show().addClass('active-tab'); // Show the first content section by default
  $('#Portfolio-Tab li:first').addClass('active'); // Set the first tab as active

  // When a tab is clicked
  $('#Portfolio-Tab li').click(function() {
     // Remove active class from all tabs
     $('#Portfolio-Tab li').removeClass('active');
     // Add active class to the clicked tab
     $(this).addClass('active');

     // Hide all content sections
     $('.tab-content-section').hide().removeClass('active-tab');

     // Get the target content section based on the clicked tab's data-target attribute
     var target = $(this).data('target');
     
     // Show the selected content and add the active class
     $(target).fadeIn().addClass('active-tab');

     // Refresh ScrollTrigger after showing the new tab content
     gsap.delayedCall(0.1, function() {
       ScrollTrigger.refresh(); // Recalculate the ScrollTrigger elements
     });
  });



  
// function animateCardsInTab(tabSelector) {
//   // Select all design cards in the currently visible tab
//   const designCards = gsap.utils.toArray(`${tabSelector} .website-Designs`);

//   // Create the timeline for the visible tab content
//   const designCardTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: tabSelector, // Use the currently visible tab as the trigger
//       start: 'top 75%', 
//       end: 'bottom 0%', 
//       scrub: 2,
//       toggleActions: 'play none none reverse',
//       invalidateOnRefresh: true
//     }
//   });

//   // Animate each card within the visible tab
//   designCards.forEach((card, index) => {
//     const direction = index % 2 === 0 ? -150 : 150; // Slide from left if index is even, from right if odd

//     designCardTl.fromTo(card, 
//       { 
//         x: direction, // Start further left (-150) or right (150)
//         opacity: 0 // Start invisible
//       }, 
//       { 
//         x: 0, // Slide to the original position
//         opacity: 1, // Fade in
//         ease: "expo.out",
//       }, 
//       index * 0.3  // Stagger timing for smoother animation (delays based on index)
//     );
//   });
// }

// // Call the animation function when the page loads for the first tab
// animateCardsInTab('#logo-design');

// // Update the animation for the selected tab when switching tabs
// $('ul li').click(function() {
//   var target = $(this).data('target');
  
//   // Ensure the new tab's content gets the animation
//   animateCardsInTab(target);
  
//   // Refresh ScrollTrigger after showing the new tab content
//   gsap.delayedCall(0.1, function() {
//     ScrollTrigger.refresh(); // Recalculate the ScrollTrigger elements
//   });
// });

});



$(document).ready(function() {
  // Initially, hide all tab content except the first one
  $('.logo-tab-content').hide(); // Hide all content sections
  $('.logo-tab-content:first').show().addClass('active-tab'); // Show the first content section by default
  $('#logo-Tab li:first').addClass('active'); // Set the first tab as active

  // When a tab is clicked
  $('#logo-Tab li').click(function() {
     // Remove active class from all tabs
     $('#logo-Tab li').removeClass('active');
     // Add active class to the clicked tab
     $(this).addClass('active');

     // Hide all content sections
     $('.logo-tab-content').hide().removeClass('active-tab');

     // Get the target content section based on the clicked tab's data-target attribute
     var target = $(this).data('target');
     
     // Show the selected content and add the active class
     $(target).fadeIn().addClass('active-tab');

     // Refresh ScrollTrigger after showing the new tab content
     gsap.delayedCall(0.1, function() {
       ScrollTrigger.refresh(); // Recalculate the ScrollTrigger elements
     });
  });



});




$(document).ready(function() {
  // Initially, hide all tab content except the first one
  $('.package-tab-content').hide(); // Hide all content sections
  $('.package-tab-content:first').show().addClass('active-tab'); // Show the first content section by default
  $('#Packages-Tab li:first').addClass('active'); // Set the first tab as active

  // When a tab is clicked
  $('#Packages-Tab li').click(function() {
     // Remove active class from all tabs
     $('#Packages-Tab li').removeClass('active');
     // Add active class to the clicked tab
     $(this).addClass('active');

     // Hide all content sections
     $('.package-tab-content').hide().removeClass('active-tab');

     // Get the target content section based on the clicked tab's data-target attribute
     var target = $(this).data('target');
     
     // Show the selected content and add the active class
     $(target).fadeIn().addClass('active-tab');

     // Refresh ScrollTrigger after showing the new tab content
     gsap.delayedCall(0.1, function() {
       ScrollTrigger.refresh(); // Recalculate the ScrollTrigger elements
     });
  });



});




$(document).ready(function() {
  // Show and keep dropdown open when hovering over the container
  $('#servicesDropdownContainer').hover(
    function() {
      $('#customDropdownMenu').stop(true, true).slideDown(200); // Show dropdown with slide-down effect
    },
    function() {
      $('#customDropdownMenu').stop(true, true).slideUp(200); // Hide dropdown with slide-up effect
    }
  );
});









// .carousel-wrapper {
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100vh; /* Adjust height as needed */
// }

// .mobile-mockup {
//   position: absolute;
//   width: 300px; /* Mockup width */
//   height: 600px; /* Mockup height */
//   z-index: 10;
//   pointer-events: none; /* Prevent interaction with the mockup */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .mobile-mockup img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// #mockup-carousel .item {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// #mockup-carousel .item img {
//   /* width: 100px; 
//   height: 200px; */
//   transition: transform 0.3s ease;
// }

// .owl-item.active.center .item img {
//   transform: scale(1.2); /* Make the center slide larger when active */
// }



















// <button class="helo-btn">Hello</button>


// .helo-btn {
//   position: relative;
//   padding: 10px 20px;
//   border: 4px solid transparent; /* Initial border setting */
//   border-radius: 8px; /* Adjust to your preference */
//   background-color: #222; /* Dark background to make the glow more visible */
//   color: #fff;
//   font-size: 16px;
//   font-weight: bold;
//   text-transform: uppercase;
//   cursor: pointer;
//   transition: color 0.3s;
//   background-clip: padding-box; /* Ensure background doesn't overlap border */
// }

// .helo-btn::before {
//   content: '';
//   position: absolute;
//   top: -4px; /* Adjust to match border thickness */
//   left: -4px; /* Adjust to match border thickness */
//   right: -4px; /* Adjust to match border thickness */
//   bottom: -4px; /* Adjust to match border thickness */
//   border-radius: inherit;
//   background: linear-gradient(45deg, #ff00cc, #3333ff); /* Gradient colors */
//   z-index: -1;
//   border: 2px solid transparent; /* This makes space for the gradient border */
//   border-radius: inherit;
//   background-clip: padding-box; /* Ensures gradient border is visible */
//   transition: opacity 0.3s ease-in-out;
//   opacity: 0; /* Initially invisible */
// }

// .helo-btn:hover::before {
//   opacity: 1; /* Make the gradient border visible on hover */
// }

// .helo-btn:hover {
//   color: #fff; /* Adjust text color if needed */
// }
