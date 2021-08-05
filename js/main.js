const menuButton = document.querySelector(".hamburger");
const menuNav = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    menuNav.classList.remove("hide");
    menuButton.classList.add("hide");
});