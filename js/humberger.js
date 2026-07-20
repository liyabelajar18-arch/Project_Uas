document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("humberger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

});