

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


$(document).ready(function(){
  $('#testimonial-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: false,  // Ensure autoplay is set to false
    responsive: {
      0: {
        items: 1  // Show 1 item at a time on small screens
      },
      768: {
        items: 1  // Show 1 item at a time on medium screens
      },
      1024: {
        items: 2  // Show 2 items at a time on large screens
      }
    }
  });
});
