document.getElementById("check").addEventListener("change", function() {
  const sideMenu = document.getElementById("side-menu");
  if (this.checked) {
      sideMenu.style.left = "0"; // Open menu (slide in)
  } else {
      sideMenu.style.left = "-300px"; // Close menu (slide out)
  }
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


$(document).ready(function() {
  $("#package-cards-carousel").owlCarousel({
    items: 3, 
    loop: true, 
    margin: 10, 
    dots: true, 
    autoplay: true, 
    autoplayTimeout: 3000,
    autoplaySpeed: 2000, 
    nav: true, 
    navSpeed: 500, 
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

  // Hook up custom navigation buttons
  $('.package-prev').click(function() {
    $('#package-cards-carousel').trigger('prev.owl.carousel', [1000]); 
  });

  $('.package-next').click(function() {
    $('#package-cards-carousel').trigger('next.owl.carousel', [1000]); 
  });
});






$(document).ready(function() {
  $('#services-carousel').owlCarousel({
    loop: true,                      
    autoplay: true,                 
    autoplayTimeout: 1000,             
    autoplaySpeed: 5000,            
    slideTransition: 'linear',     
    margin: 10,                    
    autoWidth: true,            
    dots: false,                   
    nav: false,                  
    center: true,                   
    responsive: {
      0: {
        items: 2,                   
      },
      600: {
        items: 3,                   
      },
      1024: {
        items: 4,               
      },
    },
    autoplayHoverPause: false,       
    smartSpeed: 5000,                
  });
});
$(document).ready(function() {
  var owl = $('#testimonial-carousel');

  owl.owlCarousel({
      loop: true,
      margin: 10,
      autoHeight: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplaySpeed:2000,
      responsive: {
          0: { items: 1 },
          768: { items: 1 },
          1024: { items: 2 }
      },

       onInitialized: function(event) {
      // Add a custom class to all owl-item elements for this carousel
      $('#testimonial-carousel .owl-item').addClass('testimonial-owl-item');
    }
  });

  $('.custom-nav .next').click(function() {
      owl.trigger('next.owl.carousel');
  });

  $('.custom-nav .prev').click(function() {
      owl.trigger('prev.owl.carousel');
  });

  

  owl.on('initialized.owl.carousel', function(event) {
      var itemCount = event.item.count;
      var dotsContainer = $('.custom-nav .dots');
      dotsContainer.empty(); // Clear existing dots

      for (var i = 0; i < itemCount; i++) {
          dotsContainer.append('<span data-index="' + i + '"></span>');
      }

      dotsContainer.find('span').eq(0).addClass('active');
  });

  owl.on('changed.owl.carousel', function(event) {
      var currentIndex = event.item.index;
      $('.custom-nav .dots span').removeClass('active');
      $('.custom-nav .dots span').eq(currentIndex).addClass('active');
  });

  $('.custom-nav .dots').on('click', 'span', function() {
      var index = $(this).data('index');
      owl.trigger('to.owl.carousel', [index, 300]);
  });
});




$(document).ready(function() {
  $('#industries-carousel-1').owlCarousel({
    loop: true,
    autoplay: true,
    // autoplayTimeout: 1,             // Very short timeout for continuous motion
    autoplaySpeed: 3000,
    smartSpeed: 6000,        // Speed of the transition
    slideTransition: 'linear',      // Continuous linear transition
    margin: 10,
    autoWidth: true,
    dots: false,
    nav: false,
    center: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1024: {
        items: 6,
      },
    },
    autoplayHoverPause: false,

   
    // smartSpeed: 5000,               // Match speed with autoplaySpeed for smoothness
  });

  jQuery("#industries-carousel-1").trigger("play.owl.autoplay", [2000]);

  function setSpeed() {
    jQuery("industries-carousel-1").trigger("play.owl.autoplay", [6000]);
  }

  setTimeout(setSpeed, 1000);
});





$(document).ready(function() {
  $('#industries-carousel-2').owlCarousel({
    rtl:true,
    loop: true,
    autoplay: true,
    // autoplayTimeout: 1,             // Very short timeout for continuous motion
    autoplaySpeed: 3000,
    smartSpeed: 6000,        // Speed of the transition
    slideTransition: 'linear',      // Continuous linear transition
    margin: 10,
    autoWidth: true,
    dots: false,
    nav: false,
    center: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1024: {
        items: 6,
      },
    },
    autoplayHoverPause: false,

   
    // smartSpeed: 5000,               // Match speed with autoplaySpeed for smoothness
  });

  jQuery("#industries-carousel-2").trigger("play.owl.autoplay", [2000]);

  function setSpeed() {
    jQuery("#industries-carousel-2").trigger("play.owl.autoplay", [6000]);
  }

  setTimeout(setSpeed, 1000);
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
  
  function animateArrow() {
    anime({
      targets: ['.arrow-2 img','.arrow-3 img',],
      translateX: getRandomPosition(600), // Horizontal movement remains large
      translateY: getRandomPosition(100, true), // Decreased vertical range to -50 to 50
      duration: 2000, // Duration of the animation
      easing: 'easeInOutQuad', // Easing function
      complete: animateArrow // Repeat the animation when complete
    });
  }
  
  // Start the animation
  animateArrow();
  anime({
    targets: '.About-Image',
    rotateY: [30, -30], // Rotate between 30 and -30 degrees
    duration: 3000, // Duration of the animation in milliseconds
    easing: 'easeInOutQuad', // Easing function for smooth animation
    loop: true // Loop the animation
});


});
// ANIME JS ANIMATIONS 




// GSAP ANIMATIONS 
$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);

  // GSAP 3D twirl effect on mouse move for multiple package cards
  const cards = document.querySelectorAll('.package-card');

  cards.forEach(card => {
    card.style.backgroundColor = '#edf1f8';  
    card.style.transition = 'background 1s ease-in-out';

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

    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        background: 'radial-gradient(circle, #ffffff, #abbaab)', 
        duration: 0.5,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        background: '#edf1f8', 
        duration: 0.5,
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
const designCards = gsap.utils.toArray('.website-Designs');

const designCardTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.website-Designs-Cards',
    start: 'top 75%', 
    end: 'bottom 0%', // Increase the distance to make it scroll over a longer area
    scrub: 2, // Adjusting scrub value for smoother and slower scrolling
    toggleActions: 'play none none reverse',
    invalidateOnRefresh: true // Ensures recalculation when the window resizes
  }
});

