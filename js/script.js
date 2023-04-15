const background = document.querySelector('.background');

function toggleRingLight() {
  background.style.opacity = 1 - background.style.opacity;
  if (background.style.opacity == 1) {
    background.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
  } else {
    background.style.backgroundColor = '#f5f5f5';
  }
}

let count = 0;
let colors = [  'rgba(255, 0, 0, 0.5)',  'rgba(0, 255, 0, 0.5)',  'rgba(0, 0, 255, 0.5)',  'rgba(255, 255, 0, 0.5)',  'rgba(255, 0, 255, 0.5)',  'rgba(0, 255, 255, 0.5)',  'rgba(255, 128, 0, 0.5)',  'rgba(128, 0, 255, 0.5)',];

function changeColor() {
  const currentColor = colors[count];
  background.style.transition = 'background-color 1s ease-in-out';
  background.style.backgroundColor = currentColor;
  count++;
  if (count == colors.length) {
    count = 0;
  }
  setTimeout(changeColor, 1500);
}

setTimeout(changeColor, 1500);

const powerBtn = document.querySelector('.power-btn');
powerBtn.addEventListener('click', toggleRingLight);
