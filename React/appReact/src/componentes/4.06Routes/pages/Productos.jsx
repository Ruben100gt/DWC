import React from 'react';
import { useNavigate } from 'react-router-dom';
import listadoProductos from './productos.json';

const Productos = () => {
	const navegar = useNavigate();

	return (
		<>
			<h3>Listado de productos</h3>
			<div className="listadoProductos-listado">
				{listadoProductos.productos.length
					? listadoProductos.productos.map((elemento) => {
							return <p key={crypto.randomUUID()}>{elemento.nombre}</p>;
					  })
					: 'No se ha encontrado ningún producto.'}
			</div>
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

export default Productos;
