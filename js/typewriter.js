var caption = 'Improve your English to... (access more knowledge)';
var captionLength = 0;


$(document).ready(function(){

    setInterval('cursorEffect()', 600);
    type();


});

function cursorEffect(){
        $("#cursor").animate({
            opacity : 0
        }, 'fast', 'swing').animate({
            opacity : 1
        }, 'fast', 'swing');
}

function type(){

    $("#caption").html(caption.substr(0,captionLength++));
    if(captionLength < caption.length + 1){
        setTimeout('type()', 100);
    }
    else{
        captionLength = 0;
        testEarseEffect();
    }

}

function testEarseEffect(){
    caption = $("#caption").html();
    captionLength = caption.length;
    if( captionLength > 0 ){
        earse();
    }
}

function earse(){
    $("#caption").html(caption.substr(0,captionLength--));
    if( captionLength >= 0 ){
        setTimeout('earse()', 100);
    }
    else{
        captionLength = 0;
        type();
    }
}
