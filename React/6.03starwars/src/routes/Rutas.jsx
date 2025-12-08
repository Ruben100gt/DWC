import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import Peliculas from '../pages/Peliculas.jsx';
import Error from '../estructura/Error.jsx';

const Rutas = () => {
	return (
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="/peliculas" element={<Peliculas />} />
			<Route path="/*" element={<Error />} />
		</Routes>
	);
};

export default Rutas;
