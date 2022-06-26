const down = document.querySelector('.down-button');
const up = document.querySelector('.up-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');

mainSlide.style.transform = 'translateY(-300vh)';

let currentSlide = 0;

down.addEventListener('click', () => {
  changeSlide('down');
});

up.addEventListener('click', () => {
  changeSlide('up');
});

function changeSlide(direction) {
  if (direction === 'down') {
    currentSlide--;
    if (currentSlide === -1) {
      currentSlide = 3;
    }
  }

  if (direction === 'up') {
    currentSlide++;
    if (currentSlide === 4) {
      currentSlide = 0;
    }
  }
  mainSlide.style.transform = `translateY(${-300 + currentSlide * 100}vh)`;
  sidebar.style.transform = `translateY(${currentSlide * -100}vh)`;
}
