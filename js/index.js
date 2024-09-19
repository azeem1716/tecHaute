

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

