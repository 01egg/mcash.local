
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

            // Mask
            $('#inputTell').inputmask("+0118 (999) 999-99-99");
            $('.inpt-popup_phone').inputmask({
                mask: '+0118 (999) 999-99-99',
                showMaskOnHover: false,
                showMaskOnFocus: true,
            });

            // Pop Up
            $('#contact_us_popup').wiFeedBack({
                fbScript: 'blocks/wi-feedback.php',
                fbLink: '.contact_us',
                fbColor: false,
                fbTheme: false
            });

            $('#submit_popup').wiFeedBack({
                fbScript: 'blocks/wi-feedback.php',
                fbLink:  false,
                fbColor: false,
                fbTheme: false
            });

            // Условие появления Thank you window
            $(document).ajaxStop(function(){
                if ($('#submit_popup').hasClass('sent')) {
                    $.magnificPopup.open({
                        items: {
                            src: '.alert',
                            type: 'inline'
                        }
                      });
                }
               });

            $(".inpt-popup_name, .inpt-popup_phone").focus(function() {
                $('.inpt-lbl').addClass('inpt_change');
                $('.bar').addClass('bar1');
              });
            
              $(".inpt-popup_name, .inpt-popup_phone").blur(function(){
                if( ($('.inpt-popup_name').val()) || ($('.inpt-popup_phone').val()) ){
                    $('.inpt-lbl').addClass('inpt_change');
                    $('.bar').addClass("bar1");
                } else{
                    $('.inpt-lbl').removeClass('inpt_change');
                    $('.bar').removeClass("bar1");
                }
            });
        
        // Скрипт плавного скролла

        $("#menu").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
    
            //забираем идентификатор бока с атрибута href
            let id  = $(this).attr('href'),
    
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1000);
        });

        $('.btn_learn').magnificPopup({
            delegate: 'a',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
              beforeOpen: function() {
                 this.st.mainClass = this.st.el.attr('data-effect');
              }
            },
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
          });
            

    });
    })(jQuery);