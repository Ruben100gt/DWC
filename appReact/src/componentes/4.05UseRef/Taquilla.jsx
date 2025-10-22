import React from "react";
import { formatearDinero } from "../../biblioteca.js";
import "./Taquilla.css";

const Taquilla = (props) => {
	return (
		<>
			<div className="infoTaquilla">
				<p className="precio">{formatearDinero(props.precio)}</p>
			</div>
		</>
	);
};

export default Taquilla;
