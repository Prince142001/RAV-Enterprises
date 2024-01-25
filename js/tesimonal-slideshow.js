const testimonalSection = document.querySelector(".tc-container");
const testimonialCarousel = document.querySelector(".testimonial-carousel");
const tcArrowBtns = document.querySelectorAll(".tc-container svg");
const tcFirstCardWith = testimonialCarousel.querySelector(".tc-profile-card").offsetWidth;
const tcChildrens = [...testimonialCarousel.children];

let isDragging = false, startX, startScrollLeft, tctimeoutId;

let tcCardPerView = Math.round(testimonialCarousel.offsetWidth / tcFirstCardWith);

tcChildrens.slice(-tcCardPerView).reverse().forEach(tcCard => {
    testimonialCarousel.insertAdjacentHTML("afterbegin", tcCard.outerHTML);
});

tcChildrens.slice(0, tcCardPerView).forEach(tcCard => {
    testimonialCarousel.insertAdjacentHTML("beforeend", tcCard.outerHTML);
});

tcArrowBtns.forEach(testimonialCarouselBtn => {
    testimonialCarouselBtn.addEventListener("click", () => {
        // console.log(testimonialCarouselBtn.id);
        testimonialCarousel.scrollLeft += testimonialCarouselBtn.id === "tc-left-arrow" ? -tcFirstCardWith : tcFirstCardWith;
    })
})

const dragStart = (e) => {
    isDragging = true;
    testimonialCarousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = testimonialCarousel.scrollLeft;
}

const dragging = (e) => {
    // console.log(e.pageX);
    if (!isDragging) return;
    testimonialCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    testimonialCarousel.classList.remove("dragging")
}

const tcAutoPlay = () => {
    if (window.innerWidth < 800) return;
    tctimeoutId = setTimeout(() => testimonialCarousel.scrollLeft += tcFirstCardWith, 2500);
}
tcAutoPlay();

const infiniteScroll = () => {
    if (testimonialCarousel.scrollLeft === 0) {
        testimonialCarousel.classList.add("tc-no-transition");
        testimonialCarousel.scrollLeft = testimonialCarousel.scrollWidth - (2 * testimonialCarousel.offsetWidth);
        testimonialCarousel.classList.remove("tc-no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(testimonialCarousel.scrollLeft) === testimonialCarousel.scrollWidth - testimonialCarousel.offsetWidth) {
        testimonialCarousel.classList.add("tc-no-transition");
        testimonialCarousel.scrollLeft = testimonialCarousel.offsetWidth;
        testimonialCarousel.classList.remove("tc-no-transition");
    }

    clearTimeout(tctimeoutId);
    if (!testimonalSection.matches(":hover")) tcAutoPlay();
}

testimonialCarousel.addEventListener("mousedown", dragStart);
testimonialCarousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
testimonialCarousel.addEventListener("scroll", infiniteScroll);
testimonalSection.addEventListener("mouseenter", () => clearTimeout(tctimeoutId));
testimonalSection.addEventListener("mouseleave", tcAutoPlay);