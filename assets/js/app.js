const scrollButton = document.getElementById("scroll-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    scrollButton.style.display = "flex";
  } else {
    scrollButton.style.display = "none";
  }
}

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    420: {
      slidesPerView: 1.2,
    },
    567: {
      slidesPerView: 1.5,
    },
    867: {
      slidesPerView: 2.2,
    },
    1000: {
      slidesPerView: 3.2,
    },
    1600: {
      slidesPerView: 4.5,
    },
  },
});
