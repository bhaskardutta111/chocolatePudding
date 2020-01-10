$(document).ready(function () {

    new WOW().init();

    
    $(".burger-nav").on("click", function(){
        $(".container nav ul").toggleClass("open");
    });


    /*slideUP animation*/

    $('.js-op').waypoint(function (direction) {

        $('.js-op').addClass('animated slideInUp');

    }, {
        offset: '50%'
    });

    /*display screen*/

    $('.when-clicked').waypoint(function(direction) {

        $('.when-clicked').addClass('animated fadeIn');

    }, {
        offset: '50%'
    });

    /*button clicked animation*/

    $('.iphone-btn').delay(2000).animate({
        bottom: "+=-3"
    }, 200);

    $('.iphone-btn').delay(300).animate({
        top: "+=-3"
    }, 100);


    /*face background animation*/



});


/*
document.querySelector('.js-op').waypoint(function(direction){
    document.querySelector('.js-op').classList.add('animated slideInUp')
});

*/
