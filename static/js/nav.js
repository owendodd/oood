$(function () {
    $(document).ready(function () {
        $('.menuitem').each(function () {
            var navUrl = $(this).find('a').attr('href');
            pageUrl = window.location.pathname;
            nav = navUrl.replace(/\//g, '');
            page = pageUrl.replace(/\//g, '');

            $(this).addClass('show');

            if (nav == page) {
                $(this).addClass('show');
            }
            else {
                var width = $(this).outerWidth();
                $(this).attr('data', width);
                $(this).removeClass('show');
                $(this).addClass('hide').css("width", 0);
            }
        })

    });

    function getWidth() {
        var width = $(this).attr('data');

        $(this).css('width', width)
    }




    $(".menu").hover(function () {
        $('.menuitem.hide').each(function () {
            var width = $(this).attr('data');
            $(this).addClass('show').css('width', width);
        });

        $(".menuicon .bar:nth-of-type(2)").addClass("twothird");

    }, function () {
        $('.menuitem.hide').removeClass('show').css("width", 0);
        $(".menuicon .bar:nth-of-type(2)").removeClass("twothird");
    });

});

