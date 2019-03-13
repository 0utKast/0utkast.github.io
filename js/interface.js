( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/


	
	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/


	var wow = new WOW({
	    offset: 150,          
	    mobile: false
	  }
	);
	
	wow.init();

	var navbar=$('.navbar');
	var navbarDesctop=$('.navbar-desctop');
	var navbarMobile=$('.navbar-mobile');


	/*-------------------------------------------------------------------------------
	  Animsition
	-------------------------------------------------------------------------------*/



	$(".animsition").animsition({
	   inClass: 'fade-in',
       outClass: 'fade-out',
	   inDuration: 500,
	   outDuration: 700,
	   linkElement: 'header ul li a',
	   // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	   loading:true,
	   loadingParentElement: 'body', //animsition wrapper element
	   loadingClass: 'spinner',
	   loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>', // e.g '<img src="loading.svg" />'
	   timeout: false,
	   timeoutCountdown:5000,
	   onLoadEvent: true,
	   browser: [ 'animation-duration', '-webkit-animation-duration'],
	   // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	   // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	   overlay : false,
	   overlayClass : 'animsition-overlay-slide',
	   overlayParentElement : 'body',
	   transition: function(url){ window.location.href = url; }
	});



	/*-------------------------------------------------------------------------------
	  Navbar link toggle
	-------------------------------------------------------------------------------*/


	var clickInit = $('.navbar-mobile .menu-item-has-children > a, .navbar-left .menu-item-has-children > a');

	clickInit.on('click',function(){
		clickInit.not(this).closest('li').removeClass('current');
		clickInit.not(this).closest('li').find('ul').slideUp(200);
		$(this).closest('li').toggleClass('current');
		$(this).closest('li').children('ul').slideToggle(200);

		return false;
	});


	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	    top: 100
	  }
	});

	navbar.on('affix.bs.affix', function() {
		navbarDesctop.addClass('animated slideInDown');
		if (!navbarMobile.hasClass('affix')){
			navbarMobile.addClass('animated slideInDown');
		}
	});


	navbar.on('affixed-top.bs.affix', function() {
	  	navbar.removeClass('animated slideInDown');
	});


	

	/*-------------------------------------------------------------------------------
	 Navbar collapse
	-------------------------------------------------------------------------------*/



	$('.collapse').on('show.bs.collapse', function () {
		 navbarMobile.addClass('affix');	
	});

	$('.collapse').on('hidden.bs.collapse', function () {
		if (navbarMobile.hasClass('affix-top')){
			navbarMobile.removeClass('affix');
		}
	});

	navbarMobile.on('affixed-top.bs.affix', function() {
		if ($('.collapse').hasClass('in')){
			navbarMobile.addClass('affix');
		}	
	});

	

	/*-------------------------------------------------------------------------------
	  Project Gallery
	-------------------------------------------------------------------------------*/



	if ($('.js-gallery').length > 0){
		$('.js-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			},
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}
			
		});
	}




	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/



    $('.js-target-scroll').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - navbar.outerHeight())
            }, 1000);
            return false;
        }
    });

    function progress_bars() {
		$(".progress .progress-bar:in-viewport").each(function() {
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).width($(this).attr("data-width") + "%");
			}
			
		});
	}

	$(window).on('scroll', function() {
		progress_bars();
	});


	/*-------------------------------------------------------------------------------
	  Isotope
	-------------------------------------------------------------------------------*/



    $('.isotope').each(function() {		
		var $container = $(this);
		$container.imagesLoaded( function(){
			$container.isotope({		 
				itemSelector: '.isotope-item',
				percentPosition: true,
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: '.isotope-item'
				}	
			});	
		});
    }); 



    /*-------------------------------------------------------------------------------
	  Isotope Filter
	-------------------------------------------------------------------------------*/



	$('.filter li a').on('click', function() {
		$('.filter .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.isotope').isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				queue: false
			}
		});
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Clients Carousel
	-------------------------------------------------------------------------------*/


	if ($('.owl-carousel').length > 0){
		$(".js-client-carousel").owlCarousel({
			items : 1,
		    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        992:{
	            items:1
	        },

	        1700:{
	            items:2
	        }
	    }

		});
	}

	/*-------------------------------------------------------------------------------
	  Clients Carousel
	-------------------------------------------------------------------------------*/


	if ($('.owl-carousel').length > 0){
		$(".js-project-carousel").owlCarousel({
			items : 1,
			smartSpeed:500,
			loop:true,
			nav:true,
			dots:false,
			responsiveRefreshRate:0,
			navText:[]

		});
	}
	
	


	
	/*-------------------------------------------------------------------------------
	  Subscribe Form
	-------------------------------------------------------------------------------*/



	$('.js-subscribe-form').ajaxChimp({
        language: 'cm',
        url: 'http://csmthemes.us3.list-manage.com/subscribe/post?u=9666c25a337f497687875a388&id=5b881a50fb'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });


    $.ajaxChimp.translations.cm = {
        'submit': 'Submitting...',
        0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
        1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
        2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
        3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
        4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
        5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
    };


	/*-------------------------------------------------------------------------------
	  Ajax Form
	-------------------------------------------------------------------------------*/



	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
		                	$('.modal').modal('hide');
		                	$('#success').modal('show');
		                },

		                error: function(){
			                $('.modal').modal('hide');
		                	$('#error').modal('show');
			            }
			        });
			    }
			});
		});
	}
})(jQuery);
