let calSrollValue = () => {
    let scrolltoTop = document.querySelector(".scroll-to-top");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    // console.log(pos);
    let calcHeight = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrollvalue = Math.round((pos * 100) / calcHeight);
    // console.log(scrollvalue);
    if (pos > 100) {
        scrolltoTop.style.display = "flex";

    } else {

        scrolltoTop.style.display = "none";

    }
    scrolltoTop.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;

    });

    scrolltoTop.style.background = `conic-gradient(
        #f2295b ${scrollvalue}%, #d7d7d7 ${scrollvalue}% 
    )`;



};

window.onscroll = calSrollValue;
window.onload = calSrollValue;  
