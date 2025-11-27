"use strict";

//imports
import {
	traerPeliculas,
	dibujarPeliculas,
	dibujarPeliculaDetalle,
} from "./biblioteca/ejercicio1.js";

window.onload = () => {
	const peliculas = document.getElementById("peliculas");
	const informacion = document.getElementById("informacion");
	const url = "https://swapi.dev/api/films/";

	const pintarPeliculas = async () => {
		const pelis = await traerPeliculas(url);
		peliculas.innerHTML = dibujarPeliculas(pelis);
	};

	//Pintamos los planetas nada más cargar la página
	pintarPeliculas();

	peliculas.addEventListener("click", (evento) => {
		if (evento.target.classList("titulo")) {
			let id = evento.target.episode_id;
			informacion.innerHTML(dibujarPeliculaDetalle(id));
		}
	}),
		false;
};
