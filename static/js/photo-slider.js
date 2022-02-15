$(function () {
  var first_slide = $(".slider>.slide:first-of-type");
  first_slide.addClass("show");

  $(".next").click(function () {
    var slider = $(".slider"),
        current_slide = $(".slide.show"),
        should_loop = current_slide.next().length > 0,
        next_slide = should_loop
        ? current_slide.next()
        : slider.children(".slide:first");

    current_slide.removeClass("show");
    next_slide.addClass("show");

    console.log(current_slide);

  });

  $(".prev").click(function () {
    var slider = $(".slider"),
        current_slide = $(".slide.show"),
        should_loop = current_slide.prev().length > 0,
        prev_slide = should_loop
        ? current_slide.prev()
        : slider.children(".slide:last");

    current_slide.removeClass("show");
    prev_slide.addClass("show");

    console.log("forward");
  });
});