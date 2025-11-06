'use strict';

//imports
import { generarTabla } from './biblioteca/Ejercicio1.js';
import { seleccionarColor } from './biblioteca/Ejercicio1.js';
import { pintarCelda } from './biblioteca/Ejercicio1.js';
import { reiniciarTabla } from './biblioteca/Ejercicio1.js';
import { colorAleatorio } from '../biblioteca.js';
import { colorSeleccionado } from './biblioteca/Ejercicio1.js';

window.onload = () => {
	const tabla = document.getElementById('tabla');
	const rgb = document.getElementById('rgb');
	let color = 'black';
	colorSeleccionado(color);
	let pintar = false;
	generarTabla();

	rgb.addEventListener('change', () => {
		color = rgb.value;
		colorSeleccionado(color);
	});

	document.getElementById('seleccionar-color').addEventListener(
		'click',
		(evento) => {
			color = seleccionarColor(evento, color);
			colorSeleccionado(color);
		},
		false
	);

	tabla.addEventListener(
		'mousedown',
		(evento) => {
			pintar = true;
			pintarCelda(evento, color);
		},
		false
	);

	tabla.addEventListener(
		'mouseover',
		(evento) => {
			if (pintar) {
				pintarCelda(evento, color);
			}
		},
		false
	);

	document.addEventListener(
		'mouseup',
		() => {
			pintar = false;
		},
		false
	);

	document.getElementById('reiniciar').addEventListener(
		'click',
		() => {
			reiniciarTabla();
		},
		false
	);

	//He hecho esto ya que me ha parecido interesante poder elegir un color aleatorio. :)
	document.getElementById('aleatorio').addEventListener(
		'click',
		() => {
			color = colorAleatorio();
			colorSeleccionado(color);
		},
		false
	);
};
