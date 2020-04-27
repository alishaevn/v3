'use strict';

const height = window.innerHeight;
const width = window.innerWidth;

const divider = document.querySelector('.divider');
const home = document.querySelector('#home');

divider.style.setProperty('--element-width', width);
home.style.setProperty('--element-height', height);