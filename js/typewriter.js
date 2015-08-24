var caption = 'Improve your English to... (access more knowledge)';
var captionLength = 0;
var delay = 150;
var count = 0;
var msg = [ "(access more knowledge)", "(Frist String)", "(Second String)", "(Third String)", "(Fourth String)" ];

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
        setTimeout('type()', delay);
    }
    else{
        captionLength = 0;
        testEarseEffect();
    }
}

function insertMultipleString(){
    
    while(count < 5){
        if(count >= 4){
            count = 0;
            caption = 'Improve your English to... (access more knowledge)';
            break;
        }
        caption = caption.replace(msg[count], msg[++count]);
        break;
    }
    type();
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
    if( captionLength >= 27 ){
        setTimeout('earse()', delay);
    }
    else{
        //captionLength = 0;
        captionLength = caption.indexOf(".");
        captionLength = captionLength + 4;
        insertMultipleString();
    }
}
