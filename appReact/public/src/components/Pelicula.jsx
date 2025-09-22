import React from "react";
import "./Pelicula.css";

const Pelicula = (props) => {
	return (
		<>
			<div>
				<image>{props.cartela}</image>
				<h1>{props.título}</h1>
				<h3>{props.direccion}</h3>
				<p>{children}</p>
			</div>
		</>
	);
};

export default Pelicula;
