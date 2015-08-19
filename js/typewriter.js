$(document).ready(function(){

    setInterval('cursorEffect()', 600);


});

function cursorEffect(){
        $("#cursor").animate({
            opacity : 0
        }, 'fast', 'swing').animate({
            opacity : 1
        }, 'fast', 'swing');
    }
