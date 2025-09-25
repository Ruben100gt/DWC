import React from "react";
import "./Interprete.css";

const Interprete = (props) => {
	return (
		<>
			<div>
				<image>{props.foto}</image>
				<h2>{props.nombre}</h2>
				<p>{children}</p>
			</div>
		</>
	);
};

export default Interprete;
