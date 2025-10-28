import React from 'react';
import { useParams } from 'react-router-dom';
import peliculas from '../../json/peliculas.json';
import './PeliculaDetalle.css';

const PeliculaDetalle = () => {
	const { id } = useParams();
	//Buscamos la pelicula que queremos mostrar
	const peliFiltrada = peliculas.peliculas.find((p) => p.id === parseInt(id));
	return (
		<>
			<h2>Detalles de la Película</h2>
			<h1>
				<strong>{peliFiltrada.nombre}</strong>
			</h1>
			<div className="pelicula-detalle">
				<img src={peliFiltrada.cartelera} />
				<p>
					<b>Director:</b> {peliFiltrada.director}
				</p>
				<p>
					<b>Clasificación:</b> {peliFiltrada.clasificacion}
				</p>
				<p>
					<b>Recaudación:</b> {peliFiltrada.recaudacion}
				</p>
				<p>
					<b>Nota:</b> {peliFiltrada.nota}
				</p>
				<p>
					<b>Resumen:</b> {peliFiltrada.resumen}
				</p>

				<h3>Actores:</h3>
				<div className="actores">
					{peliFiltrada.actores.map((actor) => (
						<div key={actor.nombre} className="actor">
							<img src={actor.imagen} />
							<h3>{actor.nombre}</h3>
							<p>
								<b>Fecha de nacimiento:</b> {actor.fechaNacimiento}
							</p>
							<p>{actor.biografia}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default PeliculaDetalle;
