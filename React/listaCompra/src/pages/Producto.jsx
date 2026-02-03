import React from "react";
import "./Producto.css";

const Producto = ({ datos }) => {
	const precioFormateado = Number(datos.precio).toLocaleString("es-ES", {
		style: "currency",
		currency: "EUR",
	});

	return (
		<div className="producto-item">
			<div className="contenedor-foto">
				<img
					src={datos.imagen_url}
					alt={datos.nombre}
					className="foto-producto"
				/>
			</div>
			<div className="info-producto">
				<h4>{datos.nombre}</h4>
				<p className="precio">{precioFormateado}</p>
				<p className="peso">Peso: {datos.peso}g</p>
			</div>
		</div>
	);
};

export default Producto;
