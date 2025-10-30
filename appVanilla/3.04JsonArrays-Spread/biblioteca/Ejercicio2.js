'use strict';

const crearArrayAleatorio = () => {
	//Creamos el array
	let array = [];
	for (let i = 0; i < 10; i++) {
		// Generamos un número entre 1 y 10
		array = [...array, Math.floor(Math.random() * 10 + 1)];
	}
	return array;
};

export { crearArrayAleatorio };
