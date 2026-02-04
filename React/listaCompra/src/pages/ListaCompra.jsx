import React, { useContext } from 'react';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import './ListaCompra.css';

const ListaCompra = () => {
	const { sesionIniciada } = useContext(contextoSesion);

	return (
		<div className="principal-contenedor">
			<section className="listado-seccion">
				{sesionIniciada && <div className="acciones-listado">Acciones sobre listado.</div>}

				<h3>Mi lista de la compra.</h3>
				<p>...</p>
			</section>
		</div>
	);
};

export default ListaCompra;
