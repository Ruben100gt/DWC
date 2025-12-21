import React, { useContext } from 'react';
import { ContextoPeliculas } from '../context/ProveedorPeliculas.jsx';
import PersonajeDetalle from './PersonajeDetalle.jsx';
import './PeliculaDetalle.css';

const PeliculaDetalle = () => {
	const { peliculaSeleccionada, personajes, personajeSeleccionado, setPersonajeSeleccionado } =
		useContext(ContextoPeliculas);

	if (!peliculaSeleccionada) return <p className="mensaje">Selecciona una película.</p>;

	const formatearFecha = (fecha) => {
		const partes = fecha.split('-');
		return `${partes[2]}/${partes[1]}/${partes[0]}`;
	};

	return (
		<div className="infoPeli">
			<h2>{peliculaSeleccionada.title}</h2>

			<p>
				<strong>Director:</strong> {peliculaSeleccionada.director}
			</p>
			<p>
				<strong>Productor:</strong> {peliculaSeleccionada.producer}
			</p>
			<p>
				<strong>Fecha lanzamiento:</strong> {formatearFecha(peliculaSeleccionada.release_date)}
			</p>

			<p className="sinopsis">{peliculaSeleccionada.opening_crawl}</p>

			<h3>Protagonistas</h3>

			<ul className="lista-personajes">
				{personajes.map((p) => (
					<li key={crypto.randomUUID()} onClick={() => setPersonajeSeleccionado(p)} className="nombre-pers">
						{p.name}
					</li>
				))}
			</ul>

			<PersonajeDetalle personaje={personajeSeleccionado} />
		</div>
	);
};

export default PeliculaDetalle;