// Animate each card with a staggered slide effect
designCards.forEach((card, index) => {
  const direction = index % 2 === 0 ? -150 : 150; // Slide from left if index is even, from right if odd

  designCardTl.fromTo(card, 
    { 
      x: direction, // Start further left (-150) or right (150)
      opacity: 0 // Start invisible
    }, 
    { 
      x: 0, // Slide to the original position
      opacity: 1, // Fade in
      ease: "expo.out", // Use a smoother easing function for fluid animation
    }, 
    index * 0.3  // Stagger timing for smoother animation (delays based on index)
  );
});

  
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

});


// GSAP ANIMATIONS 

$(document).ready(function() {
  // Initially, hide all tab content except the first one
  $('.tab-content-section').hide(); // Hide all content sections
  $('.tab-content-section:first').show().addClass('active-tab'); // Show the first content section by default
  $('ul li:first').addClass('active'); // Set the first tab as active

  // When a tab is clicked
  $('ul li').click(function() {
     // Remove active class from all tabs
     $('ul li').removeClass('active');
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



  
function animateCardsInTab(tabSelector) {
  // Select all design cards in the currently visible tab
  const designCards = gsap.utils.toArray(`${tabSelector} .website-Designs`);

  // Create the timeline for the visible tab content
  const designCardTl = gsap.timeline({
    scrollTrigger: {
      trigger: tabSelector, // Use the currently visible tab as the trigger
      start: 'top 75%', 
      end: 'bottom 0%', 
      scrub: 2,
      toggleActions: 'play none none reverse',
      invalidateOnRefresh: true
    }
  });

  // Animate each card within the visible tab
  designCards.forEach((card, index) => {
    const direction = index % 2 === 0 ? -150 : 150; // Slide from left if index is even, from right if odd

    designCardTl.fromTo(card, 
      { 
        x: direction, // Start further left (-150) or right (150)
        opacity: 0 // Start invisible
      }, 
      { 
        x: 0, // Slide to the original position
        opacity: 1, // Fade in
        ease: "expo.out",
      }, 
      index * 0.3  // Stagger timing for smoother animation (delays based on index)
    );
  });
}

// Call the animation function when the page loads for the first tab
animateCardsInTab('#logo-design');

// Update the animation for the selected tab when switching tabs
$('ul li').click(function() {
  var target = $(this).data('target');
  
  // Ensure the new tab's content gets the animation
  animateCardsInTab(target);
  
  // Refresh ScrollTrigger after showing the new tab content
  gsap.delayedCall(0.1, function() {
    ScrollTrigger.refresh(); // Recalculate the ScrollTrigger elements
  });
});

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
