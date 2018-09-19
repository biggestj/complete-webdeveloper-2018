const css = document.querySelector('h3');
const color1 = document.querySelector('#color-1');
const color2 = document.querySelector('#color-2');
const body = document.querySelector('body');

const changeBackgroundColour = () => {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ';';
}

color1.addEventListener("input", changeBackgroundColour);
color2.addEventListener("input", changeBackgroundColour);

document.addEventListener("DOMContentLoaded", () => {
	
	css.textContent = body.textContent.background + ';';
});