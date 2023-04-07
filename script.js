$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scroll-to-top').addClass('show');
    } else {
      $('#scroll-to-top').removeClass('show');
    }
  });
  $('#scroll-to-top').click(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});
