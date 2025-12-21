import React, { useContext } from 'react';
import { ContextoPeliculas } from '../context/ProveedorPeliculas.jsx';
import PeliculaDetalle from './PeliculaDetalle.jsx';
import './Peliculas.css';

const Peliculas = () => {
	const { peliculas, seleccionarPelicula } = useContext(ContextoPeliculas);

	return (
		<div className="contenedor">
			<aside className="sidebar">
				<ul>
					{peliculas.map((p) => (
						<li key={p.episode_id} className="item" onClick={() => seleccionarPelicula(p.episode_id)}>
							<h4>{p.title}</h4>
							<p>Id: {p.episode_id}</p>
						</li>
					))}
				</ul>
			</aside>

			<div className="detalle">
				<PeliculaDetalle />
			</div>
		</div>
	);
};

export default Peliculas;
