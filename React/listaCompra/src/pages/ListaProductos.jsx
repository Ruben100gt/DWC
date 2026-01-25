import React from 'react';
import './ListaProductos.css';

const ListaProductos = () => {
	return (
		<div className="contenedor-principal">
			<section className="seccion-listado">
				<div className="caja-acciones">Acciones sobre listado.</div>
				<h3>Listado de productos.</h3>

				<div className="producto-item">Producto 1.</div>
				<div className="producto-item">Producto 2.</div>
				<div className="producto-item">Producto n...</div>
			</section>

			<section className="seccion-detalles">
				<h3>Detalles y formularios.</h3>
			</section>
		</div>
	);
};

export default ListaProductos;
