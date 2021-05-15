$(document).ready(function() {
    $(".toTop").hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.toTop').fadeIn();
      } else {
        $('.toTop').fadeOut();
      }
    });
    $('.toTop').click(function() {
      $('html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });