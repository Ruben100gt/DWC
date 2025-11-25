import React from "react";
import { useParams } from "react-router-dom";
import discos from "../json/discos.json";
import "./DiscosDetalle.css";

const DiscosDetalle = () => {
	const { id } = useParams();
	//Buscamos la pelicula que queremos mostrar
	const infoDisco = discos.discos.find((p) => p.id === parseInt(id));

	//Funcion vanilla
	/* 	const mostrarFormularios = (datos, mostrar) => {
		mostrar.innerHTML = "";

		datos.forEach((e) => {
			let contenido = "";
			if (e.nombre) contenido += `<p><strong>Nombre:</strong> ${e.nombre}</p>`;
			if (e.caratula)
				contenido += `<p><strong>Carátula:</strong> ${e.caratula}</p>`;
			if (e.artista)
				contenido += `<p><strong>Artista:</strong> ${e.artista}</p>`;
			if (e.anyo) contenido += `<p><strong>Año:</strong> ${e.anyo}</p>`;
			if (e.genero) contenido += `<p><strong>Género:</strong> ${e.genero}</p>`;
			if (e.localizacion)
				contenido += `<p><strong>Localización:</strong> ${e.localizacion}</p>`;
			if (e.prestado !== undefined)
				contenido += `<p><strong>Prestado:</strong> ${e.prestado}</p>`;

			//Boton eliminar
			//data-id lo he hecho con ayuda de chatgpt (no se me ocurre otra manera de como hacerlo)
			contenido += `<input type="button" class="botonEliminar" value="X" data-id="${e.id}" />`;

			mostrar.insertAdjacentHTML("beforeend", `<div>${contenido}</div>`);
		});
	}; */
	return (
		<>
			<h2>Detalles de la Película</h2>
			<h1>
				<strong>{infoDisco.nombre}</strong>
			</h1>
			<div className="disco-detalle">
				<img src={infoDisco.cartelera} />
				<p>
					<b>Director:</b> {infoDisco.director}
				</p>
				<p>
					<b>Clasificación:</b> {infoDisco.clasificacion}
				</p>
				<p>
					<b>Recaudación:</b> {infoDisco.recaudacion}
				</p>
				<p>
					<b>Nota:</b> {infoDisco.nota}
				</p>
				<p>
					<b>Resumen:</b> {infoDisco.resumen}
				</p>
			</div>
		</>
	);
};

export default DiscosDetalle;
