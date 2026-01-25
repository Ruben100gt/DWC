import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import Inicio from '../pages/Inicio.jsx';
import Login from '../pages/Login.jsx';
import Registro from '../pages/Registro.jsx';
import ListaCompra from '../pages/ListaCompra.jsx';
import ListaProductos from '../pages/ListaProductos.jsx';

const Rutas = () => {
	const { sesionIniciada } = useContext(contextoSesion);

	return (
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="/login" element={<Login />} />
			<Route path="/registro" element={<Registro />} />
			<Route path="/listacompra" element={sesionIniciada ? <ListaCompra /> : <Navigate to="/login" />} />
			<Route path="/productos" element={sesionIniciada ? <ListaProductos /> : <Navigate to="/login" />} />
		</Routes>
	);
};

export default Rutas;
