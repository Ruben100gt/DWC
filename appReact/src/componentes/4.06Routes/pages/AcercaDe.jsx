import React from 'react';
import { useNavigate } from 'react-router-dom';

const AcercaDe = () => {
	const navegar = useNavigate();
	return (
		<>
			<h2>Este es la información de... no me acuerdo.</h2>
			<button
				onClick={() => {
					// Redirigimos al inicio.
					navegar('/');
				}}
			>
				Volver a inicio.
			</button>
		</>
	);
};

export default AcercaDe;
