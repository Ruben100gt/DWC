import React from "react";
import "./Interprete.css";

const Interprete = (props) => {
	return (
		<>
			<div className="interprete">
				<img src={props.foto} className="foto" />
				<div>
					<h2 className="nombre">{props.nombre}</h2>
					<p className="biografia">{props.biografia}</p>
				</div>
			</div>
		</>
	);
};

export default Interprete;
