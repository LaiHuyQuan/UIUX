$(document).ready(function () {
  var options = {
    series: [
      {
        name: "Đã hoàn thành",
        data: [44, 55],
      },
      {
        name: "Còn lại",
        data: [12, 10],
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
});
