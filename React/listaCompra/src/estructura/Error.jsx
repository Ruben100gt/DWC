import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';

const Error = () => {
	const navegar = useNavigate();

	return (
		<div className="error-container">
			<div className="error-card">
				<div className="error-codigo">404</div>
				<h1>¡Vaya! Algo salió mal.</h1>
				<p>La página que buscas no existe o se ha producido un error inesperado. Por favor, vuelve al inicio.</p>
				<button className="btn-volver" onClick={() => navegar('/')}>
					Volver a Inicio
				</button>
			</div>
		</div>
	);
};

export default Error;
