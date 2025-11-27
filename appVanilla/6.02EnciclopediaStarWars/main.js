'use strict';

//imports
import { traerPeliculas, dibujarPeliculas, dibujarPeliculaDetalle } from './biblioteca/ejercicio1.js';

window.onload = () => {
	const peliculas = document.getElementById('peliculas');
	const informacion = document.getElementById('informacion');
	const url = 'https://swapi.dev/api/films/';
	let pelis = [];

	const pintarPeliculas = async () => {
		pelis = await traerPeliculas(url);
		peliculas.innerHTML = dibujarPeliculas(pelis);
	};

	//Pintamos los planetas nada más cargar la página
	pintarPeliculas();

	peliculas.addEventListener('click', (evento) => {
		if (evento.target.classList.contains('titulo')) {
			const id = evento.target.id;
			informacion.innerHTML = dibujarPeliculaDetalle(pelis, id);
		}
	}),
		false;
};
