import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contacto = () => {
	const navegar = useNavigate();
	return (
		<>
			<h2>Si desea más información puede oontactarnos a través del siguiente correo electrónico:</h2>
			<h3>correoparaignorar@pringao.com</h3>
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

export default Contacto;
