$(document).ready(function () {
  var options = {
    series: [
      {
        name: "Đã hoàn thành",
        data: [44, 51],
      },
      {
        name: "Còn lại",
        data: [12, 5],
      },
    ],
    chart: {
      type: "bar",
      height: 150,
      stacked: true,
      stackType: "100%",
      toolbar: { show: false },
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        width: 5,
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: ["Hiện tại", "Dự đoán"],
      width: 5,
    },
    legend: {
      show: false,
    },
    tooltip: {},
    fill: {
      opacity: 1,
    },
    colors: ["#008FFB", "#b2bec3"],
  };

  var barchart = new ApexCharts(document.querySelector("#bar-chart"), options);
  barchart.render();

  // barchart2
  var options = {
    series: [
      {
        name: "Đã hoàn thành",
        data: [3, 2, 2, 1],
      },
      {
        name: "Còn lại",
        data: [0, 1, 1, 2],
      },
    ],
    chart: {
      type: "bar",
      height: 200,
      stacked: true,
      stackType: "100%",
      toolbar: { show: false },
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        width: 5,
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    yaxixs: {
      show: false,
    },
    xaxis: {
      categories: ["Ngày 1", "Ngày 2", "Ngày 3", "Ngày 4"],
      width: 5,
    },
    legend: {
      show: false,
    },
    tooltip: {},
    fill: {
      opacity: 1,
    },
    colors: ["#008FFB", "#b2bec3"],
  };

  var barchart2 = new ApexCharts(
    document.querySelector("#bar-chart-2"),
    options
  );
  barchart2.render();

  $(".des-main").on("click", ".des-btn", function () {
    $(".action-gray-bg").removeClass("hide");
    $(".add-action-mockup").toggleClass("hide");
  });

  $(".add-action-mockup").on("click", ".add-btn", function () {
    var newAction =
      '<div class="quest-item">' +
      '<div class="quest-item-lf">' +
      '<input type="text" placeholder="Tên nhiệm vụ" class="item-lf-dis">' +
      '<input type="number" placeholder="Số lượng" class="item-lf-dis center">' +
      "</div>" +
      '<div class="quest-item-rt center">' +
      '<i class="fa-solid fa-trash"></i>' +
      "</div>" +
      "</div>";

    $(".quest-cnt").append(newAction);
  });

  $("body").on("click", ".fa-trash", function () {
    $(this).parent().parent().remove();
    Toast.fire({
      icon: "success",
      title: "Đã xóa nhiệm vụ",
    });
  });

  $(".add-action-mockup").on("click", ".close-btn", function () {
    $(".add-action-mockup").toggleClass("hide");
    $(".action-gray-bg").addClass("hide");
  });

  $(".add-action-mockup").on("click", ".save-btn", function () {
    $(".action-gray-bg").addClass("hide");
    $(".add-action-mockup").toggleClass("hide");
    var newQuest =
      '<div class="card-item">' +
      '<div class="card-item-lf">' +
      '<span class="center">Nhiệm vụ mới</span>' +
      '<div class="card-item-right">' +
      "<label>10</label>" +
      '<div class="form-check">' +
      '<input class="form-check-input" type="checkbox" value="" id="" style="width: 20px; height: 20px" />' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="card-item-rt">' +
      '<i class="fa-solid fa-trash"></i>' +
      "</div>" +
      "</div>";

    $(".des-main").append(newQuest);
    Toast.fire({
      icon: "success",
      title: "Đã thêm nhiệm vụ",
    });
  });

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

  // document.getElementById("toast-success").addEventListener("click", () => {
  //   Toast.fire({
  //     icon: "success",
  //     title: "Signed in successfully",
  //   });
  // });
});
