document.addEventListener("DOMContentLoaded", function () {
    function setTopPadding() {
        var topPadding = document.querySelectorAll(".steps-card");
        if (window.innerWidth <= 1024) {
            topPadding.forEach((elem, index) => {
                var topPosition = (index + 1) * 8; // Adjusted padding for <= 1023px
                elem.style.top = topPosition + "%";
            });
        } else {
            topPadding.forEach((elem, index) => {
                var topPosition = (index + 1) * 13; // Original padding for > 1023px
                elem.style.top = topPosition + "%";
            });
        }
    }

    setTopPadding(); // Initial call to set padding based on viewport width

    window.addEventListener("resize", function () {
        setTopPadding(); // Call setTopPadding() whenever the window is resized
    });
});



var trustedImgSwiper = new Swiper(".trustedImgSwiper", {
   slidesPerView: 1,
   spaceBetween: 20,
   navigation: {
      nextEl: ".trusted-next",
      prevEl: ".trusted-prev",
  }, 
   
   speed: 800,



    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        769: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        1290: {
            slidesPerView: 1.6,
            spaceBetween: 20
        }
    },
});


/*  review section script */
/* 
 function homeImgScroll() {
     const imgAnim = gsap.timeline({
             scrollTrigger: {
                 trigger: ".destination-sec-wrap",
                 start: "0% 80%",
                 end: "0% -50%",
                 scrub: 1,

             }
         })
         .from(".dest-img-left", {
             y: -1000
         }, 0)
         .from(".dest-img-right", {
             y: 1000
         }, 0)

 }
 homeImgScroll();
 */


ScrollTrigger.matchMedia({
    "(min-width: 601px)": function () {
        let imgAnim = gsap.timeline({
            scrollTrigger: {
                trigger: ".destination-sec-wrap",
                start: "0% 80%",
                end: "0% -50%",
                scrub: 1,
                // markers: true
            }
        });

        imgAnim.from(".dest-img-left", {
                y: -1000
            }, 0)
            .from(".dest-img-right", {
                y: 1000
            }, 0)
    },
    /*==================================================================*/

    /* "(max-width: 1024px)": function () {
        let imgAnim = gsap.timeline({
            scrollTrigger: {
                trigger: ".destination-sec-wrap",
                start: "0% 80%",
                end: "0% -50%",
                scrub: 1,
                // markers: true
            }
        });

        imgAnim.from(".dest-img-left", {
                y: -1000
            }, 0)
            .from(".dest-img-right", {
                y: 1200
            }, 0)
    } */
})


/* course swiper script */
var courseSwiper = new Swiper(".courseSwiper", {
    //  spaceBetween: 10,
    //  slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {
        320: {
            slidesPerView: 1.6,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2.5,
            spaceBetween: 30,

        },
        1290: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }

});
var courseSwiper2 = new Swiper(".courseSwiper2", {
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    spaceBetween: 10,
    thumbs: {
        swiper: courseSwiper,
    },
});

function handleButtonClick(event) {
    event.preventDefault();  // Prevent the default link action

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user is on an Android or iPhone device
    if (/android/i.test(userAgent)) {
        // Android device, redirect to phone number
        window.location.href = "+9779857051868";  // Replace with your dealer's number
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        // iPhone/iPad device, redirect to phone number
        window.location.href = "+9779857051868";  // Replace with your dealer's number
    } else {
        // If on a PC, redirect to the contactus.html page
        window.location.href = "contactus.html";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".js-nav-toggle");
    const menu = document.getElementById("mobileMenu");
    const closeBtn = document.getElementById("closeMenu");

    toggleBtn.addEventListener("click", function () {
        menu.classList.toggle("active"); // Slide in/out
    });

    closeBtn.addEventListener("click", function () {
        menu.classList.remove("active"); // Close the menu
    });
});



let currentIndex = 0;
const images = document.querySelectorAll(".partner-logo img");
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

// Create lightbox image element
const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

// Add previous, next, and close buttons
const closeBtn = document.createElement('span');
closeBtn.classList.add('close-btn');
closeBtn.innerHTML = '&times;';
lightbox.appendChild(closeBtn);

const prevBtn = document.createElement('span');
prevBtn.classList.add('prev-btn');
prevBtn.innerHTML = '&#10094;';
lightbox.appendChild(prevBtn);

const nextBtn = document.createElement('span');
nextBtn.classList.add('next-btn');
nextBtn.innerHTML = '&#10095;';
lightbox.appendChild(nextBtn);

// Open Lightbox on Image Click
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        updateLightbox();
        lightbox.style.display = "flex";
    });
});

// Update Lightbox Image
function updateLightbox() {
    lightboxImg.src = images[currentIndex].src;
}

// Close Lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = "none";
});

// Navigate to Next Image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
});

// Navigate to Previous Image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
});

// Close Lightbox if clicked outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});







    
    