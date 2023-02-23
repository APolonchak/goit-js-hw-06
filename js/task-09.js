const bodyEl = document.querySelector('body');
const colorCode = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  colorCode.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
