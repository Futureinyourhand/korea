


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
});

/*Image popup */
 $(document).ready(function () {
     $('.popup-image').magnificPopup({
         type: 'image',
         mainClass: 'mfp-with-zoom', 
          
     });
 });