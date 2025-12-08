import React, { useEffect, useState } from 'react';
import { traerPeliculas } from '../libraries/starwars.js';
import PeliculaDetalle from './PeliculaDetalle.jsx';
import './Peliculas.css';

const Peliculas = () => {
	const [peliculas, setPeliculas] = useState([]);
	const [seleccionada, setSeleccionada] = useState(null);

	useEffect(() => {
		const cargar = async () => {
			const datos = await traerPeliculas('https://swapi.dev/api/films/');
			setPeliculas(datos);
		};

		cargar();
	}, []);

	const seleccionar = (id) => {
		const peli = peliculas.find((p) => p.episode_id === id);
		setSeleccionada(peli);
	};

	return (
		<div className="contenedor">
			<aside className="sidebar">
				<ul>
					{peliculas.map((p) => (
						<li key={p.episode_id} className="item" onClick={() => seleccionar(p.episode_id)}>
							<h4>{p.title}</h4>
							<p>Id: {p.episode_id}</p>
						</li>
					))}
				</ul>
			</aside>

			<div className="detalle">
				<PeliculaDetalle pelicula={seleccionada} />
			</div>
		</div>
	);
};

export default Peliculas;
