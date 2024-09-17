

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
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

