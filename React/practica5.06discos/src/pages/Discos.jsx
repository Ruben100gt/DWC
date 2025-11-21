import React from "react";
import discos from "../json/discos.json";
import { useNavigate } from "react-router-dom";
import "./Discos.css";

const Discos = () => {
	const navegar = useNavigate();
	return (
		<>
			<h2>Listado de Discos:</h2>
			<div id="discosMostrados">
				<div id="busqueda">
					<input type="text" id="textoBuscar" placeholder="Busca por nombre." />
					<input type="button" id="botonBuscar" value="Buscar" />
					<input type="button" id="botonLimpiar" value="Limpiar" />
				</div>
				<hr />
				<div id="listadoDiscos"></div>
			</div>

			<div className="discos">
				{discos.discos.map((disco) => (
					<div className="disco" key={disco.id}>
						<img src={disco.cartelera} />
						<h3
							onClick={() => {
								navegar(`/detalledisco/${disco.id}`);
							}}
						>
							{disco.nombre}
						</h3>
					</div>
				))}
			</div>
		</>
	);
};

export default Discos;
