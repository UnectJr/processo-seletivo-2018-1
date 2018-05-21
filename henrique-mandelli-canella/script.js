

$(document).ready(function(){

            // Init Slider
            $('.slider').slider({height: 500, indicators: false});
            // Init sidenav
            $('.sidenav').sidenav();

            });

//PRELOADER
$(window).on('load', function () {
    $('#preloader .inner').fadeOut(1500);
    $('#preloader').delay(1500).fadeOut('slow'); 
    $('body').delay(1500).css({'overflow': 'visible'});
})
