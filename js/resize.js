
$(document).ready(function(){

  $('.grid-item').height($('.grid').width()/3);
  $('.s').height($('.grid-item').height()*0.501);
  $('.kube-s').height($('.grid-item').height()*0.93);
  $('.xs').height($('.grid-item').height()*0.6);
  $('.small').height($('.grid-item').height()*0.78);
  $('.logo-img').height($('.grid').width()/7.31);
  $(window).resize(function(){
    $('.grid-item').height($('.grid').width()/3);
  });

  $(window).resize(function(){
    $('.s').height($('.grid-item').height()*0.501);
  });

  $(window).resize(function(){
    $('.kube-s').height($('.grid-item').height()*0.93);
  });

  $(window).resize(function(){
    $('.xs').height($('.grid-item').height()*0.6);
  });

  $(window).resize(function(){
    $('.small').height($('.grid-item').height()*0.78);
  });

  $(window).resize(function(){
    $('.logo-img').height($('.grid').width()/7.31);
  });

});
