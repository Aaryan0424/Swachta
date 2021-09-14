//  Function used to shrink nav bar removing paddings and adding black background 
$(window).scroll(function() {
    if ($(document).scrollTop()>350) {
        $('.nav').addClass('black');
        console.log(`OK`);
    } else {
        $('.nav').removeClass('black');
    }
});
 