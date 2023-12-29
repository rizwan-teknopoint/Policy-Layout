$(document).ready(function () {
  $(".t-wrapper").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
function initSlick(){
  $(".icons-wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}



  function destroySlick() {
    if ($(".icons-wrapper").hasClass("icons-wrapper")) {
      $(".icons-wrapper").slick("unslick");
    }
  }

  if (window.matchMedia("(max-width: 767px)").matches) {
    initSlick();
  }
  const mediaQuery = window.matchMedia("(max-width: 767px)");
  console.log(mediaQuery);
  window.addEventListener("resize", function () {
    if (mediaQuery.matches) {
      initSlick();
    } else {
      destroySlick();
    }
  });
});