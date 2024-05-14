$(document).ready(function() {
    // 메뉴 클릭 시 부드러운 스크롤 이동
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 800);
      }
    });
  });