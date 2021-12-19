// $(document).ready(function () {
//     $('.slider').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         dots: true,
//         infinite: false,
//         speed: 2000,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]

//     });
// });


$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});
