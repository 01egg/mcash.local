(function ($) {
    $(document).ready(function () {

        // OWL CARUSEL
        $('.review_carusel').owlCarousel({
            stagePadding: 0,
            items:1,
            loop:true,
            margin:10,
            loop:true,
            nav:false,
            autoplay:true,
            responsive:{
                0:{
                    autoWidth:true,
                    autoHeight:true,
                },
                800:{
                    autoWidth:false,
                    autoHeight:false,
                    stagePadding:119,
                },
                900:{
                    stagePadding:170,
                },
                1000:{
                    stagePadding:200,
                },
                1100:{
                    stagePadding:270,
                },
                1300:{
                    stagePadding:340,
                },
                1500:{
                    stagePadding:420,
                },
                1700:{
                    stagePadding:540,
                },
                1800:{
                    stagePadding:560,
                },
                1900:{
                    stagePadding:600,
                },
                2000:{
                    stagePadding:650,
                },

            }
        });

        // BUTTON HIDE
        $('.faq_hid-btn').click(function () {
            $('.faq_hid-left').appendTo('.faq_last-left').hide().fadeIn(2000);
            $('.faq_hid-btn').fadeOut();
        }); 

        $('.faq_hid-btn').click(function () {
            $('.faq_hid-right').appendTo('.faq_last-right').hide().fadeIn(2000);
            $('.faq_hid-btn').fadeOut();
        }); 

        // MAP CLICK
        $('.map').click(function(){
            $(this).find('iframe').addClass('clicked')
        }).mouseleave(function(){
            $(this).find('iframe').removeClass('clicked')
        });

        // Adaptive queries
            let viewportWidth = $(window).width();
            if (viewportWidth < 1200) {
                    $(".hdr-content-ttl").removeClass("ml-5");
                    $(".cont-adaptive").addClass("container");
                    $(".btn-comp-plans").addClass("mt-4");
                    $(".card ").addClass("mb-5");
            } else {
                $(".hdr-content-ttl").addClass("ml-5");
                $(".cont-adaptive").removeClass("container");
                $(".btn-comp-plans").removeClass("mt-4");
                $(".card ").removeClass("mb-5");
            }



    });
    })(jQuery);