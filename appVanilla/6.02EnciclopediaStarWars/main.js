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
	const contInf = document.getElementById("contenedorInformacion");
	const url = "https://swapi.dev/api/films/";
	let pelis = [];
	const fotoPeli = document.getElementById("fotoPeli");
	const video = document.getElementById("fondoVideo");
	video.classList.remove("ocultar");
	video.src = `./assets/espacio.mp4`;

	const pintarPeliculas = async () => {
		pelis = await traerPeliculas(url);
		peliculas.innerHTML = dibujarPeliculas(pelis);
	};

	//Pintamos los planetas nada más cargar la página
	pintarPeliculas();

	peliculas.addEventListener("click", (evento) => {
		if (evento.target.classList.contains("titulo")) {
			const id = evento.target.id;
			fotoPeli.classList.add("ocultar");
			video.classList.remove("ocultar");
			contInf.classList.add("ocultar");
			video.src = `./assets/transicion.mp4`;
			informacion.classList.add("ocultarTexto");
			informacion.offsetHeight;

			setTimeout(() => {
				video.classList.add("ocultar");
				fotoPeli.classList.remove("ocultar");
				fotoPeli.src = `./assets/peli${id}.png`;
				informacion.classList.remove("ocultarTexto");
				contInf.classList.remove("ocultar");
				informacion.innerHTML = dibujarPeliculaDetalle(pelis, id);
			}, 4000);
		}
	}),
		false;
};
