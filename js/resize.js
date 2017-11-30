
$(document).ready(function(){

  $('.grid-item').height($('.grid').width()/3);
  $('.s').height($('.grid-item').height()/2);
  $('.kube-s').height($('.grid').width()/(1500/465));
  $('.xs').height($('.grid').width()/5);
  $('.small').height($('.grid').width()/(1500/390));
  $('.logo-img').height($('.grid').width()/7.31);

  $(window).resize(function(){
    $('.grid-item').height($('.grid').width()/3);
  });

  $(window).resize(function(){
    $('.s').height($('.grid').width()/5.999);
  });

  $(window).resize(function(){
    $('.kube-s').height($('.grid').width()/(1500/465));
  });

  $(window).resize(function(){
    $('.xs').height($('.grid').width()/5);
  });

  $(window).resize(function(){
    $('.small').height($('.grid').width()/(1500/390));
  });

  $(window).resize(function(){
    $('.logo-img').height($('.grid').width()/7.31);
  });

});
