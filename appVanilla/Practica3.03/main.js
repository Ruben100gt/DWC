"use strict";

//Ejercicio1

import { creaCurso } from "./bibliotecas/ejercicio1.js";

let curso1 = creaCurso("DAM", 2025, "Desarrollar aplicaciones multimedia.");
let curso2 = creaCurso("DAW", 2025, "Desarrollar aplicaciones web.");
let curso3 = creaCurso("ASIR", 2025);
let curso4 = creaCurso("VideoJuegos", 2025, "Desarrollar videojuegos.");

//Ejercicio2

import { mostrarCurso } from "./bibliotecas/ejercicio2.js";

mostrarCurso(curso1);
mostrarCurso(curso2);
mostrarCurso(curso3);
mostrarCurso(curso4);

//Ejercicio3

import { discente } from "./bibliotecas/ejercicio3.js";

let disc1 = discente(
	1,
	"Juan Alberto",
	"Serrano Aguilar",
	["futbol", "tenis", "videojuegos"],
	7,
	10,
	4
);

console.log(disc1.calcularMedia);
console.log(disc1.imprimirAficiones);
console.log(disc1.imprimirInforme);
