'use strict'

$(function () {

  $('a[href^="#"]').click(function () {
    var speed = 1200;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var header = $('header').height();
    var position = target.offset().top - header;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const consept = document.getElementById('consept');
  const commit = document.getElementById('commit');
  const menu = document.getElementById('menu-page');
  const news = document.getElementById('news-page');
  const reserve = document.getElementById('reserve-page');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  consept.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  commit.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  menu.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  news.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  reserve.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });


  $(function () {
    $('#sk').pickadate();
    $('#time').pickatime()
  });

})
