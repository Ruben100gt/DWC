import React from "react";
import "./Listado.css";

const Listado = (props) => {
	return <div className="contenedor">{props.children}</div>;
};

export default Listado;
