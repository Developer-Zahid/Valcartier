(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader();
		headerHeightFixer();
    });

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow");
	}

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
	})()

    /*  Banner slider */
    // $(".banner__slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     speed: 500,
    //     arrows: true,
    //     prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-left"></i></button>',
	// 	nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-right"></i></button>',
    //     dots: false,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     infinite: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				arrows: false,
	// 				dots: true
	// 			}
	// 		},
	// 	]
    // });

})(jQuery);