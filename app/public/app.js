var submit = () => {
  var data = $("form").serializeArray();
  $.post("/api/friends", data).then(res => {
    $(".modal").modal("show");
  });
};

$(document).ready(() => {
  if (window.location.href.includes("/survey")) {
    $("#submit").on("click", e => {
      e.preventDefault();
      submit();
    });
  }
});
