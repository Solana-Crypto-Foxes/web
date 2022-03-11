(function ($) {
    "use strict";

    /* ========================================================================= */
    /*	Page Preloader
	/* ========================================================================= */

    $(window).on("load", function () {
        $("#preloader").fadeOut("slow", function () {
            $(this).remove();
        });
    });

    /* ========================================================================= */
    /*	Portfolio Filtering Hook
	/* =========================================================================  */
    $(".play-icon i").click(function () {
        var video =
            '<iframe allowfullscreen src="' +
            $(this).attr("data-video") +
            '"></iframe>';
        $(this).replaceWith(video);
    });

    /* ========================================================================= */
    /*	Portfolio Filtering Hook
	/* =========================================================================  */

    $(document).ready(function () {
        var containerEl = document.querySelector(".filtr-container");
        var filterizd;
        if (containerEl) {
            filterizd = $(".filtr-container").filterizr({});
        }
        //Active changer
        $(".portfolio-filter button").on("click", function () {
            $(".portfolio-filter button").removeClass("active");
            $(this).addClass("active");
        });
    });

    /* ========================================================================= */
    /*	Testimonial Carousel
	/* =========================================================================  */

    //Init the slider
    $(".testimonial-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    /* ========================================================================= */
    /*	Clients Slider Carousel
	/* =========================================================================  */

    // clients logo slider
    $(".clients-logo-slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
})(jQuery);
