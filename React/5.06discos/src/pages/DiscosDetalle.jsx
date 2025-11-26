import React from 'react';
import { useParams } from 'react-router-dom';
import './DiscosDetalle.css';

const DiscosDetalle = ({ listaDiscos }) => {
	const { id } = useParams();

	const infoDisco = listaDiscos.find((p) => p.id.toString() === id);

	if (!infoDisco) {
		return (
			<div>
				<h2>Disco no encontrado.</h2>
				<p>No existe un disco con ese ID.</p>
			</div>
		);
	}

	return (
		<>
			<h2>Detalles del Disco</h2>
			<h1>
				<strong>{infoDisco.nombre}</strong>
			</h1>
			<div className="disco-detalle">
				{infoDisco.caratula && <img src={infoDisco.caratula} alt={infoDisco.nombre} />}

				<p>
					<b>Artista:</b> {infoDisco.artista}
				</p>
				<p>
					<b>Año:</b> {infoDisco.anyo}
				</p>
				<p>
					<b>Género:</b> {infoDisco.genero}
				</p>
				<p>
					<b>Localización:</b> {infoDisco.localizacion}
				</p>
				<p>
					<b>Prestado:</b> {infoDisco.prestado ? 'Sí' : 'No'}
				</p>
			</div>
		</>
	);
};

export default DiscosDetalle;
