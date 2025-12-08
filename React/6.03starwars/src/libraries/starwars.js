'use strict';

const traerPeliculas = async (url) => {
	const respuesta = await fetch(url);
	const datos = await respuesta.json();
	return datos.results;
};

const traerPersonajes = async (urls) => {
	const primerasDiez = urls.slice(0, 10);

	const peticiones = primerasDiez.map((url) => {
		return fetch(url).then((r) => r.json());
	});

	return Promise.all(peticiones);
};

export { traerPeliculas, traerPersonajes };
