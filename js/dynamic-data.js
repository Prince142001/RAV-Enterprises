const dynamicData = {
    slideshowData: [
        { ssImg: "images/apartment-g5eb183668_1920.jpg" },
        { ssImg: "images/bedroom-g40c693c38_1920.jpg" },
        { ssImg: "images/wall-ged9dcc114_1920.jpg" }
    ],
    faqsData: [
        {
            accLabel: "Accordion Heading One",
            accP: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet molestiae culpa aspernatur autem, officia incidunt consectetur illum dolores quae voluptate rerum mollitia vel ducimus quibusdam doloribus possimus nesciunt magni eveniet, cum excepturi illo! Pariatur porro quos quas distinctio at."
        },
        {
            accLabel: "Accordion Heading One",
            accP: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet molestiae culpa aspernatur autem, officia incidunt consectetur illum dolores quae voluptate rerum mollitia vel ducimus quibusdam doloribus possimus nesciunt magni eveniet, cum excepturi illo! Pariatur porro quos quas distinctio at."
        },
        {
            accLabel: "Accordion Heading One",
            accP: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet molestiae culpa aspernatur autem, officia incidunt consectetur illum dolores quae voluptate rerum mollitia vel ducimus quibusdam doloribus possimus nesciunt magni eveniet, cum excepturi illo! Pariatur porro quos quas distinctio at."
        },
        {
            accLabel: "Accordion Heading One",
            accP: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet molestiae culpa aspernatur autem, officia incidunt consectetur illum dolores quae voluptate rerum mollitia vel ducimus quibusdam doloribus possimus nesciunt magni eveniet, cum excepturi illo! Pariatur porro quos quas distinctio at."
        },
        {
            accLabel: "Accordion Heading One",
            accP: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet molestiae culpa aspernatur autem, officia incidunt consectetur illum dolores quae voluptate rerum mollitia vel ducimus quibusdam doloribus possimus nesciunt magni eveniet, cum excepturi illo! Pariatur porro quos quas distinctio at."
        }
    ]
};

for (const [index, i] of dynamicData.slideshowData.entries()) {
        let swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");

        let swiperPicture = document.createElement("picture");
        swiperSlide.appendChild(swiperPicture);

        let imgTag = document.createElement("img");
        imgTag.setAttribute("src", i.ssImg);
        swiperPicture.appendChild(imgTag);

    document.querySelector(".home-section .swiper-wrapper").append(swiperSlide);
}


// for (const [index, i] of dynamicData.slideshowData.entries()) {
//     // let swiperSlide = document.createElement("div");
//     // swiperWrapper.appendChild(swiperSlide)

//     // let swiperSlide1 = document.createElement("div");
//     // swiperSlide1.classList.add("swiper-slide")
//     // swiperWrapper.appendChild(swiperSlide1);

//     // let swiperSlide = document.createElement("div");
//     // swiperSlide.classList.add("swiper-slide");
//     // // swiperSlide.classList.add(`swiper-slide-${i + 1}`);
//     // swiperWrapper.appendChild(swiperSlide);

//     // let swiperPicture = document.createElement("picture");
//     // swiperSlide.appendChild(swiperPicture);

//     // let imgTag = document.createElement("img");
//     // imgTag.setAttribute("src", i.ssImg);
//     // swiperPicture.appendChild(imgTag);
//     // // console.log('i:::::::::::::::', i)

//     document.querySelector(".mySwiper").appendChild(swiperWrapper);
// }

// const faqsArray = {
//     faqsData: [
//         {
//             accLabel: "Accordion Heading One",
//             accP: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet molestiae culpa aspernatur autem, officia incidunt consectetur illum dolores quae voluptate rerum mollitia vel ducimus quibusdam doloribus possimus nesciunt magni eveniet, cum excepturi illo! Pariatur porro quos quas distinctio at."
//         },
//         {
//             accLabel: "Accordion Heading One",
//             accP: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet molestiae culpa aspernatur autem, officia incidunt consectetur illum dolores quae voluptate rerum mollitia vel ducimus quibusdam doloribus possimus nesciunt magni eveniet, cum excepturi illo! Pariatur porro quos quas distinctio at."
//         },
//         {
//             accLabel: "Accordion Heading One",
//             accP: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet molestiae culpa aspernatur autem, officia incidunt consectetur illum dolores quae voluptate rerum mollitia vel ducimus quibusdam doloribus possimus nesciunt magni eveniet, cum excepturi illo! Pariatur porro quos quas distinctio at."
//         },
//         {
//             accLabel: "Accordion Heading One",
//             accP: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet molestiae culpa aspernatur autem, officia incidunt consectetur illum dolores quae voluptate rerum mollitia vel ducimus quibusdam doloribus possimus nesciunt magni eveniet, cum excepturi illo! Pariatur porro quos quas distinctio at."
//         },
//         {
//             accLabel: "Accordion Heading One",
//             accP: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet molestiae culpa aspernatur autem, officia incidunt consectetur illum dolores quae voluptate rerum mollitia vel ducimus quibusdam doloribus possimus nesciunt magni eveniet, cum excepturi illo! Pariatur porro quos quas distinctio at."
//         }
//     ]
// }

for (const [index, i] of dynamicData.faqsData.entries()) {
    let accTab = document.createElement("div");
    accTab.classList.add("acc-tab");

    let inputRadio = document.createElement("input");
    inputRadio.setAttribute("type", "radio");
    inputRadio.setAttribute("name", "acc-tab");
    inputRadio.setAttribute("id", `acc-tab-${index + 1}`);
    accTab.appendChild(inputRadio);

    let accLabel = document.createElement("label");
    accLabel.setAttribute("for", `acc-tab-${index + 1}`);
    accTab.appendChild(accLabel);

    let labelSpan = document.createElement("span");
    labelSpan.innerText = i.accLabel;
    accLabel.appendChild(labelSpan);

    let accIcon = document.createElement("div");
    accIcon.classList.add("acc-icon");
    accLabel.appendChild(accIcon);

    let accIconPlus = document.createElement("i");
    accIconPlus.classList.add("fa", "fa-plus");
    accIcon.appendChild(accIconPlus);

    let accContent = document.createElement("div");
    accContent.classList.add("acc-content");
    accTab.appendChild(accContent);

    let accContentP = document.createElement("p");
    accContentP.innerText = i.accP;
    accContent.appendChild(accContentP);

    document.querySelector(".facs-accordion").appendChild(accTab);
}
