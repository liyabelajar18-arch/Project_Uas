document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        localStorage.setItem("isLoggedIn","true");

        alert("Login berhasil!");

        window.location.href = "../rencana.html";

    });

});