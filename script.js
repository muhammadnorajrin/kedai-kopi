// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");

// Ketika hamburger menu diklik
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.onclick = () => {
  navbarnav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!navbarnav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
