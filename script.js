const brandsCardsList = document.querySelector(".brands-cards__list");
const brandsMoreBtn = document.querySelector(".brands__more-btn");

brandsMoreBtn.addEventListener("click", () => {
  if (brandsCardsList.classList.contains("brands-cards__list--shown")) {
    brandsMoreBtn.textContent = "Показать все";
  } else {
    brandsMoreBtn.textContent = "Скрыть";
  }

  brandsCardsList.classList.toggle("brands-cards__list--shown");
  brandsMoreBtn.classList.toggle("more-button--hidden");
});

function toggleBrandsMoreBtn() {
  brandsMoreBtn.textContent = "Показать все";
  brandsMoreBtn.classList.toggle("hidden");
}

function toggleBrandsCardsList(on) {
  if (on) {
    brandsCardsList.classList.add("brands-cards__list");
    swiperPagination.classList.add("hidden");
    toggleBrandsMoreBtn();
    return;
  }

  brandsCardsList.classList.remove("brands-cards__list");
  swiperPagination.classList.remove("hidden");
  toggleBrandsMoreBtn();
}

let init = false;
let swiper;
const swiperSettings = {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,
  grabCursor: true,
  pagination: {
    el: ".brands-cards__pagination",
    clickable: true,
  },
};
const swiperPagination = document.querySelector(".swiper-pagination");

function swiperCard() {
  let mobile = window.matchMedia("(width < 768px)");

  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", swiperSettings);

      toggleBrandsCardsList(false);
    }
  } else if (init) {
    swiper.destroy();
    init = false;

    toggleBrandsCardsList(true);
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);
