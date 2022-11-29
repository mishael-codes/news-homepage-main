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

  let navitems = document.querySelectorAll(".nav-link");
  console.log(navitems)

  navitems.forEach((navitem) => {
    navitem.addEventListener('mouseover', () => {
      navitem.style.color = "#f15e50"
    })

    navitem.addEventListener('mouseleave', () => {
      navitem.style.color = "#5d5f79"
    })
  })