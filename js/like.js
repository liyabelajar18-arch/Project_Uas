document.addEventListener("DOMContentLoaded", () => {
    const modalOverlay = document.getElementById("loginModalOverlay");
    const closeModalBtn = document.getElementById("closeLoginModal");
    const heartButtons = document.querySelectorAll(
    ".card-heart, .mini-heart, .btn-ghost"
);

    function isLoggedIn() {
        return localStorage.getItem("isLoggedIn") === "true";
    }

    function showLoginModal() {
        modalOverlay.classList.add("active");
    }

    function hideLoginModal() {
        modalOverlay.classList.remove("active");
    }

    heartButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            if (!isLoggedIn()) {
                showLoginModal();
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
            } else {
                btn.textContent = btn.classList.contains("liked") ? "♥" : "♡";
            }
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", hideLoginModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) hideLoginModal();
        });
    }
});