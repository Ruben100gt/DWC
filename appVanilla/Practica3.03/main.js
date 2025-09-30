'use strict';

//Ejercicio1
console.log('Ejercicio 1');

import { creaCurso } from './bibliotecas/ejercicio1y4.js';

let curso1 = creaCurso('DAM', 2025, 'Desarrollar aplicaciones multimedia.');
let curso2 = creaCurso('DAW', 2025, 'Desarrollar aplicaciones web.');
let curso3 = creaCurso('ASIR', 2025);
let curso4 = creaCurso('VideoJuegos', 2025, 'Desarrollar videojuegos.');

//Ejercicio2
console.log('Ejercicio 2');

import { mostrarCurso } from './bibliotecas/ejercicio2.js';

mostrarCurso(curso1);
mostrarCurso(curso2);
mostrarCurso(curso3);
mostrarCurso(curso4);

// en el 2 no devolver Object, devolver array / function (unque no haya funcion)

//Ejercicio3
console.log('Ejercicio 3');

import { discente } from './bibliotecas/ejercicio3.js';

let disc1 = discente(1, 'Juan Alberto', 'Serrano Aguilar', ['futbol', 'tenis', 'videojuegos'], {
	primera: 7,
	segunda: 2,
	tercera: 9,
});
let disc2 = discente(2, 'Jose María', 'Gómez Sanchez', ['padel', 'ping pong'], {
	primera: 3,
	segunda: 7,
	tercera: 5,
});

console.log(disc1.calcularMedia());
disc1.imprimirAficiones();
disc1.imprimirInforme();
console.log(disc2.calcularMedia());
disc2.imprimirAficiones();
disc2.imprimirInforme();

//Ejercicio 4
console.log('Ejercicio 4');

//No importamos ya que está dentro del ejercicio1

curso1.matricular(disc1);
curso2.matricular(disc2);

//Ejercicio 5
console.log('Ejercicio 5');

import { imprimirObjeto } from './bibliotecas/ejercicio5.js';

//No encuentro la manera de poder imprimir bien el array
imprimirObjeto(curso1);
imprimirObjeto(curso2);
