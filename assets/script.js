"use strict";
let line = document.querySelector('.icon-menu');
let links = document.querySelectorAll('.navigation_link');
let menu = document.querySelector('.menu__body');

line.addEventListener('click', function(event) {
  line.classList.toggle('active');  
  menu.classList.toggle('active');
  document.body.classList.toggle('lock');  
});

