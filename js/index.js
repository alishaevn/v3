'use strict';

const height = window.innerHeight;
const width = window.innerWidth;

const divider = document.querySelectorAll('.divider');
const home = document.querySelector('#home');

divider.forEach(item => item.style.setProperty('--element-width', width));
home.style.setProperty('--element-height', height);