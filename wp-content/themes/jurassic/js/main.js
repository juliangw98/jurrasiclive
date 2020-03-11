$(document).ready(function() {
    // Dinosaurus slider
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
          slideChangeTransitionStart: function () {
            if ($('#dino-1').hasClass("swiper-slide-active")) {
                $('#dino_1').css("display",'flex')
                $('#dino_2').css("display",'none')
                $('#dino_3').css("display",'none')

            } else if ($('#dino-2').hasClass("swiper-slide-active")) {
              $('#dino_1').css("display",'none')
              $('#dino_2').css("display",'flex')
              $('#dino_3').css("display",'none')


            } else if ($('#dino-3').hasClass("swiper-slide-active")){
              $('#dino_1').css("display",'none')
              $('#dino_2').css("display",'none')
              $('#dino_3').css("display",'flex')

            }
          },
        }
    });





    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        var height = window.innerHeight;
        var section2 = height * 2;
        var section3 = height * 3;
        var section4 = height * 4;

        console.log(section2);
        console.log(section3);
        console.log(section4);
        if ($(this).scrollTop() >= height && $(this).scrollTop() < section2) {
            $('#menu').addClass('show');
            $('.park').css("color", "#68291A");
            $('.dino').css("color", "#B6A259")
            $('.character').css("color", "#B6A259")
            $('.ticket').css("color", "#B6A259")



        } else if ($(this).scrollTop() >= section2 && $(this).scrollTop() < section3) {
            $('#menu').addClass('show');
            $('.park').css("color", "#B6A259");
            $('.dino').css("color", "#68291A")
            $('.character').css("color", "#B6A259")
            $('.ticket').css("color", "#B6A259")
        } else if ($(this).scrollTop() >= section3 && $(this).scrollTop() < section4) {
            $('#menu').addClass('show');
            $('.park').css("color", "#B6A259");
            $('.dino').css("color", "#B6A259")
            $('.character').css("color", "#68291A")
            $('.ticket').css("color", "#B6A259")

        } else if ($(this).scrollTop() >= section4) {
            $('#menu').addClass('show');
            $('.park').css("color", "#B6A259");
            $('.dino').css("color", "#B6A259")
            $('.character').css("color", "#B6A259")
            $('.ticket').css("color", "#68291A")

        } else if ($(this).scrollTop() < height) {
            $('#menu').removeClass('show');
            // $('#menu').css('padding','0')

        } else {

        }


    });
    //console images switch
    $('#pills-island-tab').click(function() {
        $("#console-img-island").css('display','block')
        $("#console-img-activities").css('display','none')
        $("#console-img-movie").css('display','none')
        $("#console-img-hotel").css('display','none')
        $("#console-img-dining").css('display','none')

    });
    $('#pills-movie-tab').click(function() {
      $("#console-img-island").css('display','none')
      $("#console-img-activities").css('display','none')
      $("#console-img-movie").css('display','block')
      $("#console-img-hotel").css('display','none')
      $("#console-img-dining").css('display','none')

    });
    $('#pills-hotel-tab').click(function() {
      $("#console-img-island").css('display','none')
      $("#console-img-activities").css('display','none')
      $("#console-img-movie").css('display','none')
      $("#console-img-hotel").css('display','block')
      $("#console-img-dining").css('display','none')
    });
    $('#pills-dining-tab').click(function() {
      $("#console-img-island").css('display','none')
      $("#console-img-activities").css('display','none')
      $("#console-img-movie").css('display','none')
      $("#console-img-hotel").css('display','none')
      $("#console-img-dining").css('display','block')
    });
    $('#pills-activities-tab').click(function() {
      $("#console-img-island").css('display','none')
      $("#console-img-activities").css('display','block')
      $("#console-img-movie").css('display','none')
      $("#console-img-hotel").css('display','none')
      $("#console-img-dining").css('display','none')
    });

    //dinosaur text
    $('.dino-switch').click(function() {
        // alert('ckick')
        if ($('#dino-1').hasClass("swiper-slide-active")) {
            $('#dino_1').css("display",'flex')
            $('#dino_2').css("display",'none')
            $('#dino_3').css("display",'none')

        } else if ($('#dino-2').hasClass("swiper-slide-active")) {
          $('#dino_1').css("display",'none')
          $('#dino_2').css("display",'flex')
          $('#dino_3').css("display",'none')


        } else if ($('#dino-3').hasClass("swiper-slide-active")){
          $('#dino_1').css("display",'none')
          $('#dino_2').css("display",'none')
          $('#dino_3').css("display",'flex')

        }


    })

    // $('a[href*="#"]')
    //     // Remove links that don't actually link to anything
    //     .not('[href="#"]')
    //     .not('[href="#0"]')
    //     .click(function(event) {
    //         // On-page links
    //         if (
    //             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    //             location.hostname == this.hostname
    //         ) {
    //             // Figure out element to scroll to
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             // Does a scroll target exist?
    //             if (target.length) {
    //                 // Only prevent default if animation is actually gonna happen
    //                 event.preventDefault();
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, function() {
    //                     // Callback after animation
    //                     // Must change focus!
    //                     var $target = $(target);
    //                     $target.focus();
    //                     if ($target.is(":focus")) { // Checking if the target was focused
    //                         return false;
    //                     } else {
    //                         $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
    //                         $target.focus(); // Set focus again
    //                     };
    //                 });
    //             }
    //         }
    //    });



});
