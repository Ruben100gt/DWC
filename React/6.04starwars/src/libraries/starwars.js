'use strict';

const traerPeliculas = async (url) => {
	try {
		const respuesta = await fetch(url);
		if (respuesta.ok) {
			const datos = await respuesta.json();
			return datos.results;
		} else {
			throw new Error('No se han podido traer las películas.');
		}
	} catch (error) {
		throw error;
	}
};

const traerPersonajes = async (urls) => {
	try {
		const primerasDiez = urls.slice(0, 10);
		const peticiones = primerasDiez.map(async (url) => {
			const respuesta = await fetch(url);
			if (respuesta.ok) {
				return respuesta.json();
			} else {
				throw new Error(`No se pudo traer el personaje en ${url}`);
			}
		});
		return await Promise.all(peticiones);
	} catch (error) {
		throw error;
	}
};

const traerDatos = async (urls) => {
	try {
		const peticiones = urls.map(async (url) => {
			const respuesta = await fetch(url);
			if (respuesta.ok) {
				return respuesta.json();
			} else {
				throw new Error(`No se pudo traer los datos en ${url}`);
			}
		});
		return await Promise.all(peticiones);
	} catch (error) {
		throw error;
	}
};

export { traerPeliculas, traerPersonajes, traerDatos };
