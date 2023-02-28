$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1, // показуємо 1 цілу картинку та половинку наступної
    infinity: true,
    centerPadding: "218px",
    centerMode: true, // включаємо центровий режим
    focusOnSelect: true, // змінюємо слайд при кліку на половинку
    dots: true,
    arrows: false, // вимикаємо стандартні стрілки
    responsive: [
      {
        breakpoint: 768, // для мобільних
        settings: {
          slidesToShow: 1, // показуємо тільки 1 картинку
          centerMode: false, // вимикаємо центровий режим
        },
      },
    ],
  });

  // Додаємо власні кнопки для перемикання слайдів
  $(".slider-prev").click(function () {
    $(".slider").slick("slickPrev");
  });

  $(".slider-next").click(function () {
    $(".slider").slick("slickNext");
  });
});
