import React from 'react';
import './PersonajeDetalle.css';

const PersonajeDetalle = ({ personaje }) => {
	if (!personaje) return null;

	return (
		<div className="ficha">
			<h4>{personaje.name}</h4>
			<p>Género: {personaje.gender}</p>
			<p>Altura: {personaje.height} cm</p>
			<p>Peso: {personaje.mass} kg</p>
			<p>Color de pelo: {personaje.hair_color}</p>
			<p>Color de ojos: {personaje.eye_color}</p>
		</div>
	);
};

export default PersonajeDetalle;
