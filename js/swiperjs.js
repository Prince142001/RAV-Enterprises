const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    // direction: "vertical",
    effect: "fade",
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    // },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }

    // breakpoints: {
    //     // when window width is >= 320px
    //     1200: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //     }
    // }
});

// // var swiper = new Swiper(".mySwiper", {
// //     navigation: {
// //         nextEl: ".swiper-button-next",
// //         prevEl: ".swiper-button-prev",
// //     },
// // });