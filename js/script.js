(function ($) {
    $(document).ready(function () {

        // OWL CARUSEL
        $('.review_carusel').owlCarousel({
            items:2,
            stagePadding: 350,
            loop:true,
            margin:50,
            nav:false,
            autoplay:true,
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

    });
    })(jQuery);