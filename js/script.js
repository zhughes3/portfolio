$(document).ready(function(){
header = $('.header');
head = $('.head');
navSocials = $('.nav');
  $(document).scroll(function(){
 var top = $(this).scrollTop();

    if(top>5)
    {
     header.addClass('headerActive');
     head.addClass('headActive');
     navSocials.addClass('socialActive');
    }


    else{
      header.removeClass('headerActive');
      header.addClass('header');
      head.removeClass('headActive');
      head.addClass('head');
      navSocials.removeClass('socialActive');
      navSocials.addClass('nav');
    }

  });




});
