$(".responsive").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
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

$(document).ready(function () {
  $(".add-kpi-mockup").on("click", ".add-action", function () {
    var blcItem =
      '<div class="blc-item">' +
      '<div class="blc-cnt-lf">' +
      '<input type="text" placeholder="Tên danh mục" class="item-lf-dis" />' +
      "</div>" +
      '<div class="blc-cnt-rt center">' +
      '<div class="add-btn add-quest" style="margin-right: 10px">' +
      '<i class="fa-solid fa-magnifying-glass-plus"></i> Chi tiết' +
      "</div>" +
      '<i class="fa-solid fa-trash"></i>' +
      "</div>" +
      "</div>";

    $(".blc-cnt").append(blcItem);
  });

  $(".add-kpi-mockup").on("click", ".close-btn", function () {
    $(".add-kpi-mockup").addClass("hide");
  });

  $(".add-kpi-mockup").on("click", ".save-btn", function () {
    $(".add-kpi-mockup").addClass("hide");
    $(".options-mockup").addClass("hide");
  });

  $(".add-kpi-mockup").on("click", ".add-quest", function () {
    $(".add-action-mockup").removeClass("hide");
  });

  $(".page-hd").on("click", ".add-btn", function () {
    $(".options-mockup").removeClass("hide");
  });

  $(".kpi-list").on("click", ".add-btn", function () {
    $(".add-action-mockup").removeClass("hide");
  });

  $(".options-mockup").on("click", ".fa-x", function () {
    $(".options-mockup").addClass("hide");
  });

  $(".options-mockup").on("click", ".add-btn", function () {
    $(".add-kpi-mockup").removeClass("hide");
  });
});
