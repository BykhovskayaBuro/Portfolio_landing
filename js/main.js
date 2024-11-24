$(function () {
  $(".menu__list a, .header__link, .logo").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".feedback__content").slick({
    arrows: false,
    dots: true,
  });

  $(".menu__btn, .menu__list a").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu__line").toggleClass("menu__line--active");
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".menu").addClass("menu__scroll");
    } else {
      $(".menu").removeClass("menu__scroll");
    }
  });

  var mixer = mixitup(".works__content");
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,

  Image: {
    zoom: true,
    click: false,
    wheel: "slide",
  },
});
