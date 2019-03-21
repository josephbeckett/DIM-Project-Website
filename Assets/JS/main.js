$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar").css("height", "50px");
      $(".navbar").css("background-color", "rgb(0, 0, 0, 0)"); 
      $(".nav-links").css("line-height", "24px")
      $(".logo-text").css("line-height", "24px")
      $(".navbar-logo").css("height", "30px")
      $(".nav-link").css("font-size", "16px")
      $(".nav-link").css("color", "rgba(0, 0, 0, 0.8)")
      $(".logo-text").css("font-size", "16px")
      $(".logo-text").css("content", "THC")
    }

    else {
      $(".navbar").css("height", "75px");
      $(".nav-links").css("line-height", "48px")
      $(".logo-text").css("line-height", "48px")
      $(".navbar-logo").css("height", "50px")
      $(".nav-link").css("font-size", "24px")
      $(".logo-text").css("font-size", "24px")
      $(".navbar").css("background-color", "grey"); 
      $(".nav-link").css("color", "rgba(0, 0, 0, 0.8)")
    }
  })
});




