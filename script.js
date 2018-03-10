$("#open").on("click", () => {

  $("html").css({
    overflow: "hidden",
  })
  $("#menu").css({
    display: "flex",
  })
  $("body").css({
    height: ""
  })
  $(".fa-times")
  .fadeIn("slow")
  .css({
    display: "flex",
  })
  $(".fa-bars")
  .css({
    display: "none"
  })
})

$("#close").on("click", () => {

  $("html").css({
    overflow: "scroll",
  })
  $("#menu").css({
    display: "none",
  })
  $("body").css({
    height: "300vh",
  })
  $(".fa-times")
  .css({
    display: "none",
  })
  $(".fa-bars")
  .css({
    display: "flex",
  })
})
