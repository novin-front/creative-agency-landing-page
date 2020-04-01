 function initMap() {
     var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 17,
         center: {
             lat: 35.6905124,
             lng: 51.3879098
         },
         disableDefaultUI: true
     });
 }
 $(document).ready(function () {
     let countFlag = true;
     var top = 0;
     let navMenu = $("#nav-main-menu").offset();
     let countUpSection = $(".count-up-section").offset();
     $(window).on('scroll', function () {
         if (navMenu.top < $(window).scrollTop()) {
             $("#nav-main-menu").addClass("postion-fixed")
         } else if (navMenu.top >= $(window).scrollTop()) {
             $("#nav-main-menu").removeClass("postion-fixed")
         }
         if ((countUpSection.top + 400) <= ($(window).scrollTop() + 850) && countFlag) {
             cuonUpFunction();
             countFlag = false;
         }

         $("#nav-main-menu").toggleClass("hide", $(window).scrollTop() > top);
         top = $(window).scrollTop();
     });
     $("#menu-list-btn").click(function () {
         $(".mobile-menu").fadeIn(300);
     })
     $(".menu-close-btn").click(function () {
         $(".mobile-menu").fadeOut(300);
     })

     $('.testimonial-description').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true,
         fade: false,
         rtl: true,
         asNavFor: '.testimonial-all-image'
     });
     $('.testimonial-all-image').slick({
         slidesToScroll: 1,
         centerMode: true,
         slidesToShow: 1,
         centerMode: true,
         variableWidth: true,
         asNavFor: '.testimonial-description',
         dots: true,
         centerMode: true,
         rtl: true,
         focusOnSelect: true,
         nextArrow: '<button class="screen-shot-btn btn-right-aw"><i class="fa fa-arrow-right"></i></button>',
         prevArrow: '<button class="screen-shot-btn btn-left-aw"><i class="fa fa-arrow-left"></i></button>',
     });


     initMap();

     function cuonUpFunction() {
         $('.counter').each(function () {
             var $this = $(this);
             var countTo = $this.attr('data-count');

             $({
                 countNum: $this.text()
             }).animate({
                     countNum: countTo
                 },

                 {

                     duration: 2000,
                     easing: 'linear',
                     step: function () {
                         $this.text(Math.floor(this.countNum));
                     },
                     complete: function () {
                         $this.text(this.countNum + " + ");
                     }

                 });
         });
     }

 });