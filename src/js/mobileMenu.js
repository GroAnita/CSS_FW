const menuBtn = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const closeMenuBtn = document.getElementById("closeMobileMenu");
closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
