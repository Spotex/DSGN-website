$(function (){ 
    $('.list a:nth-child(#)').onmouseover(function(){
       var html = $('.list a:nth-child(#)').text();
       alert(html);
    });
});