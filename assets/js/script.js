$(document).ready(function () {
  function loadSlider() {
    $(".responsive").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
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
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  }

  // chart
  var options = {
    series: [
      {
        name: "Hoàn thành",
        data: [44, 55, 41, 67, 22, 0, 0],
      },
      {
        name: "Chưa hoàn thành",
        data: [13, 23, 20, 8, 13, 27, 33],
      },
    ],
    chart: {
      type: "bar",
      height: "100%",
      width: "90%",
      stacked: true,
      stackType: "100%",
    },
    grid: {
      borderColor: "#555",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          xaxis: {
            categories: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
          },
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      categories: [
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7",
        "Chủ nhật",
      ],
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
    },
    colors: ["#059bfe", "#ff4069"],
  };

  loadSlider();

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  // chart-2
  var radialGradientOptions = {
    series: [63],
    chart: {
      width: 256,
      // height: 230,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val) + "%";
            },
            color: "#111",
            fontSize: "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Hoàn thành"],
  };

  var radialGradient = new ApexCharts(
    document.querySelector("#radialGradient"),
    radialGradientOptions
  );
  radialGradient.render();

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
