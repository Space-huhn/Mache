// $(document).ready(function () {
//     $('.quotes__slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         fade: true,
//         infinite: true,
//         autoplay: true,
//         asNavFor: '.slider-bottom',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     asNavFor: '',
//                     swipeToSlide: true,
//                 }
//             }
//         ]
//     });
//     $('.slider-bottom').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         asNavFor: '.slider-top',
//         dots: false,
//         arrows: false,
//         centerMode: false,
//         focusOnSelect: true,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     asNavFor: '',
//                 }
//             }
//         ]
//     });
// });

$(document).ready(function () {
    $('.quotes__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        fade: true,
        infinite: false,
        autoplay: true,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             asNavFor: '',
        //             swipeToSlide: true,
        //         }
        //     }
        // ]
    });
});
$(window).ready(function () {
    $(".header-burger").click(function () {
        $(".header-burger, .header-menu").toggleClass("activ");
    });
});

$(document).scroll(function () {
    var scroll = $(document).scrollTop();
    if (scroll >= 5) {
        $(".header").addClass("down");
    } else {
        $(".header").removeClass("down");
    }
});


$(window).ready(function () {
    $(".show-more-button").click(function () {
        $(".show-more-button, .show-more").toggleClass("activ");
    });
});

// $('header').on('.activ', function () {
//     $(body).css("overflow", "hidden");
// })
// //.on('mouseleave', function () {
// //     $("body").css("overflow","auto");
// //  });