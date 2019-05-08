var submit = () => {
  var data = $("form").serializeArray();
  $.post("/api/friends", data).then(res => {
    $(".modal-body").empty();
    var name = $("<h5>")
      .text(res.name)
      .addClass("text-center");
    var image = $("<img>")
      .attr("src", res.photo)
      .css({ display: "block", margin: "auto", "max-height": "300px", "max-width": "100%" });
    $(".modal-body").append(name, image);
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
