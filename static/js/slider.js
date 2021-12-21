$(function () {
    var first_slide = $(".slider>.slide:first-of-type"),
      total_slides = $(".slider>.slide").length;
  
    first_slide.addClass("show");
    $(".indicator").html("1 / " + total_slides);
  
    const sliders = document.querySelectorAll(".slider");
  
    for (let index = 0; index < sliders.length; index++) {
      const element = sliders[index];
      if (!element.innerHTML.trim()) {
        element.parentElement.remove();
      }
    }
  
    $(".next").click(function () {
      var slider = $(this).closest(".slidewrapper").children(".slider"),
        current_slide = slider.children(".slide.show"),
        should_loop = current_slide.next().length > 0,
        next_slide = should_loop
          ? current_slide.next()
          : slider.children(".slide:first");
  
      current_slide.removeClass("show");
      next_slide.addClass("show");

    });
  
    $(".prev").click(function () {
      var slider = $(this).closest(".slidewrapper").children(".slider"),
        current_slide = slider.children(".slide.show"),
        should_loop = current_slide.prev().length > 0,
        prev_slide = should_loop
          ? current_slide.prev()
          : slider.children(".slide:last");
  
      current_slide.removeClass("show");
      prev_slide.addClass("show");
  
      console.log("test");
    });
  });