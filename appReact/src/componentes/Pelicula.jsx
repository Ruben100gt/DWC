import React from 'react';
import './Pelicula.css';

const Pelicula = (props) => {
	return (
		<>
			<div className="pelicula">
				<img src={props.cartela} className="cartela" />
				<h1 className="titulo">{props.título}</h1>
				<h3 className="direccion">{props.direccion}</h3>
				<p className="resumen">{props.children}</p>
			</div>
		</>
	);
};

export default Pelicula;
