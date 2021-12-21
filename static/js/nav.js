$(function () {

    $(".nav").hover(function () {
        $(".menugroup").toggleClass("show");
        $(".menuicon .bar:nth-of-type(2)").toggleClass("twothird");
        // $(".menuicon .bar:nth-of-type(3)").toggleclass("onethird");
    });
  
  });