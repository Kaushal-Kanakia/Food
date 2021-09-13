$(document).ready(function() {
    $('.food-slider').slick({
        slidesToShow: 3,
        // autoplay: true,
        prevArrow: ".prev-btn",  //overriding default buttons with custom buttons
        nextArrow: ".next-btn",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // When clicked on hamburger the content wrapper will get scaled class applied to it. the toggleClass will remove scaled
    // if it's already applied and vice versa
    $('.nav-trigger').click(function() {
        $('.site-content-wrapper').toggleClass('scaled');
    })
});