const menuicon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-bar");
menuicon.addEventListener('click', () => {
    navbar.classList.toggle("change");
});
