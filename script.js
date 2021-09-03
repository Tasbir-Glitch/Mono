// rotate
var rotate = document.querySelector(".rotate-center")
var hole = document.querySelector(".hole")


function start(){
    if(rotate.style.animation = "none"){
       rotate.style.animation = "rotate-center 4s cubic-bezier(0.680, -0.550, 0.265, 1.550) infinite both"
    }

    else{
        rotate.style.animation = "rotate-center 0.65s linear both;"

    }
}


// menuBar

// var menuIcon = document.querySelector(".menu-icon")
// var leftBar = document.querySelector(".left-bar")


// // menuIcon.onclick = function(){
// //     if(leftBar.style.width == "60%"){
// //         leftBar.style.maxWidth = "60%"
        
// //     }
// //     else{
// //         leftBar.style.maxWidth = "60%"
       
// //     }
// // };


(function ($) {
    "user strict";
$(document).ready(function() {

$(document).on('click', '.menu-icon', function () {
    $('.menu-bar').toggleClass('show');
});

});
})(jQuery);