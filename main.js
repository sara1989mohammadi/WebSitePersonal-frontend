const toggleButton = document.querySelector(".toggle-btn");
const navbarLinks = document.querySelector(".navbar");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
