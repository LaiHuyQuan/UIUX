$(document).ready(function () {
  $(".btn-primary").click(function (e) {
    e.preventDefault();
    Swal2.fire({
      icon: "success",
      title: "Đã lưu thay đổi",
    });
  });
});
