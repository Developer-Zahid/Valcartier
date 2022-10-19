(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
		headerHeightFixer();
    });

	/* Fixed Header */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('.header').innerHeight()) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	/* scroll top */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Fix Header Height function */
	$(window).ready(function(){
		$('header').before('<div class="header-height-fix"></div>');
	});
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('.header').innerHeight() +'px');
	};

	/* Closes responsive menu when a navbar link is clicked */
	$(".nav-link, .dropdown-item").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$("html").removeClass("overflow-hidden");
			$('.offCanvasMenuCloser').removeClass('show');
		}
	});
	$('.navbar-toggler').on('click', function () {
        $("html").toggleClass('overflow-hidden');
        $('.offCanvasMenuCloser').toggleClass('show');
    });
    $('.offCanvasMenuCloser').on('click', function () {
		$(".navbar-collapse").collapse("hide");
        $(this).removeClass('show');
        $("html").removeClass("overflow-hidden");
    });

	/* Dark Mode Toggler Function */
	(function(){
		const themeToggler = $(".theme-toggler");
		let darkMode = localStorage.getItem("darkMode");

		// Enable DarkMode Function
		const enableDarkMode = () =>{
			// 1. Add the class dark-mode to the html Element
			$('html').addClass('dark-layout');
			// 2. Add the class toggle to themeToggler
			themeToggler.addClass("active");
			// 3. Update darkMode in the localStorage
			localStorage.setItem("darkMode", "enabled");
		}

		// Disable DarkMode Function
		const disableDarkMode = () =>{
			// 1. Remove the class dark-mode to the html Element
			$('html').removeClass('dark-layout');
			// 2. Remove the class toggle to themeToggler
			themeToggler.removeClass("active");
			// 3. Update lightMode in the localStorage
			localStorage.setItem("darkMode", null);
		}

		// Check localStorage DarkMode value
		if(darkMode === "enabled"){
			enableDarkMode();
		}

		// Theme Change Event Functions
		themeToggler.on("click", function(){
			darkMode = localStorage.getItem("darkMode");
			if(darkMode !== "enabled"){
				enableDarkMode();
			} else{
				disableDarkMode();
			}
		})
	})();

    /*  Testimonials slider */
	(function(){
		const $testimonialSlider = $('.testimonial__slider');

		if($testimonialSlider.length){
			/* init reInit afterChange */
			$testimonialSlider.on('init reInit', function(event, slick, currentSlide, nextSlide) {   
				$(slick.$dots).appendTo(".testimonial__slider__nav");
				$(slick.$slides).each(function(index, item){
					$((slick.$dots).children("li")[index]).children().css("background-image", `url(${$(this).data("client-image")})`)
				});
			});

			$testimonialSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				cssEase: 'linear',
				autoplay: true,
				autoplaySpeed: 6000,
				speed: 500,
				arrows: false,
				dots: true,
				pauseOnHover: false,
				pauseOnFocus: false,
				infinite: true,
			});
		}
	})();

})(jQuery);