'use strict';

//imports
import { remplazarContenido } from './biblioteca/Ejercicio1.js';
import { crearTabla, numeroPrimo } from './biblioteca/Ejercicio2.js';
import { imagenes } from './biblioteca/Ejercicio4.js';

setTimeout(() => {
	remplazarContenido();
}, 1000);

crearTabla();
setTimeout(() => {
	numeroPrimo();
}, 1000);

let todasLasImagenes = [
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LYI5RZWa7OxwS0sibZUeVM6PtxllrRolIg&s',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0gAId9buMttn-AQBe0blrxVDBRa8WsexTUl_77B0dX-w6IQFhGUJUj78mtSD4bKNSQ8&usqp=CAU',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMQhIqJwcy0s-LOjpgxPFKA3bnBU0RIjE8zUDuu1L-TLtuKe8QESslUreTl6P6b4xzHQ&usqp=CAU',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5xGRoX6PofPsSRDo4r16_1xOAHq_0ZsS5CERvsx5Vmw3a4IL_HJEDvksyWonpukt4EHs&usqp=CAU',
];

imagenes(todasLasImagenes);
setInterval(() => {
	imagenes(todasLasImagenes);
}, 2000);
