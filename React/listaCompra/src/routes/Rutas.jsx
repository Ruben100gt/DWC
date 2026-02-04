import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import Inicio from '../pages/Inicio.jsx';
import Login from '../pages/Login.jsx';
import Registro from '../pages/Registro.jsx';
import ListaCompra from '../pages/ListaCompra.jsx';
import ListaProductos from '../pages/ListaProductos.jsx';
import FormularioProducto from '../pages/FormularioProducto.jsx';
import Error from '../estructura/Error.jsx';

const Rutas = () => {
	const { sesionIniciada } = useContext(contextoSesion);

	return (
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="/login" element={<Login />} />
			<Route path="/registro" element={<Registro />} />
			<Route path="/listacompra" element={<ListaCompra />} />
			<Route path="/productos" element={<ListaProductos />} />

			{/* Si no hay ha iniciado sesión, vamos al login. */}
			<Route path="/productos/crear" element={sesionIniciada ? <FormularioProducto /> : <Navigate to="/login" />} />
			<Route
				path="/productos/editar/:id"
				element={sesionIniciada ? <FormularioProducto /> : <Navigate to="/login" />}
			/>

			<Route path="/*" element={<Error />} />
		</Routes>
	);
};

export default Rutas;
