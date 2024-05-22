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
    $(".gray-bg").addClass("hide");
    $(".add-kpi-mockup").addClass("hide");
  });

  $(".add-kpi-mockup").on("click", ".save-btn", function () {
    $(".gray-bg").addClass("hide");
    $(".options-gray-bg").addClass("hide");
    $(".add-kpi-mockup").addClass("hide");
    $(".options-mockup").addClass("hide");
    addKpiList();
    // loadSlider();
  });

  $(".add-kpi-mockup").on("click", ".add-quest", function () {
    $(".action-gray-bg").removeClass("hide");
    $(".add-action-mockup").removeClass("hide");
  });

  $(".page-hd").on("click", ".add-btn", function () {
    $(".options-gray-bg").removeClass("hide");
    $(".options-mockup").removeClass("hide");
  });

  $(".kpi-list").on("click", ".add-btn", function () {
    $(".action-gray-bg").removeClass("hide");
    $(".add-action-mockup").removeClass("hide");
  });

  $(".options-mockup").on("click", ".fa-x", function () {
    $(".options-gray-bg").addClass("hide");
    $(".options-mockup").addClass("hide");
  });

  $(".options-mockup").on("click", ".add-btn", function () {
    $(".options-gray-bg").removeClass("hide");
    $(".add-kpi-mockup").removeClass("hide");
  });

  // loadSlider
  function loadSlider() {
    $(".responsive").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      dots: false,
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
  }

  // add kpi list
  function addKpiList() {
    var newKpiList =
      '<div class="col-12 col-lg-12">' +
      '<div class="kpi-list" style="background-color: #fff">' +
      '<div class="kpi-list-hd">' +
      '<div class="hd-lf">' +
      "<span>ABC tuần 30</span>" +
      "</div>" +
      '<div class="hd-rt center">' +
      "<span>01/04/2024-07/04/2024</span>" +
      '<span class="sp1">175/300</span>' +
      '<div class="add-btn">' +
      '<i class="fa-solid fa-plus"></i> Thêm' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="responsive blc1">' +
      "</div>" +
      "</div>" +
      "</div>";

    $(".schedule-content").append(newKpiList);
    addKpiItem("Ngày 1", "01/06/2003", 120, $(".blc1"));
    addKpiItem("Ngày 2", "02/06/2003", 120, $(".blc1"));
    addKpiItem("Ngày 3", "03/06/2003", 120, $(".blc1"));
    addKpiItem("Ngày 4", "04/06/2003", 120, $(".blc1"));
    addKpiItem("Ngày 5", "05/06/2003", 120, $(".blc1"));
    // addKpiItem("Ngày 5", "05/06/2003", 120, $(".blc1"));
    // addKpiItem("Ngày 5", "05/06/2003", 120, $(".blc1"));
    // addKpiItem("Ngày 5", "05/06/2003", 120, $(".blc1"));
    loadSlider();
  }

  // add kpi item
  function addKpiItem(name, date, questNum, blockName) {
    var newKpiItem =
      '<div class="slide-item comming">' +
      '<div class="item-top center">' +
      '<span style="font-weight: 700">' +
      name +
      "</span>" +
      '<span class="add-btn"' +
      '><i class="fa-solid fa-plus"></i> Chi tiết</span' +
      ">" +
      "</div>" +
      '<div class="item-cnt">' +
      "<span>Ngày</span>" +
      "<span>" +
      date +
      "</span>" +
      "</div>" +
      '<div class="item-bot">' +
      "<span>Tiến độ</span>" +
      "<span>0/" +
      questNum +
      "</span>" +
      "</div>" +
      "</div> ";

    blockName.append(newKpiItem);
  }
  loadSlider();
  $(".header-top-right").on("click", ".burger-btn", function () {
    $(".nav-respon").css("left", "0px");
    $(".shadow").css("display", "block");
  });

  $(".close-nav").click(function () {
    $(".nav-respon").css("left", "-500px");
    $(".shadow").css("display", "none");
  });

  $(".shadow").click(function () {
    $(".nav-respon").css("left", "-500px");
    $(this).css("display", "none");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });

  $(".scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
