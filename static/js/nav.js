$(function () {

    function getWidth() {
        var $cloneMenu   = $('.nav').clone().appendTo('body');
            subMenu      = $cloneMenu.find('.menugroup').addClass("show").css("width", "auto");
            width        = subMenu.outerWidth();

        $cloneMenu.remove();
        return width;
    }

    
    $(".menu").hover(function () {
        var targetWidth = getWidth();

            $('.menugroup').addClass('show').css("width", targetWidth);
            $(".menuicon .bar:nth-of-type(2)").addClass("twothird");

    }, function() {
        $('.menugroup').removeClass('show').css("width", 0);
        $(".menuicon .bar:nth-of-type(2)").removeClass("twothird");
    });

    $( document ).ready(function() {
        

    });

});

