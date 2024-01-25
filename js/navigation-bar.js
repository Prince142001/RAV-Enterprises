const navbarMenu = document.querySelector(".navbar-menu");
const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", () => {
    const navbarVisibility = navbarMenu.getAttribute('data-visible');

    if (navbarVisibility === "false") {
        navbarMenu.setAttribute('data-visible', true)
        navbarToggle.setAttribute('aria-expanded', true)
    } else if (navbarVisibility === "true") {
        navbarMenu.setAttribute('data-visible', false)
        navbarToggle.setAttribute('aria-expanded', false)
    }
});


document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        const activeLinkPathName = window.location.pathname;

        // console.log(activeLinkPathName);
        if (activeLinkPathName !== "/") {
            document.querySelectorAll(".navbar-menu .navbar-item .navbar-link").forEach(activeLinkFunc => {
                // console.log(activeLinkPath.href);
                if (activeLinkFunc.href.includes(`${activeLinkPathName}`)) {
                    activeLinkFunc.classList.add("active-link")
                }
            })
        } else {
            document.getElementById("activeHomePage").classList.add("active-link");
        }
    }
}


// const activeLinkPathName = window.location.pathname;

// // console.log(activeLinkPathName);

// document.querySelectorAll(".navbar-menu .navbar-item .navbar-link").forEach(activeLinkFunc => {
//     // console.log(activeLinkPath.href);
//     if (activeLinkFunc.href.includes(`${activeLinkPathName}`)) {
//         activeLinkFunc.classList.add("active-link")
//     }
// })