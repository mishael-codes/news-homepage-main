let hamburger = document.getElementById("icon-menu");
let mobileMenu = document.querySelector(".hidden");
let closeMenu = document.getElementById("close-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("ham-menu")
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("ham-menu");
    mobileMenu.classList.add("hidden")
  });