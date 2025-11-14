const menuBtn = document.querySelector(".header__menu-btn");
const navbar = document.querySelector(".header__navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("is-active");
});
