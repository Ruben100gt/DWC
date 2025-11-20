import React, { useRef } from "react";
import "./Pelicula.css";
import Taquilla from "./Taquilla.jsx";

const Pelicula = (props) => {
	const refElenco = useRef(null);
	const refTaquilla = useRef(null);

	const mostrarElenco = () => {
		refElenco.current.classList.toggle("ocultar");
	};

	const mostrarTaquilla = () => {
		refTaquilla.current.classList.toggle("ocultar");
	};

	return (
		<>
			<div className="pelicula">
				<img src={props.cartela} className="cartela" />
				<h1 className="titulo">{props.título}</h1>
				<h3 className="direccion">{props.direccion}</h3>
				<p className="descripcion">{props.descripcion}</p>
			</div>

			<div className="botones">
				<button onClick={() => mostrarElenco()}>Elenco</button>
				<button onClick={() => mostrarTaquilla()}>Taquilla</button>
			</div>

			<div ref={refTaquilla} className="taquilla ocultar">
				<Taquilla precio="888000000" />
			</div>

			<div ref={refElenco} className="elenco ocultar">
				<div className="interpretes">{props.children}</div>
			</div>
		</>
	);
};

export default Pelicula;
