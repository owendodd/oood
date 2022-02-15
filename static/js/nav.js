$(function () {
    
    $(".menu").hover(function () {
        var activeLabel = $('.label');
            shownWidth  = activeLabel.outerWidth();
            targetWidth = 298 - shownWidth;
            $('.menugroup').addClass('show').css("width", targetWidth);
            $(".menuicon .bar:nth-of-type(2)").addClass("twothird");
            console.log(shownWidth);
    }, function() {
        $('.menugroup').removeClass('show').css("width", 0);
        $(".menuicon .bar:nth-of-type(2)").removeClass("twothird");
    });
});

