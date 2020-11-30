// Form date 1
if (jQuery().datepicker) {
    jQuery('#thoigian').datepicker({
        showAnim: "drop",
        dateFormat: "dd/mm/yy",
        minDate: "-0D",
        // onSelect: function() {
        //     setdate('#checkin','from');
        // }
    });
}
// Form date 1
if (jQuery().datepicker) {
    jQuery('#checkin2').datepicker({
        showAnim: "drop",
        dateFormat: "dd/mm/yy",
        minDate: "-0D",
        // onSelect: function() {
        //     setdate('#checkin','from');
        // }
    });
}
// Chọn show modal

// Giá VND
Array.from(document.getElementsByClassName('money')).forEach(money => {
        money.innerHTML += 'đ';
    })
    //  Tat iframe
$("#close").click(function() {
    $(".view_iframe").css({ "display": 'none' });
});
// Sticky menu //
// $(document).ready(function() {
//     var w = window.innerWidth;
//     if (w > 0) {
//         $(() => {

//             //On Scroll Functionality
//             $(window).scroll(() => {
//                 var windowTop = $(window).scrollTop();
//                 windowTop > 100 ? $('#nav').addClass('navShadow_1') : $('#nav').removeClass('navShadow_1');
//             });

//         });
//     }
// })


// remove  popup
$(document).ready(function() {
    $(".lang_show").click(function() {
        $(".show_lang").toggle(200);
    });
});

//Menu header
jQuery(document).ready(function($) {
    $('.menu').responsiveMenu({
        breakpoint: '1200'
    });
});