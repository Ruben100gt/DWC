import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import InsertarDiscos from '../pages/InsertarDiscos.jsx';
import Discos from '../pages/Discos.jsx';
import DiscosDetalle from '../pages/DiscosDetalle.jsx';
import Error from '../estructura/Error.jsx';
import EditarDiscos from '../pages/EditarDiscos.jsx';

const Rutas = () => {
	return (
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="/insertardiscos" element={<InsertarDiscos />} />
			<Route path="/discos" element={<Discos />} />
			<Route path="/detalledisco/:id" element={<DiscosDetalle />} />
			<Route path="/editardisco/:id" element={<EditarDiscos />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default Rutas;
