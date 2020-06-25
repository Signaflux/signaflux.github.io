$(document).ready(function() {
	"use strict";


// ------------- Pre-loader--------------

// makes sure the whole site is loaded

$(window).load(function() {
    // will first fade out the loading animation
    $(".preloader").fadeOut();
    //then background color will fade out slowly
    $("#faceoff").delay(1000).fadeOut("slow");
});

//-------Appearence of navigation----------


  $('#home').slideDown(400);

  //var winWidth = $(window).width();
  $(window).scroll(function() {

	//got o top
	  if ($(this).scrollTop() > 200) {
			$('#go-to-top a').fadeIn('slow');
		  } else {
			$('#go-to-top a').fadeOut('slow');
	  }
  });

  //-------scroll to top---------

 $('#go-to-top a').click(function(){
	$("html,body").animate({ scrollTop: 0 }, 750);
	return false;
  });

//--------------- SmoothSroll--------------------

var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});


//--------------- for navigation---------------------

    $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

//--------------- -Loading the map ------------------

 $(document).on('click','.contact-map',function(event){
	event.preventDefault();
	initialize();
 });



//-----------Text Slider on Banner-----------

   $('.flex_text').flexslider({
        animation: "slide",
    selector: ".slides li",
    controlNav: false,
    directionNav: false,
    slideshowSpeed: 4000,
    touch: true,
    useCSS: false,
    direction: "vertical",
        before: function(slider){
     var height = $('.flex_text').find('.flex-viewport').innerHeight();
     $('.flex_text').find('li').css({ height: height + 'px' });
        }
    });

// ----------initializing the wow.js ---------

    // Animate and WOW Animation
    var wow = new WOW(
        {
            //offset: 50,
            mobile: false
           // live: true
        }
    );
    wow.init();

//------------------video popup---------------


});


var fullScreenHome = function() {
    if(matchMedia( "(min-width: 992px) and (min-height: 500px)" ).matches) {
      "use strict"; //RUN JS IN STRICT MODE
    var height = $(window).height() + 100;
      contH = $(".banner .col-sm-12").height(),
      contH = $(".banner-carousel .col-sm-12").height(),
      contMT = (height / 2) - (contH / 2);
    $(".banner-carousel").css('min-height', height + "px");
    //$(".trans-bg").css('min-height', height + "px");
    $(".banner .col-sm-12").css('margin-top', (contMT - 350) + "px");
    $(".banner-carousel .col-sm-12").css('margin-top', (contMT - 10) + "px");
  }
}

$(document).ready(fullScreenHome);
$(window).resize(fullScreenHome);
