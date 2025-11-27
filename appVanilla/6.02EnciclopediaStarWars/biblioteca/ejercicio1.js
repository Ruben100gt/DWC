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
	let plantilla = "";
	Array.isArray(peliculas) && peliculas.length
		? peliculas.map((peli) => {
				plantilla += `<li class="pelicula"><p class="id">${peli.episode_id}</p><h2 class="titulo">${peli.tittle}</h2></li>`;
		  })
		: (plantilla = "<h3>No se han encontrado películas.</h3>");

	return plantilla;
};

const dibujarPeliculaDetalle = (peliculas, id) => {
	let plantilla = "";
	let pelicula = {};
	let haypelicula = false;
	let fecha = "";
	for (let i = 0; i < peliculas.length; i++) {
		pelicula = peliculas.episode_id === id;
		haypelicula = true;
	}
	if (haypelicula) {
		fecha = parseInt(pelicula.release_date)
			? parseInt(formatearFecha(pelicula.release_date))
			: "Fecha desconocida.";
		plantilla += `<div class="tituloPeli"><h2>${pelicula.tittle}</h2><p class="datosPeli">Director: ${pelicula.director}<br/>Productor: ${pelicula.producer}<br/>Fecha de lanzamiento: ${fecha}</p></div>`;
	} else {
		plantilla = "<h3>No se han encontrado películas.</h3>";
	}

	return plantilla;
};

export { traerPeliculas, dibujarPeliculas, dibujarPeliculaDetalle };
