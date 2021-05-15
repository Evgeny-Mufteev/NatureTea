/*Запуск слайдера*/
$('.topslider .topslider__list.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoHeight: true,
    mouseDrag: true,
    nav: false,
    dots: true,
    lazyLoad: true,
    items: 1,
    autoplay: true,
    smartSpeed: 900,
    autoplayTimeout: 5000
  })


  $('.goods .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoHeight: true,
    mouseDrag: true,
    nav:false,
    dots:true,
    lazyLoad: true,
    items:4,
    autoplay: false,
    smartSpeed: 900,
    autoplayTimeout:3000
})

  
  // Наверх
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
  
  // Кукисы
  function checkCookies() {
    let cookieDate = localStorage.getItem('cookieDate');
    let cookieNotification = document.getElementById('cookie_notification');
    if (!cookieNotification) {
      return
    }
    let cookieBtn = cookieNotification.querySelector('.cookie_accept');
  
  
  
    // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
    if (!cookieDate || (+cookieDate + 31536000000) < Date.now()) {
      cookieNotification.classList.add('show');
    }
  
    // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
    cookieBtn.addEventListener('click', function() {
      localStorage.setItem('cookieDate', Date.now());
      cookieNotification.classList.remove('show');
    })
  }
  checkCookies();


// Масска ввода номера телефона.
  $(document).ready(function(){
    $(".phone").inputmask("+7 (999) 999-9999");
  });
