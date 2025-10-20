"use strict";

const cambiarColor = () => {
	const rgbR = Math.floor(Math.random() * 256);
	const rgbG = Math.floor(Math.random() * 256);
	const rgbB = Math.floor(Math.random() * 256);
	const numParrafo = Math.floor(Math.random() * 5) + 1;
	const parrafo = document.getElementById(`p${numParrafo}`);
	parrafo.style.color = `rgb(${255}, ${255}, ${255})`;
	parrafo.style.backgroundColor = `rgb(${rgbR}, ${rgbG}, ${rgbB})`;
};

setInterval(cambiarColor, 1000);
