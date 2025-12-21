import React from 'react';
import './Contenido.css';

const Contenido = (props) => {
	return <div className="contenido">{props.children}</div>;
};

export default Contenido;
