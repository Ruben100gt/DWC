import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';

const Error = () => {
	const navegar = useNavigate();

	return (
		<>
			<div className="error-container">
				<h1>¡Ups! Se ha producido un error. Por favor vuelva a intentarlo o vuelva a inicio.</h1>
				<button onClick={() => navegar('/')}>Volver a inicio</button>
			</div>
		</>
	);
};

export default Error;
