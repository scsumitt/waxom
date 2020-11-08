$(function () {



 // add class/remove class Header

 $(window).scroll(function(){
  var scrolling =$(this).scrollTop();
  if(scrolling > 500 ){
    $('.navbar').addClass('navbar-bg');
  }
  else{
    $('.navbar').removeClass('navbar-bg');
  }
    }) ; 

// banner slick slider part start

    $('.banner-slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 2000,
    });

// banner slick slider part end
//service slick slider part start

    $('.service-slick-slider').slick({
         slidesToShow: 4,
         slidesToScroll: 4,
        autoplay: true,
       autoplaySpeed: 2000,
        arrows: false,
        speed: 4000,  


        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
        ]
     });
// service slick slider part end
//project filter part start

    var containerEl = document.querySelector('.project-filter');
    var mixer = mixitup(containerEl);

// project filter part end
//video venobox start

    $('.venobox').venobox();

// video venobox end
// blog slik slider part start 

    $('.blog-slik-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 2000,
        centerMode: true,
        centerPadding: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
        ]
    });

  // blog slick slider part end
  // client slick slider part start

    $('.client-slick-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 2000,


        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
        ]

    });

// client slick slider part end
 //counter-up start 

$('.counter').counterUp({
delay: 5,
time: 20000
  });

// counter-up end
// preloader part start 

 $(window).one('load', function(){
 $('.preloader').delay(200).fadeOut(200);
});

// preloader part end
















});
