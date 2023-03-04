/* ==============
 ========= js documentation ==========================

 * theme name: Evlio
 * version: 1.0
 * description: Digital Conference Html5 Template
 * author: uiaxis
 * author url: https://themeforest.net/user/uiaxis

    ==================================================

     01. init wow js
     -------------------------------------------------
     02. countdown timer
     -------------------------------------------------
     03. video popup
     -------------------------------------------------
     04. video popup two
     -------------------------------------------------
     05. odometer counter
     -------------------------------------------------
     06. speaker slider
     -------------------------------------------------
     07. testimonial slider

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // wow init
    new WOW().init();

    // countdown timer
    if (document.querySelector(".countdown") !== null) {
      $(".countdown").downCount(
        {
          date: "03/13/2027 11:59:59",
          offset: +10,
        },
        function () {
          alert("Time Gone. Try other");
        }
      );
    }

    // video popup
    if ($(".video-popup").length) {
      $(".video-popup").magnificPopup({
        type: "iframe",
      });
    }

    // video popup two
    if ($(".video-popup-two").length) {
      $(".video-popup-two").magnificPopup({
        type: "iframe",
      });
    }

    // odometer counter
    $(".odometer").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    // speaker slider
    $(".speaker__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-speaker"),
        nextArrow: $(".next-speaker"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // testimonial slider
    $(".testimonial__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
  });
})(jQuery);
