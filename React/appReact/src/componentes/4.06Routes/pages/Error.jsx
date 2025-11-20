import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
	const navegar = useNavigate();

	return (
		<>
			<h1>¡Ups! Se ha producido un error. Por favor vuelva a intentarlo o vuelva a inicio.</h1>
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

export default Error;
