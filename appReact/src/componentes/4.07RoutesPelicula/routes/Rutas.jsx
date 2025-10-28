import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import AcercaDe from '../pages/AcercaDe';
import Peliculas from '../pages/Peliculas';
import Interpretes from '../pages/Interpretes';
import Galeria from '../pages/Galeria';
import PeliculaDetalle from '../pages/PeliculaDetalle';
import Error from '../estructura/Error';
import GaleriaFiltro from '../pages/GaleriaFiltro';

const Rutas = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/peliculas" element={<Peliculas />} />
				<Route path="/peliculas/:id" element={<PeliculaDetalle />} />
				<Route path="/interpretes" element={<Interpretes />} />
				<Route path="/galeria" element={<Galeria />}>
					<Route path="/galeria/titulo" element={<GaleriaFiltro texto="titulo" />} />
					<Route path="/galeria/interprete" element={<GaleriaFiltro texto="interprete" />} />
					<Route path="/galeria/director" element={<GaleriaFiltro texto="director" />} />
				</Route>
				<Route path="/acerca-de" element={<AcercaDe />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default Rutas;
