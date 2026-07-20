window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("loginBtn");
    const profileBtn = document.getElementById("profileBtn");

    if (localStorage.getItem("isLoggedIn") === "true") {

        if (loginBtn) {
            loginBtn.style.display = "none";
        }

        if (profileBtn) {
            profileBtn.style.display = "flex";
        }

    }

});