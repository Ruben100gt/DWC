'use strict';

//Primer ejercicio hecho en el main porque he decidido que no hace falta hacerlo en un js aparte
//Ejercicio 1
let nombres = ['Juan de Dios', 'Alejandra', 'Romualda', 'Pepito', 'Mohamed'];

//Primer apartado
nombres.forEach((art, i, a) => console.log(art.toUpperCase()));

//Segundo apartado
const nombresOrdenadosReves = [...nombres].sort().reverse();
console.log(nombresOrdenadosReves);

//Tercer apartado
const arrayObjetos = nombres.map((art, i, a) => {
	return {
		id: i + 1, // El primero tiene id 1 (aunque no lo indique el enunciado) ya que no me gusta que el primer id sea 0
		nombre: art,
	};
});
//Función para poder imprimir bien formateado el array
const imprimirArray = (array) => {
	let texto = 'Array:\n';
	for (let arr in array) {
		//Comprobamos que tenga valor
		if (array.hasOwnProperty(arr)) {
			//Encadenamos el texto para imprimirlo por consola
			texto += `-El id es: "${array[arr].id}" y el nombre es: ${array[arr].nombre}.\n`;
		}
	}
	console.log(texto);
};

console.log(imprimirArray(arrayObjetos));

//Ejercicio2

import { crearArrayAleatorio } from './biblioteca/Ejercicio2.js';

let array1 = crearArrayAleatorio();
let array2 = crearArrayAleatorio();
let array3 = crearArrayAleatorio();
console.log('Arrays generados aleatoriamente: ');
console.log('Array 1:', array1);
console.log('Array 2:', array2);
console.log('Array 3:', array3);

//También he hecho este apartado aquí en el main porque veo innecesario hacerlo en ejercicio2.js
console.log('Array con los números mayores a 5: ');
const arrayNumerosMayoresCinco = [...array1, ...array2, ...array3].filter((numero) => numero > 5);
//Creamos esta función para poder mostrar mejor y debidamente formateado el array
const imprimirArrayNumerosMayoresCinco = (array) => {
	let texto = '';
	for (let arr in array) {
		//Comprobamos que tenga valor
		if (array.hasOwnProperty(arr)) {
			//Encadenamos el texto para imprimirlo por consola
			texto += `-El id es "${arr}", el número es ${array[arr]} y es del tipo ${typeof array[arr]}.\n`;
		}
	}
	console.log(texto);
};
imprimirArrayNumerosMayoresCinco(arrayNumerosMayoresCinco);

//Ejericio 3
import {
	usuarios,
	insertarUsuario,
	arrayMayoresEdad,
	arrayCorreoYahoo,
	arrayClaroMayoresEspanya,
	arrayFaltaDato,
	arrayConApellidos,
	arrayConCodigo,
} from './biblioteca/Ejercicio3.js';

//Creamos 2 nuevos usuarios para insertarlos
let nuevoUsuario1 = {
	nombre: 'Jose Miguel',
	preferencias: { tema: 'oscuro', idioma: 'aleman', edad: 19 },
	contacto: {
		direccion: { calle: 'Calle Bmw, 999', localidad: 'Berlín', pais: 'Alemania' },
		correoelectronico: 'josemiglebmwe36@gmail.com',
		telefono: '612314151',
	},
};

let nuevoUsuario2 = {
	nombre: 'Juana',
	preferencias: { tema: 'claro', idioma: 'español', edad: 39 },
	contacto: {
		direccion: { calle: 'Calle Jamón, 333', localidad: 'Elda', pais: 'España' },
		correoelectronico: 'juanajamonera22@gmail.com',
		telefono: '',
	},
};
//Insertamos los 2 nuevos usuarios
let nuevoArray = insertarUsuario(usuarios, nuevoUsuario1);
nuevoArray = insertarUsuario(nuevoArray, nuevoUsuario2);

console.log('Array con el nuevo usuario:');
console.log(nuevoArray);
console.log('Array con los usuarios mayores de edad:');
console.log(arrayMayoresEdad(nuevoArray));
console.log('Array con los usuarios cuyos correos son del servidor Yahoo:');
console.log(arrayCorreoYahoo(nuevoArray));
console.log('Array con los usuarios que prefieren el tema claro, son mayores de edad y su país es España:');
console.log(arrayClaroMayoresEspanya(nuevoArray));
console.log('Array con los usuarios que les faltan datos:');
console.log(arrayFaltaDato(nuevoArray));
console.log('Array con los usuarios con Apellidos:');
console.log(arrayConApellidos(nuevoArray));
console.log('Array con los usuarios con código en la dirección:');
console.log(arrayConCodigo(nuevoArray));
