'use strict';

$(function() {

 $('.slider_picture')
  .jcarousel({
    animation: 'slow',
    wrap: 'circular'
  })

  .jcarouselAutoscroll({
    interval: 3000,
    target: '+=1',
    autostart: true
  });

  $('.slider_nav')
  .jcarouselPagination({
    item: function(page) {
      return '<a class = "slider_page" href="#"></a>';
    }
  })

  .on('jcarouselpagination:active', 'a', function() {
    $(this).addClass('active');
  })

  .on('jcarouselpagination:inactive', 'a', function() {
    $(this).removeClass('active');
  });


$('#first-banner-content').show();

$('#first-banner-title').on('click',function(){
    $('.banner__content').hide();
    $('.banner__title__minus').hide();
    $('.banner__title__plus').show();
    $('.banner__title').css({'color': '#2a2d32', 'background-color': 'white', 'border-color': '#e8e8e8'})
    $('#first-banner-title').css({'color': 'white', 'background-color': 'orange', 'border-color': 'white'});
    $('#first-banner-title .banner__title__minus').show();
    $('#first-banner-title .banner__title__plus').hide();
    $('#first-banner-content').show(500);
  });

$('#second-banner-title').on('click',function(){
    $('.banner__content').hide();
    $('.banner__title__minus').hide();
    $('.banner__title__plus').show();
    $('.banner__title').css({'color': '#2a2d32', 'background-color': 'white', 'border-color': '#e8e8e8'})
    $('#second-banner-title').css({'color': 'white', 'background-color': 'orange', 'border-color': 'white'});
    $('#second-banner-title .banner__title__minus').show();
    $('#second-banner-title .banner__title__plus').hide();
    $('#second-banner-content').show(500);
  });

$('#third-banner-title').on('click',function(){
    $('.banner__content').hide();
    $('.banner__title__minus').hide();
    $('.banner__title__plus').show();
    $('.banner__title').css({'color': '#2a2d32', 'background-color': 'white', 'border-color': '#e8e8e8'})
    $('#third-banner-title').css({'color': 'white', 'background-color': 'orange', 'border-color': 'white'});
    $('#third-banner-title .banner__title__minus').show();
    $('#third-banner-title .banner__title__plus').hide();
    $('#third-banner-content').show(500);
  });

$('#forth-banner-title').on('click',function(){
    $('.banner__content').hide();
    $('.banner__title__minus').hide();
    $('.banner__title__plus').show();
    $('.banner__title').css({'color': '#2a2d32', 'background-color': 'white', 'border-color': '#e8e8e8'})
    $('#forth-banner-title').css({'color': 'white', 'background-color': 'orange', 'border-color': 'white'});
    $('#forth-banner-title .banner__title__minus').show();
    $('#forth-banner-title .banner__title__plus').hide();
    $('#forth-banner-content').show(500).css();
  });
});