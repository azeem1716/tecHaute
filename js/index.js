

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





$(document).ready(function() {
  // Apply Anime.js animation to the single .box element
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
    targets: '.arrow img',  // Target the image inside the .arrow div
    rotate: {
      value: 360,  // Rotate 360 degrees
      duration: 3000,  // Animation duration (3 seconds)
      easing: 'easeInOutSine'
    },
    loop: true  // Loop the animation infinitely
  });
});



















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
