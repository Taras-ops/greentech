$(function() {
    // page-link

    $('.header-page').click(function() {
        $('.header-page').removeClass('header-page_active')
        $(this).addClass('header-page_active')
    })

    // BURGER

    $('.burger').click(function() {
        $(this).toggleClass('active')
        $('.header__nav').toggleClass('show')
    })



    // search

    $('.search-btn').click(function() {
        $('.search-bar').addClass('active');
        $('.search').addClass('active');
    })

    // slider

    $('.main__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 900
    });


    // advantages

    $('.advantages__item').hover(function(e) {
        $('.advantages__item').toggleClass('opacity')
        $(this).removeClass('opacity')
        $(this).toggleClass('active')
    })
});