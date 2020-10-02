/* ========================================================
                            SERVICES
=========================================================*/
$(function () {
    //animate on scroll
    new WOW().init();
});

 
/* ========================================================
                            TEAM
=========================================================*/
$(function () {

    $("#team-members").owlCarousel({
        item: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,

  });

});

/* ========================================================
                       TESTIMONIALS
=========================================================*/
$(function () {

    $("#customers-testimonials").owlCarousel({
        item: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,

  });

});