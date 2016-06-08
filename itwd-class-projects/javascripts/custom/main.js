(function(){
  "use strict";


$(function ($) {
  

preloaderInit();
initCalc();
initUX();
initMasonry();
initLightbox();
initElements();


$('a.ajax-link').on('click', function() {
    $('#ajax-content').animate({
        opacity: 0
    }, 0, function() {
        showPreloader();
    });

    var link = $(this).attr('href');
    $.ajax({
        type: 'POST',
        url: $(this).attr('href'),
        processData: true,
        dataType: 'html',
        success: function(data) {
            document.title = $(data).filter('title').text();

            if (typeof history.pushState != 'undefined') history.pushState(data, 'Page', link);
            var content_to_display = "#ajax-content";
            var content_container = "#ajax-content";

            var delay = 0;
            setTimeout(function() {

                $('#ajax-content').css('opacity', '0');
                $('body').addClass('preloader-running');
                $('#status, #preloader').show(1000);

                setTimeout(function() {
                    $('body').waitForImages({
                        finished: function() {
                            $(content_container).html($(data).find(content_to_display).html());
                            openPage();
                        },
                        waitForAll: true
                    });

                }, 1100);

            }, delay);



        }
    });

    return false;
});
 

function preloaderInit() {
    showPreloader();
    $(window).load(function() {
        hidePreloader();
    });
}

function showPreloader() {
    $('#ajax-content').css('opacity', '0');
    $('.sub-nav-wrap').hide();
    $('body').addClass('preloader-running');
}

function hidePreloader() {
    $("#status").fadeOut();
    $("#preloader").delay(1000).fadeOut(1000);
    $('body').removeClass('preloader-running');
    $('body').addClass('preloader-done');
    $("#ajax-content").delay(1000).css('opacity', '1');
}

function openPage() {
    setTimeout(function() {
        hidePreloader();
    }, 1000);
    initCalc();
    initUX();
    initMasonry();
    initLightbox();
    initElements();
}


function initCalc() {
    //make really OC calculations to have so much fun
        $(document).ready(function() {
            var vH = $(window).height();
            var vW = $(window).width();
            $('.fullwidth').css('width', vW);
            $('.fullheight').css('height', vH);
            $('.halfwidth').css('width', vW / 2);
            $('.halfheight').css('height', vH / 2);
            $('.works-container').css('min-height', vH);
        });
}




function initUX() {
        $(document).ready(function() {
            $("html,body").animate({scrollTop: 0}, 1000);
            $('.projects-filter-trigger').fadeOut();
            if ( $( "#works-filter-panel" ).length ) {
                      $('.projects-filter-trigger').fadeIn(); //shows filter button only if filters are present
                    }
            $('.fullscreen-toggle').fadeIn();
            if ( $( ".works-masonry-container" ).length ) {
                      $('.fullscreen-toggle').fadeOut(); //shows fullscreen button only if masonry portfolio is present
                    }

            $('.works-filter-panel').slideUp();
            $('.works-filter-panel').removeClass('is-visible');

            //close the lateral panel
            $('.cd-panel').on('click', function(event) {
                if ($(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close')) {
                    $('.cd-panel').removeClass('is-visible');
                    event.preventDefault();
                }
                $('.featured-mask-overlay').fadeOut('slow');
                $('html, body').removeClass('no-scroll-xy');
            });

            //Works Filter Panel View
            $('.projects-filter-trigger').on('click', function(event) {
                event.preventDefault();
                $('.works-filter-panel').slideDown();
                $('.works-filter-panel').addClass('is-visible');
            });

            setTimeout(function() {
                $(".projects-filter-trigger").click();
            }, 1500);
           
        });
}



function initMasonry() {
        $(document).ready(function() {
                    var $container1 = $('.works-container');
                    $container1.isotope({
                            // options
                            itemSelector: '.projects-item',
                            layoutMode: 'masonry',
                            transitionDuration: '0.8s'
                     });
                        //forcing a perfect masonry layout after initial load
                        setTimeout(function() {
                        $container1.isotope('layout');
                        }, 100);
                        $container1.isotope('bindResize');
                        //Isotope ReLayout on Page Load event.
                        $(window).load(function() {
                            $container1.isotope('layout');
                        });
                        //Isotope ReLayout on Window Resize event.
                        $(window).on('resize', function() {
                            $container1.isotope('layout');
                        });
                        //Isotope ReLayout on device orientation changes
                        window.addEventListener("orientationchange", function() {
                            $container1.isotope('layout');
                        }, false);

            $('.works-filter li a').on('click', function(event) {
                event.preventDefault();
                $('.works-filter li a').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.works-container').isotope({
                    filter: selector
                });
                setTimeout(function() {
                    $container1.isotope('layout');
                }, 800);
            });

        });
}



function initLightbox() {
        $(document).ready(function() {
            //VENOBOX
            $('.venobox, .image-lightbox-link').venobox({
                numeratio: true
            });
        });
}


function initElements() {
    $(document).ready(function() {
        $(".dropdown").on("hover", function(e) {
            if (e.type == "mouseenter") {
                $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
                $(this).toggleClass('open');
            }
            else { // mouseleave
                $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
                $(this).toggleClass('open'); 
            }
        });
            
    });
}


});

})();

