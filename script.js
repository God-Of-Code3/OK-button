const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);


const btn = $('.ok-btn button');
const modal = $('.ok-modal');
const btnClose = $('.btn-close');

btn.onclick = () => modal.classList.add('active');
btnClose.onclick = () => modal.classList.remove('active');