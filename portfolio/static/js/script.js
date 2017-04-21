$(function() {
  var header = $('.header');
  var head = $('.head');
  var navSocials = $('.nav');

  $(document).scroll(function(){

    var top = $(this).scrollTop();

      if(top>5) {
        header.addClass('headerActive');
        head.addClass('headActive');
        navSocials.addClass('socialActive');
      } else {
        header.removeClass('headerActive');
        header.addClass('header');
        head.removeClass('headActive');
        head.addClass('head');
        navSocials.removeClass('socialActive');
        navSocials.addClass('nav');
      }

    });

    //you want to add this tagline once the user scrolls down
    function createTagline(text) {
      var span = $("span#tagline");
      span.append(text);
      span.css("font-family: Courier, monospace; font-size: 100%;");
    };

});
