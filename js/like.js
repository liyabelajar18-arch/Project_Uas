document.addEventListener("DOMContentLoaded", () => {

    const heartButtons = document.querySelectorAll(
        ".card-heart, .mini-heart, .btn-ghost"
    );

    function isLoggedIn() {
        return localStorage.getItem("isLoggedIn") === "true";
    }

    heartButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            if (!isLoggedIn()) {
                window.location.href = "profil/login.html";
                return;
            }
            btn.classList.toggle("liked");

            const icon = btn.querySelector("i");

            if (icon) {
                if (btn.classList.contains("liked")) {
                    icon.classList.remove("fa-regular");
                    icon.classList.add("fa-solid");
                } else {
                    icon.classList.remove("fa-solid");
                    icon.classList.add("fa-regular");
                }
            }
        });
    });

});