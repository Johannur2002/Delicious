$(document).ready(function(){
  // $fn.scrollSpeed(step, speed, easing);
  jQuery.scrollSpeed(200, 800);
});

// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {

jQuery.scrollSpeed = function(step, speed, easing) {

var $document = $(document),
  $window = $(window),
  $body = $('html, body'),
  option = easing || 'default',
  root = 0,
  scroll = false,
  scrollY,
  scrollX,
  view;
  
if (window.navigator.msPointerEnabled)

  return false;
  
$window.on('mousewheel DOMMouseScroll', function(e) {
  
  var deltaY = e.originalEvent.wheelDeltaY,
      detail = e.originalEvent.detail;
      scrollY = $document.height() > $window.height();
      scrollX = $document.width() > $window.width();
      scroll = true;
  
  if (scrollY) {
      
      view = $window.height();
          
      if (deltaY < 0 || detail > 0)
  
          root = (root + view) >= $document.height() ? root : root += step;
      
      if (deltaY > 0 || detail < 0)
  
          root = root <= 0 ? 0 : root -= step;
      
      $body.stop().animate({
  
          scrollTop: root
      
      }, speed, option, function() {
  
          scroll = false;
      
      });
  }
  
  if (scrollX) {
      
      view = $window.width();
          
      if (deltaY < 0 || detail > 0)
  
          root = (root + view) >= $document.width() ? root : root += step;
      
      if (deltaY > 0 || detail < 0)
  
          root = root <= 0 ? 0 : root -= step;
      
      $body.stop().animate({
  
          scrollLeft: root
      
      }, speed, option, function() {
  
          scroll = false;
      
      });
  }
  
  return false;
      
}).on('scroll', function() {
          
          if (scrollY && !scroll) root = $window.scrollTop();
          if (scrollX && !scroll) root = $window.scrollLeft();
          
      }).on('resize', function() {
          
          if (scrollY && !scroll) view = $window.height();
          if (scrollX && !scroll) view = $window.width();
          
      });       
  };

  jQuery.easing.default = function (x,t,b,c,d) {

  return -c * ((t=t/d-1)*t*t*t - 1) + b;
  };

})(jQuery);


$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $("#scrollToTop").fadeIn(500)
            $("#header").addClass('scrolledHeader')
            $("#time").addClass('fadeOut')
        }else{
            $("#scrollToTop").fadeOut(500)
            $("#header").removeClass('scrolledHeader')
            $("#time").removeClass('fadeOut')
        }
    });

    // This functions are only for smooth scrolling effect

    var scrolltoOffset = $('#header').outerHeight() - 1;
    $(document).on('click', '.navbar a, .scrollto, #scrollToTop', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();
  
          var scrollto = target.offset().top - scrolltoOffset;
  
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 2000, 'easeInOutExpo');

          return false;
        }
      }
    });

    // Activate smooth scroll in all browsers
    $(document).ready(function() {
        if (window.location.hash) {
          var initial_nav = window.location.hash;
          if ($(initial_nav).length) {
            var scrollto = $(initial_nav).offset().top - scrolltoOffset;
            $('html, body').animate({
              scrollTop: scrollto
            }, 2000, 'easeInOutExpo');
          }
        }
      });

    //   Add active style with current section
    var nav_sections = $('section');
    var main_nav = $('.navbar');
  
    $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop() + 80;
  
      nav_sections.each(function() {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
          $(".navbar ul:first li:first").addClass('active');
        }
      });
    });
  
    // Venobox slider

    $('.venobox').venobox()

    // click to add and remove class

    $(".navbar a").on('click', function(){
        $('.navbar').find('li.active').removeClass('active');
        $(this).parents("li").addClass('active');
    })


    // hum wrap

    $(".hum-wrap").click(function(){
        $(this).toggleClass("active")
    });

    // Click to reload webpage

    $('.navbar-brand').on('click', function(){
        window.location.reload(function(){
            $(window).scroll(function(){
                $(this).scrollTop() < 0;
            })
        });
    })

    // This code is just to run venobox slider
    $('.venobox').venobox();

    // Carousel library goes here
    $("#firstCarousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1,
      margin: 0,
      smartSpeed: 1000,
    });
  
    $("#secondCarousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1,
      margin: 0,
      smartSpeed: 1000,
    });
});

$(window).on("load", function(){
    $("#wrap").fadeOut(500).delay(100)
});

// Isotope slider goes here
$(window).on('load', function() {
  var portfolioIsotope = $('.items').isotope({
    itemSelector: '.menus-items'
  });

  $('.menu-items li').on('click', function() {

    $(".menu-items li").on('click', function(){
      $('.menu-items li').removeClass('active');
      $(this).addClass('active');
    });
    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });
});


    // Aos slider
    AOS.init({
        duration: 1500,
        once: true
    })