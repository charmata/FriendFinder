var submit = () => {
  $.post("/api/friends", data => {
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
