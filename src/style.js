const down = document.querySelector('.down-button');
const up = document.querySelector('.up-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');

down.addEventListener('click', () => {
  changeSlide('down');
});

up.addEventListener('click', () => {
  changeSlide('up');
});
