(function ($) {

	$(window).on('load',function() {
        $('.images-preloader').fadeOut();
    });

    $('.choose-us-list-content ul li').on('click', function() {
        $('.choose-us-list-content ul').find('.active').removeClass("active");
        $(this).addClass("active");
    });

    $('.all-services ul li').on('click',function() {
        $('.all-services ul').find('.active').removeClass("active");
        $(this).addClass("active");
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<span class="pre-arrows"><i class="fas fa-arrow-left"></i></span>',
        nextArrow: '<span class="next-arrows"><i class="fas fa-arrow-right"></i></span>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 2
              }
            }
          ]
    });
    $('.testimonials-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
    });
    $('.home2-testimonials-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        prevArrow: '<span class="pre-arrows"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="next-arrows"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
              }
            },
        ]
    });

    $('.home5-services .services-content .row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<span class="pre-arrows"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="next-arrows"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  arrows: false
                }
            },
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
              }
            }
          ]
    });
    $('.partner-content .row').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 3
                }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
              }
            }
        ]
    });
    //   Search box
    $('body').on('click',function(event) {
        $(this).find('.home5-search-box form input').fadeOut();
    });
    $('.home5-search-box form .search-icon').on('click',function(event) {
        $(this).parent().find('input').fadeToggle();
        event.stopPropagation(); //ko tính click body
    });
    $('.home5-search-box form input').on('click',function(event) {
        $(this).fadeIn();
        event.stopPropagation();
    });


    $('body').on('click', function(event) {
        $(this).find('.header-home4 .search-box form input').fadeOut();
    });
    $('.header-home4 .search-box form .search-icon').on('click',function(event) {
        $(this).parent().find('input').fadeToggle();
        event.stopPropagation(); //ko tính click body
    });
    $('.header-home4 .search-box form input').on('click',function(event) {
        $(this).fadeIn();
        event.stopPropagation();
    }); 

    //form search header
    $('body').on('click',function(event) {
        $(this).find('.header-top-mobile .search-box form input').fadeOut();
    });
    $('.header-top-mobile .search-box form .search-icon').on('click',function(event) {
        $(this).parent().find('input').fadeToggle();
        $(this).parent().parent().toggleClass('search-widget-open');
        event.stopPropagation(); //ko tính click body
    });
    $('.header-top-mobile .search-box form input').on('click',function(event) {
        $(this).fadeIn();
        event.stopPropagation();
    });

    $('.slider-info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: '.slider-gallery'
    });

    $('.slider-gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-info',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 1
                }
            }
        ]
    });
    $('.home4-testimonials-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
              }
            }
          ]
    });
    $('.home6-testimonials-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
              }
            }
          ]
    });
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            var $this = $(this).html(event.strftime('' +
                '<div class="count-down-item"><span class="font-color-yellow">%d</span> <span class="font-color-white">days</span> </div>' +
                '<div class="count-down-item"><span class="font-color-yellow">%H</span> <span class="font-color-white">hour</span> </div>' +
                '<div class="count-down-item"><span class="font-color-yellow">%M</span> <span class="font-color-white">min</span> </div>' +
                '<div class="count-down-item"><span class="font-color-yellow">%S</span> <span class="font-color-white">sec</span></div>'));
        });
    });
    try {
        $(window).on('load', function () {
            var $grid = $('.grid-mansory').masonry({
                itemSelector: '.grid-item',
                percentPosition: true,
                columnWidth: '.grid-sizer'
            });
            // layout Masonry after each image loads
            $grid.imagesLoaded().progress(function() {
                $grid.masonry();
            });
            // bind filter button click
            $('.filter-projects-mansory li span').on('click', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
            // change is-checked class on buttons
            $('.filter-projects-mansory li span').on('click',function() {
                $('.filter-projects-mansory li').find('.is-checked').removeClass("is-checked");
                $(this).addClass("is-checked");
            });
        });
    } catch(err) {
        console.log(err)
    }
    try {
        $(window).on('load', function () {
            var $grid_item = $('.grid').isotope({
                itemSelector: '.element-item',
                layoutMode: 'fitRows'
            });
            // bind filter button click
            $('.filter-projects li span').on('click', function() {
                var filterValue = $(this).attr('data-filter');
                $grid_item.isotope({ filter: filterValue });
            });
            // change is-checked class on buttons
            $('.filter-projects li span').on('click',function() {
                $('.filter-projects li').find('.is-checked').removeClass("is-checked");
                $(this).addClass("is-checked");
            });
        });
    } catch(err) {
        console.log(err)
    }

    $('#au_rev_slider').show().revolution({
        responsiveLevels: [1200, 992, 768, 480],
        gridwidth: [1200, 992, 768, 480],
        sliderLayout: 'fullwidth',
        gridheight:[550, 450, 350, 350],
        delay: 5000,
        spinner: 'spinner0',
        /* basic navigation arrows and bullets */
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onleave: false,
                hide_onmobile: true,
                hide_under: 768,
            },

            bullets: {
                enable: false,
                style: 'hermes',
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });

    $('#au_rev_slider_2').show().revolution({
        responsiveLevels: [1200, 992, 768, 480],
        gridwidth: [1240, 1000, 800, 500],
        gridheight:[690, 490, 490, 490],
        sliderLayout: 'fullwidth',
        delay: 5000,
        spinner: 'spinner0',
        /* basic navigation arrows and bullets */
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onleave: false,
                hide_onmobile: true,
                hide_under: 768,
            },

            bullets: {
                enable: false,
                style: 'hermes',
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });

    $('#au_rev_slider_3').show().revolution({
        responsiveLevels: [1200, 992, 768, 480],
        gridwidth: [1240, 1000, 800, 500],
        gridheight:[875, 700, 550, 450],
        sliderLayout: 'fullwidth',
        delay: 5000,
        // spinner: 'spinner0',
        /* basic navigation arrows and bullets */
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onleave: false,
                hide_onmobile: true,
                hide_under: 768,
            },

            bullets: {
                enable: false,
                style: 'hermes',
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });
    $('#au_rev_slider_5').show().revolution({
        responsiveLevels: [1200, 992, 768, 480],
        gridwidth: [1240, 1000, 800, 500],
        autoHeight: 'on',
        sliderLayout: 'fullscreen',
        delay: 5000,
        // spinner: 'spinner0',
        /* basic navigation arrows and bullets */
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onleave: false,
                hide_onmobile: true,
                hide_under: 768,
            },

            bullets: {
                enable: false,
                style: 'hermes',
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });

    $('#au_rev_slider_6').show().revolution({
        responsiveLevels: [1200, 992, 768, 480],
        gridwidth: [1240, 1000, 800, 500],
        gridheight:[600, 500, 400, 400],
        sliderLayout: 'fullwidth',
        delay: 5000,
        // spinner: 'spinner0',
        /* basic navigation arrows and bullets */
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onleave: false,
                hide_onmobile: true,
                hide_under: 768,
            },

            bullets: {
                enable: false,
                style: 'hermes',
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });

    /*Hamburger Button*/
    $('.hamburger').on("click", function() {
        $(this).toggleClass("is-active");
        $('.au-nav-mobile').slideToggle(200, 'linear');
    });

    // Navbar menu dropdown
    $('.au-navbar-menu li .arrow').on('click', function(e) {
        $(this).siblings('.sub-menu').slideToggle(200, 'linear');
        $(this).toggleClass('clicked');
        e.stopPropagation();
    });

    // Header sticky
        // fixed navbar when scroll
        var navbarFix = $("#js-navbar-fixed");
        var headerOffset = navbarFix.offset().top + 1;
        $(window).on('scroll',function () {
            if ($(window).scrollTop() > headerOffset) {
                navbarFix.addClass('fixed');
            } else {
                navbarFix.removeClass("fixed");
            }
        });

    // --------------------------------------------------
    // Back To Top
    // --------------------------------------------------
    var offset = 450;
    var duration = 1000;
    var upToTop = $("#back-to-top");
    upToTop.hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            upToTop.fadeIn(duration);
        } else {
            upToTop.fadeOut(duration);
        }
    });
    upToTop.on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    // Video
	$('.vimeo a,.youtube a').on('click',function (e) {
		e.preventDefault();
		var videoLink = $(this).attr('href');
		var classeV = $(this).parent();
		var PlaceV = $(this).parent();
		if ($(this).parent().hasClass('youtube')) {
			$(this).parent().wrapAll('<div class="video-wrapper">');
			$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="100%"></iframe>');
		} else {
			$(this).parent().wrapAll('<div class="video-wrapper">');
			$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=cfa144" width="100%" height="300" frameborder="0"></iframe>');
		}
    });
    
    $('[data-countdown]').each(function() {
        var $this = $('#count-down-time'), finalDate = $('#count-down-time').data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime(''
            + '<span>%d</span> days '
            + '<span>%H</span> hr '
            + '<span>%M</span> min '
            + '<span>%S</span> sec'));
        });
    });

    var marginSlider = document.getElementById('slider-margin');
    if (marginSlider != undefined) {
        noUiSlider.create(marginSlider, {
            start: [ 0, 200 ],
            step: 10,
            connect: true,
            range: {
                'min': 50,
                'max': 200
            }
        });
    var marginMin = document.getElementById('value-lower'),
	    marginMax = document.getElementById('value-upper');

        marginSlider.noUiSlider.on('update', function ( values, handle ) {
            if ( handle ) {
                marginMax.innerHTML = values[handle];
            } else {
                marginMin.innerHTML = values[handle];
            }
        });
    }
    /*==================================================================
    [ Play video 01 ]*/
    $.fn.bmdIframe = function( options ) {
        var self = this;
        var settings = $.extend({
            classBtn: '.bmd-modalButton',
            defaultW: 640,
            defaultH: 360
        }, options );
      
        $(settings.classBtn).on('click', function(e) {
          var allowFullscreen = $(this).attr('data-bmdVideoFullscreen') || false;
          
          var dataVideo = {
            'src': $(this).attr('data-bmdSrc'),
            'height': $(this).attr('data-bmdHeight') || settings.defaultH,
            'width': $(this).attr('data-bmdWidth') || settings.defaultW
          };
          
          if ( allowFullscreen ) dataVideo.allowfullscreen = "";
          
          // stampiamo i nostri dati nell'iframe
          $(self).find("iframe").attr(dataVideo);
        });
      
        // se si chiude la modale resettiamo i dati dell'iframe per impedire ad un video di continuare a riprodursi anche quando la modale è chiusa
        this.on('hidden.bs.modal', function(){
          $(this).find('iframe').html("").attr("src", "");
        });
      
        return this;
    };
    jQuery("#modal-video-01").bmdIframe();

})(jQuery);