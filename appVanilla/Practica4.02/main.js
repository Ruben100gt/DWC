"use strict";

//imports
import { remplazarContenido } from "./biblioteca/Ejercicio1.js";
import { crearTabla, numeroPrimo } from "./biblioteca/Ejercicio2.js";
import { imagenes } from "./biblioteca/Ejercicio4.js";

setTimeout(() => {
	remplazarContenido();
}, 1000);

crearTabla();
setTimeout(() => {
	numeroPrimo();
}, 1000);

imagenes();
