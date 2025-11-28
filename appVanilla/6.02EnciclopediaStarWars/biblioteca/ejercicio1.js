"use strict";
import { formatearFecha } from "../../biblioteca.js";

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
	let plantilla = `<h4 class="mensaje">Al pulsar cualquier película exime la responsibilidad de los vídeos al creador de la práctica.</h4>`;
	Array.isArray(peliculas) && peliculas.length
		? peliculas.map((peli) => {
				plantilla += `<li class="pelicula"><h3 id=${peli.episode_id} class="titulo">${peli.title}</h3><h4 class="id">Peli: ${peli.episode_id}</h4></li>`;
		  })
		: (plantilla = "<h3>No se han encontrado películas.</h3>");

	return plantilla;
};

const dibujarPeliculaDetalle = (peliculas, id) => {
	let plantilla = "";
	const idPeli = parseInt(id);
	const pelicula = peliculas.filter((p) => p.episode_id === idPeli)[0];
	if (pelicula.length === 0) {
		return "<h3>No se ha encontrado la película con ese id.</h3>";
	}

	const fecha = pelicula.release_date
		? formatearFecha(pelicula.release_date)
		: "Fecha desconocida.";

	plantilla += `<div class="infoPeli"><h2>${pelicula.title}</h2><cite class="datosPeli"><strong>- Director:</strong> ${pelicula.director}<br/><strong>- Productor:</strong> ${pelicula.producer}<br/><strong>- Fecha de lanzamiento:</strong> ${fecha}<br/><strong>- Sinopsis:</strong> ${pelicula.opening_crawl}</cite></div>`;
	return plantilla;
};

export { traerPeliculas, dibujarPeliculas, dibujarPeliculaDetalle };
