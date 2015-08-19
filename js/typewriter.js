var caption = 'Mrugesh Rocks again!!';
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
        setTimeout('type()', 50);
    }
    else{
        captionLength = 0;
    }

}
