'use strict';

/**
 * RESPONSIVE MENU
 */

const btnToggle = document.getElementById('btn-toggle');
const menu = document.getElementById('menu');

btnToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnToggle.classList.toggle('active');
});

/**
 * FIXED MENU
 */

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('fixed', window.scrollY > 80);
});
