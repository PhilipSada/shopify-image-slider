document.addEventListener("DOMContentLoaded", function () {
  initSwiper();
});

document.addEventListener("shopify:section:load", function () {
  // Re-initialize Swiper when the section loads
  initSwiper();
});


function initSwiper() {
  const settings = window.swiperSettings || {};

  const swiperOptions = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: settings.enableLoop,
    autoplay: settings.enableAutoplay
      ? { delay: settings.autoplayDelay, disableOnInteraction: false }
      : false,
    slidesPerView: 'auto',
  };

  // Destroy any existing Swiper instance before creating a new one
  if (window.swiperInstance) {
    window.swiperInstance.destroy(true, true);
  }

  // Initialize a new Swiper instance
  window.swiperInstance = new Swiper(".swiper-container", swiperOptions);
}





















