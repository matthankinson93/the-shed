$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var width = $(window).width();
    if (width > 1400) {
        if (scrollTop < 2400) {
            $('.booking-img').css('background-position-y', -(scrollTop * 0.2) + 'px');
        } else {
            $('.booking-img').css('background-position-y', -(2400 * 0.2) + 'px');
        }
    } else if (width > 1200 && width < 1400) {
        if (scrollTop < 1640) {
            $('.booking-img').css('background-position-y', -(scrollTop * 0.2) + 'px');
        } else {
            $('.booking-img').css('background-position-y', -(1640 * 0.2) + 'px');
        }
    } else if (width > 1000 && width < 1200) {
        if (scrollTop < 1460) {
            $('.booking-img').css('background-position-y', -(scrollTop * 0.2) + 'px');
        } else {
            $('.booking-img').css('background-position-y', -(1460 * 0.2) + 'px');
        }
    } else if (width > 800 && width < 1000) {
        if (scrollTop < 1140) {
            $('.booking-img').css('background-position-y', -(scrollTop * 0.2) + 'px');
        } else {
            $('.booking-img').css('background-position-y', -(1140 * 0.2) + 'px');
        }
    } else if (width > 600 && width < 800) {
        if (scrollTop < 860) {
            console.log(scrollTop);
            $('.booking-img').css('background-position-y', -(scrollTop * 0.2) + 'px');
        } else {
            $('.booking-img').css('background-position-y', -(860 * 0.2) + 'px');
        }
    } else {
        if (scrollTop < 526) {
            $('.booking-img').css('background-position-y', -(scrollTop * 0.2) + 'px');
        } else {
            $('.booking-img').css('background-position-y', -(526 * 0.2) + 'px');
        }
    }
});

$(document).ready(function () {
    var $fadeElems = $('.bistro-content');
    $(window).scroll(function () {
        $fadeElems.each(function () {
            if (isElementInViewport($(this))) {
                $(this).addClass('visible');
            }
        });
    });

    // Build the carousel
    $('.slick-carousel').slick({
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".Embed .Header").remove();

    // Helper function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});