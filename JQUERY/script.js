const navToggle = document.querySelector(".nav-toggle");
// const hamburger = document.querySelector(".nav-toggle-rotate");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    links.classList.toggle("links");
    navToggle.classList.toggle("links");
})