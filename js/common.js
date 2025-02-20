// page scroll to top on refresh
// =======================================================

// window.addEventListener('beforeunload', function () {
//     document.body.style.display = 'none';
//     window.scrollTo(0, 0);
// });

// window.addEventListener('load', function () {
//     document.body.style.display = 'block';
// });


/*================================= Sticky Header Starts =================================*/
function fixedHeader() {
    var sticky = $('#header'),
        scroll = $(window).scrollTop();
    if (scroll >= 10) sticky.addClass('fixHeader');
    else sticky.removeClass('fixHeader');
}

$(window).scroll(function (e) {
    fixedHeader();
});
fixedHeader();
/* Sticky Header Ends */

var pathArray = window.location.pathname.split('/');
var basePath = '/' + pathArray[1];

$('#header').load('/common/header.html', function () {    
    fixedHeader();
    if ($(window).outerWidth() <= 1025) {
        var MobileMenu = new MobileNav({
            initElem: "nav",
            menuTitle: "Menu",
        });
    }
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
        const hasDropdowns = item.querySelector(".dropdown") !== null;
        if (hasDropdowns) {
            item.classList.add("dr-icon");
        }
    });
});

$('#footer').load('/common/footer.html');


/* Form Feild Functionality */
$(document).on('input', '.form-field', function () {
    if ($(this).val().length > 0) {
        $(this).addClass('field--not-empty');
    } else {
        $(this).removeClass('field--not-empty');
    }
});
/* Form Feild Functionality ends */






/* Password View */
$(document).on('click', '.view-pass', function () {

    inp = $(this).parents('.form-grp').find('input');
    type = inp.attr('type');

    if (type == 'password') {
        inp.attr('type', 'text');
        $(this).removeClass('ph-eye-slash').addClass('ph-eye');
    } else {
        inp.attr('type', 'password');
        $(this).removeClass('ph-eye').addClass('ph-eye-slash');
    }
});
/* // Password View */


/* Lenis Starts */
const lenis = new Lenis();

lenis.on("scroll", (e) => {
    if ($(window).outerWidth() > 1024) {
        if (e.direction === 1) {
            $("#header").addClass("active");

        } else {
            $("#header").removeClass("active");
        }
    } else {}
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// Lenis Ends

/* aos script */
AOS.init({
    duration: 2000,
});


//  storySwiper script
var storySwiper = new Swiper(".storySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        769: {
            slidesPerView: 1.1,
            spaceBetween: 50
        },
        1290: {
            slidesPerView: 1.5,
            spaceBetween: 40
        }
    },


});

//  storySwiper script for testimonials created on the Test prep page
var storySwiper1 = new Swiper(".storySwiper1", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        768: {
            slidesPerView: 2.1,
            spaceBetween: 50
        },
        1290: {
            slidesPerView: 2.5,
            spaceBetween: 40
        }
    },


});

//  storySwiper script
var storySwiper = new Swiper(".storySwiper2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        769: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        1290: {
            slidesPerView: 1.8,
            spaceBetween: 40
        }
    },


});

var whySwiper = new Swiper(".whySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
        nextEl: ".whybtn-next",
        prevEl: ".whybtn-prev",
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },

    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        565: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        835: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        1025: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

    },

});



/* View More button script for Country page */

document.addEventListener('DOMContentLoaded', () => {
    const view_More = document.getElementById('view_More');
    const moreContent = document.getElementById('view');

    view_More.addEventListener('click', () => {
        moreContent.classList.toggle('shown');
        if (moreContent.classList.contains('shown')) {
            view_More.textContent = 'View Less';
        } else {
            view_More.textContent = 'Read More';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const view_More1 = document.getElementById('view_More1');
    const moreContent1 = document.getElementById('view1');

    view_More1.addEventListener('click', () => {
        moreContent1.classList.toggle('shown');
        if (moreContent1.classList.contains('shown')) {
            view_More1.textContent = 'View Less';
        } else {
            view_More1.textContent = 'Read More';
        }
    });
});

/* end of View More button script for Country page */



/* faq accordion script */
$(".toggle").click(function (e) {
    e.preventDefault();

    let $this = $(this);
    let $content = $this.next(".pera");
    let isOpen = $content.hasClass("show");

    // Close all other open items smoothly
    $(".pera.show").removeClass("show").stop().animate({
        height: 0
    }, 350, function () {
        $(this).slideUp(350);
    });
    $('.accordion li.active').removeClass("active");

    if (!isOpen) {
        // Open the clicked item smoothly
        $content.addClass("show").css({
            display: "block",
            height: "auto"
        });
        let height = $content.outerHeight();
        $content.css({
            height: 0
        }).stop().animate({
            height: height
        }, 350, function () {
            $(this).css({
                height: "auto"
            }); // Set height back to auto after animation
        });
        $this.parent().addClass("active");
    } else {
        // Close the clicked item smoothly
        $content.removeClass("show");
        $content.stop().animate({
            height: 0
        }, 350, function () {
            $(this).slideUp(350);
        });
        $this.parent().removeClass("active");
    }
});




/* video popup */
$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        // disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.popup-image').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', 
          
    });

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
    }); 
});

$('#formDestination').multiselect({
    columns: 1,
	texts: {
        placeholder: 'Select Destination'
    }
});

// blog reading min



