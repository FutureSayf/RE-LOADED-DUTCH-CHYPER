var imageSlider = new Swiper('.image-slider', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
        // when window is <= 516px
        516: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window is <= 767px
        767: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window is <= 991px
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window is <= 1199px
        1199: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    }
});
