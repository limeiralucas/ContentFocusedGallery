'use strict';

let activeEl = null;

document.getElementById('backdrop').addEventListener('click', (e) => {
  e.target.style = '';
  activeEl.classList.remove('photo-grid__photo--activated');
  activeEl = null;
});

const elements = document.getElementsByClassName('photo-grid__photo');
Array.from(elements).forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!e.target.classList.contains('photo-grid__photo--activated')) {
      document.getElementById('backdrop').style = 'display: block;';
      e.target.classList.add('photo-grid__photo--activated');
      activeEl = e.target;
    }
  });
});
