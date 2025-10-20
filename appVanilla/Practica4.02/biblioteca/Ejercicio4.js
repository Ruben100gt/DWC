'use strict';

//Creamos la variable numero de imagen fuera para que en la recursividad no vuelva el número a 0.
let numImagen = 0;

const imagenes = (imagenesTotales) => {
	document.body.insertAdjacentHTML('beforeend', '<div><img></div>');
	const imagen = document.getElementsByTagName('img')[0];
	imagen.src = imagenesTotales[numImagen];
	if (numImagen < imagenesTotales.length - 1) {
		numImagen++;
	} else {
		numImagen = 0;
	}
};

export { imagenes };
