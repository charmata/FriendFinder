var submit = () => {
  var data = $("form").serializeArray();
  $.post("/api/friends", data).then(res => {
    console.log(res);
    $(".modal").modal("show");
  });
};

$(document).ready(() => {
  if (window.location.href.includes("/survey")) {
    $("form").submit(e => {
      e.preventDefault();
      submit();
    });
  }
});
