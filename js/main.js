$(document).ready(() => {
    let minivan = $('#minivan-container');
    let truck = $('#truck-container');
    minivan.hide();
    truck.hide();

    $('.category').click((e) => {
        let currentElement = $(e.target);
        $('.cars-container').hide();
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElement.addClass('active');

        $('#' + id + ' .cars').slick('refresh');
    });


    window.addEventListener("resize", function () {
        if (window.innerWidth >= 768) {
            $('#price-blocks').slick('unslick');

        } else {
            $('#price-blocks').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false

            });
        }
    });

    $('#gazells-container .cars').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1277,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    appendDots: $("#gazells-container .mg-slick-dots"),
                    arrows: false
                }
            },
        ]
    });
    $('#minivan-container .cars').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1277,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    appendDots: $("#minivan-container .mg-slick-dots"),
                    arrows: false
                }
            },
        ]
    });
    $('#truck-container .cars').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1277,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    appendDots: $("#truck-container .mg-slick-dots"),
                    arrows: false
                }
            },
        ]
    });

    $('#burger').click(() => {
        $('#main-header').toggleClass('menu-open');
    })

    $('#main-header-menu a').click(() => {
        $('#main-header').removeClass('menu-open');
    })
})