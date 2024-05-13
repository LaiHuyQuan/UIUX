$(".responsive").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(document).ready(function () {
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
    colors: ["#74B9FF", "#ff3f34"],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  // chart-2
  var options = {
    series: [44, 12],
    chart: {
      type: "donut",
    },
    labels: ["Đã hoàn thành", "Chưa hoàn thành"],
    colors: ["#2ecc71", "#e74c3c", "#000"],
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  var chart2 = new ApexCharts(document.querySelector("#chart-2"), options);
  chart2.render();
});
