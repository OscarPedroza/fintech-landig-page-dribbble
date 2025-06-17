'use strict';

const btnToggle = document.getElementById('btn-toggle');
const menu = document.getElementById('menu');

btnToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnToggle.classList.toggle('active');
});
