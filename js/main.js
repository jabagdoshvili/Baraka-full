$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        infinite: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    // init: false,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    }
});

var swiper = new Swiper('.swiper-container-category', {
    slidesPerView: 4,
    spaceBetween: 10,
    // init: false,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    }
});

var swiper = new Swiper('.swiper-container-member', {
    loop: true,
	navigation: {
	  nextEl: '.swiper-button-next-testi',
	  prevEl: '.swiper-button-prev-testi',
	},
  });


var swiper = new Swiper('.swiper-container-home', {
    spaceBetween: 10,
    // init: false,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 75) {
        $(".header_style_2").addClass("fixed");
    } else if (scroll == 0) {
        $(".header_style_2").removeClass("fixed");
    }

}); 

$('.toggle').click(function() {
    $('.toggle-content', this).toggleClass('active')
});

$( ".sm_location_0" ).mouseover(function() {
    $('.baraka-shop').css('display', 'block')
});

$( ".sm_location_0" ).mouseleave(function() {
    $('.baraka-shop').css('display', 'none')
  });