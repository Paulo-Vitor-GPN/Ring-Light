const background = document.querySelector('.background');

const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
  menuItems.classList.toggle('active');
});


function toggleRingLight() {
  background.style.opacity = 1 - background.style.opacity;
  if (background.style.opacity == 1) {
    background.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
  } else {
    background.style.backgroundColor = '#f5f5f5';
  }
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  return `#${red}${green}${blue}`;
}

function changeColors() {
  const currentColor = getRandomColor();
  background.style.transition = 'background-color 1s ease-in-out';
  background.style.backgroundColor = currentColor;
  setTimeout(changeColors, 1500);
}

setTimeout(changeColors, 1500);

const powerBtn = document.querySelector('.power-btn');
powerBtn.addEventListener('click', toggleRingLight);
