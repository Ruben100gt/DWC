'use strict';
import { formatearFecha } from '../../biblioteca.js';

//Traer datos
const traerPeliculas = (url) => {
	return fetch(url)
		.then((respuesta) => {
			return respuesta.json();
		})
		.then((datos) => {
			return datos.results;
		})
		.catch((error) => {
			return `Se ha producido un error: ${error.message}`;
		});
};

//Dibujar datos

const dibujarPeliculas = (peliculas) => {
	let plantilla = '';
	Array.isArray(peliculas) && peliculas.length
		? peliculas.map((peli) => {
				plantilla += `<li class="pelicula"><p class="id">${peli.episode_id}</p><h2 id=${peli.episode_id} class="titulo">${peli.title}</h2></li>`;
		  })
		: (plantilla = '<h3>No se han encontrado películas.</h3>');

	return plantilla;
};

const dibujarPeliculaDetalle = (peliculas, id) => {
	let plantilla = '';
	const idPeli = parseInt(id);
	const pelicula = peliculas.filter((p) => p.episode_id === idPeli)[0];
	if (pelicula.length === 0) {
		return '<h3>No se ha encontrado la película con ese id.</h3>';
	}

	const fecha = pelicula.release_date ? formatearFecha(pelicula.release_date) : 'Fecha desconocida.';

	plantilla += `<div class="tituloPeli"><h2>${pelicula.title}</h2><p class="datosPeli">Director: ${pelicula.director}<br/>Productor: ${pelicula.producer}<br/>Fecha de lanzamiento: ${fecha}</p></div>`;
	return plantilla;
};

export { traerPeliculas, dibujarPeliculas, dibujarPeliculaDetalle };
