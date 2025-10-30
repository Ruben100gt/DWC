"use strict";

//Ejercicio1

import { calcularIMC } from "./biblioteca/ejercicio1.js";

console.log(calcularIMC(70, 170, 60, 160));

//Ejercicio2

import { puntuacionMedia } from "./biblioteca/ejercicio2.js";
import { mejorMedia } from "./biblioteca/ejercicio2.js";

console.log(
	mejorMedia(
		puntuacionMedia(89, 120, 103),
		puntuacionMedia(116, 94, 123),
		puntuacionMedia(97, 134, 105)
	)
);

//Ejercicio3
