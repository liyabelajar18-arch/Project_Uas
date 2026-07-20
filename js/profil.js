document.addEventListener("DOMContentLoaded",()=>{

if(localStorage.getItem("isLoggedIn")!=="true"){

window.location.href="login.html";

}

document.getElementById("logoutBtn").addEventListener("click",()=>{

localStorage.removeItem("isLoggedIn");

alert("Logout berhasil");

window.location.href="../index.html";

});

});
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("isLoggedIn");

    alert("Logout berhasil");

    window.location.href = "../index.html";

});