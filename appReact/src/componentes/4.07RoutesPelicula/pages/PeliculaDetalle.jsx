import React from 'react';
import { useParams } from 'react-router-dom';

const PeliculaDetalle = () => {
	const { filtro } = useParams();

	return (
		<>
			<h2>Aquí se mostrarían las películas filtradas por {filtro}.</h2>
		</>
	);
};

export default PeliculaDetalle;
