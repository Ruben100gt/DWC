import React from 'react';
import Peliculas from '../../json/peliculas.json';
import { Link } from 'react-router-dom';

const Peliculas = () => {
	return (
		<>
			<h2>Listado de Películas:</h2>
			<div className="peliculas">
				{Peliculas.peliculas.map((peli) => (
					<div className="peli">
						<img src={peli.cartelera} />
						<h3>{peli.nombre}</h3>
						<p>
							<b>Director:</b> {peli.director}
						</p>
						<p>
							<b>Clasificación:</b> {peli.clasificacion}
						</p>
						<p>
							<b>Nota:</b> {peli.nota}
						</p>
						<Link to={`/peliculas/${peli.id}`} className="detallePeli">
							Ver Detalle
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default Peliculas;
