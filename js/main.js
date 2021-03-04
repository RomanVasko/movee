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
    $('#gazells-container .cars').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true
    });
    $('#minivan-container .cars').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true
    });
    $('#truck-container .cars').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true
    });

})