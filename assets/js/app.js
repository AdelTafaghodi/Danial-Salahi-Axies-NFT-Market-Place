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
  slidesPerView: 4,
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
    delay: 2500,
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
    630: {
      slidesPerView: 2.,
    },
    867: {
      slidesPerView: 2.2,
    },
    950: {
      slidesPerView: 2.8,
    },
    1050: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 3.8,
    },
    1600: {
      slidesPerView: 4.5,
    },
    1800: {
      slidesPerView: 5.2,
    },
  },
});
