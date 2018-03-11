$(document)
    .ready(function () {
        $('.modal').modal();
        setTimeout(function () {
            $('#menu').removeClass('pulse');
            
        }, 4500);
        $('#profile').fadeIn(5000);
    });
// Wait for window load
$(window)
    .on('load', function () {
       $(".preloader") // Animate loader off screen
            .delay(1050)
            .fadeOut(300);
        $('.tooltipped').tooltip({
            delay: 50
        });
        $('.container')
            .delay(350)
            .css({
                'display': 'block'
            });
        
    });