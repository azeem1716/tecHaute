

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
      autoplay: false,
      responsive: {
          0: { items: 1 },
          768: { items: 1 },
          1024: { items: 2 }
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
        items: 6,               
      },
    },
    autoplayHoverPause: false,       
    smartSpeed: 5000,                
  });
});





$(document).ready(function() {
  $('#industries-carousel-2').owlCarousel({
    rtl:true,
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
        items: 6,               
      },
    },
    autoplayHoverPause: false,       
    smartSpeed: 5000,                
  });
});




// ANIME JS ANIMATIONS 

$(document).ready(function() {
  anime({
    targets: '.box',
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'linear'
    },
    loop: true
  });

  anime({
    targets: '.arrow img',
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'linear',
    },
    translateX: function() {
      return anime.random(-500, 0);
    },
    translateY: function() {
      return anime.random(-300, 300);
    },
    scale: [
      { value: 1.5, duration: 700, easing: 'easeInOutQuad' },
      { value: 1, duration: 700, easing: 'easeInOutQuad' }
    ],
    opacity: [
      { value: 0.5, duration: 500, easing: 'easeInOutQuad' },
      { value: 1, duration: 500, easing: 'easeInOutQuad' }
    ],
    duration: 4000,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    delay: anime.stagger(100),
  });

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


});
// ANIME JS ANIMATIONS 

// GSAP ANIMATIONS 

$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);



// Select all headings with the class 'animated-heading'
const headings = document.querySelectorAll('.animated-heading');

// Create a ScrollTrigger for each heading
headings.forEach((heading) => {
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading, 
      start: 'top 80%', 
      end: 'top 30%', 
      scrub: 0.5, // Scrub for 0.5 seconds for smoother follow
      toggleActions: 'play reverse play reverse' 
    },
    opacity: 0, 
    y: 30, 
    duration: 1.5, // Increase duration for a smoother effect
    ease: 'power2.inOut' // Use a smoother easing function
  });
});

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



// Create the ScrollTrigger
// ScrollTrigger.create({
//   trigger: ".animated-heading", 
//   start: "top 80%", 
//   end: "bottom 10%", 
//   onEnter: () => {
//     // The Anime.js animation runs immediately when the heading enters the viewport
//     anime.timeline({
//       loop: false // Disable looping
//     })
//     .add({
//       targets: '.animated-heading .letter', 
//       translateY: [50, 0], 
//       opacity: [0, 1], 
//       duration: 1000, 
//       elasticity: 400, 
//       easing: 'easeOutElastic(1, .7)', 
//       delay: anime.stagger(50) 
      
//     });
//   },
//   once: false 


  
// });

   // Animation for the customer satisfaction section
const satisfactionBoxes = gsap.utils.toArray('.customer-satisfaction-box');

const satisfactionTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.customer-satisfaction-container',
    start: 'top 60%',
    end: 'bottom 40%',
    scrub: 1, // Smooth scrubbing
    toggleActions: 'play none none reverse'
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


/// Animation for logo cards
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



// Select all web design cards
const designCards = gsap.utils.toArray('.website-Designs');

// Create timeline for scroll-triggered animations
const designCardTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.website-Designs-Cards',
    start: 'top 75%', 
    end: 'bottom 25%', 
    scrub: 1, 
    toggleActions: 'play none none reverse'
  }
});

// Animate each card with a staggered effect
designCards.forEach((card, index) => {
  designCardTl.fromTo(card, 
    { scale: 0.8, opacity: 0, y: 20 }, 
    { 
      scale: 1, 
      opacity: 1, 
      duration: 0.8, 
      ease: "power2.out", 
      delay: index * 0.1,
      y: 0 
    }, 
    "<"); 
});





// Select the divs to animate
const firstDiv = document.querySelector('.experience-driven-text');
const secondDiv = document.querySelector('.experience-driven-icons');

// Create animations for the first div
gsap.from(firstDiv, {
  scrollTrigger: {
    trigger: firstDiv,
    start: 'top 80%', // Start when the top of the first div is at 80% of the viewport
    toggleActions: 'play none none reverse',
  },
  x: 100, // Start from 100px to the right
  opacity: 0, // Start invisible
  duration: 1, // Duration of the animation
  ease: 'power2.out', // Easing function
});

// Create animations for the second div with a staggered delay
gsap.from(secondDiv, {
  scrollTrigger: {
    trigger: secondDiv,
    start: 'top 80%', // Start when the top of the second div is at 80% of the viewport
    toggleActions: 'play none none reverse',
  },
  x: 100, // Start from 100px to the right
  opacity: 0, // Start invisible
  duration: 1, // Duration of the animation
  ease: 'power2.out', // Easing function
  delay: 0.5, // Delay the animation slightly for the second div
});



});


// GSAP ANIMATIONS 







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
