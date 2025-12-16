import React, { useEffect, useState } from 'react';
import { traerPersonajes } from '../libraries/starwars.js';
import PersonajeDetalle from './PersonajeDetalle.jsx';
import './PeliculaDetalle.css';

const PeliculaDetalle = ({ pelicula }) => {
	const [personajes, setPersonajes] = useState([]);
	const [seleccionado, setSeleccionado] = useState(null);

	useEffect(() => {
		if (!pelicula) return;

		const cargarPers = async () => {
			const datos = await traerPersonajes(pelicula.characters);
			setPersonajes(datos);
			setSeleccionado(null);
		};

		cargarPers();
	}, [pelicula]);

	if (!pelicula) return <p className="mensaje">Selecciona una película.</p>;

	const formatearFecha = (fecha) => {
		const partes = fecha.split('-');
		return `${partes[2]}/${partes[1]}/${partes[0]}`;
	};

	return (
		<div className="infoPeli">
			<h2>{pelicula.title}</h2>

			<p>
				<strong>Director:</strong> {pelicula.director}
			</p>
			<p>
				<strong>Productor:</strong> {pelicula.producer}
			</p>
			<p>
				<strong>Fecha lanzamiento:</strong> {formatearFecha(pelicula.release_date)}
			</p>

			<p className="sinopsis">{pelicula.opening_crawl}</p>

			<h3>Protagonistas</h3>

			<ul className="lista-personajes">
				{personajes.map((p) => (
					<li key={p.url} onClick={() => setSeleccionado(p)} className="nombre-pers">
						{p.name}
					</li>
				))}
			</ul>

			<PersonajeDetalle personaje={seleccionado} />
		</div>
	);
};

export default PeliculaDetalle;
