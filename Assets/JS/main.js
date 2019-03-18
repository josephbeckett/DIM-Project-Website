$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar").css("height", "50px");
      $(".nav-links").css("line-height", "24px")
      $(".navbar-logo").css("height", "30px")
      $(".nav-link").css("font-size", "16px")
      $(".nav-link").css("margin-left", "50px")
      $(".nav-link").css("margin-right", "50px")
    }

    else {
      $(".navbar").css("height", "75px");
      $(".nav-links").css("line-height", "48px")
      $(".navbar-logo").css("height", "50px")
      $(".nav-link").css("margin-left", "20px")
      $(".nav-link").css("margin-right", "20px")
      $(".nav-link").css("font-size", "24px")
    }
  })
});




