const form = document.querySelector(".c-us-form");

form.onsubmit = (e) => {
    e.preventDefault();
    const userNameInput = form.querySelector("#user-name");
    const userNameError = form.querySelector(".user-name .error-msg");

    if (userNameInput.value === "") {
        userNameError.innerHTML = "kuch bhi"
        userNameError.style.display = "block"; // Hide error message
    }
};