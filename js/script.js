$(function(){

    $('.slider__inner').slick({
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false
    });

$('.calculator__slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.calculator__width-slider',
    focusOnSelect: true,
    responsive:[
        {breakpoint:939,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows : false,
                dots:true,
            }
            },{
            breakpoint:564,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows : false,
                dots:true,
            }
        }
    ]
});

$('.calculator__width-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.calculator__slider-nav',
    arrows : false,
    fade: true
});


$('select').styler();

});

function checkForm(form) {
    event.preventDefault();

    // телефон
let number = document.getElementById('number');

    if (!number.value) {
    return false;
    }

    else {
        alert("Сообщение отправлено");
        number.value= '';
    }
}

