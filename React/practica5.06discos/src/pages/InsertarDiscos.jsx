import React from "react";
import discos from "../json/discos.json";
import { useNavigate } from "react-router-dom";
import "./Discos.css";

const InsertarDiscos = () => {
	const navegar = useNavigate();
	return (
		<>
			<form name="formDisco" id="formularioDisco">
				<fieldset id="discos">
					<legend>Almacenar discos.</legend>
					<br />
					<label for="nombre">Nombre:</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						placeholder="Nombre del disco."
						autofocus
						required
					/>
					<br />
					<br />
					<label for="caratula">Carátula:</label>
					<input
						type="text"
						id="caratula"
						name="caratula"
						placeholder="URL de la carátula del disco."
					/>
					<br />
					<br />
					<label for="artista">Grupo música/interprete:</label>
					<input
						type="text"
						id="artista"
						name="artista"
						placeholder="Grupo o artista del disco."
						required
					/>
					<br />
					<br />
					<label for="anyo">Año de publicación:</label>
					<input type="number" id="anyo" name="anyo" />
					<br />
					<br />
					<label for="genero">Géneros del disco:</label>
					<select id="genero" name="genero">
						<option value=""></option>
						<option value="pop">Pop</option>
						<option value="rock">Rock</option>
						<option value="rap">Rap</option>
						<option value="jazz">Jazz</option>
						<option value="punk">Punk</option>
						<option value="electronica">Electrónica</option>
						<option value="clasico">Clásico</option>
						<option value="metal">Metal</option>
						<option value="regueton">Reguetón</option>
					</select>
					<br />
					<br />
					<label for="localizacion">Localización formato (ES-001AA):</label>
					<input
						type="text"
						id="localizacion"
						name="localizacion"
						placeholder="Localización del disco."
					/>
					<br />
					<br />
					<label for="prestado">Prestado:</label>
					<input type="checkbox" id="prestado" name="prestado" />
					<br />
					<br />
					<div id="errores"></div>
					<br />
					<input type="button" id="botonEnviar" value="Enviar" />
					<input type="button" id="botonMostrar" value="Mostrar" />
				</fieldset>
			</form>
		</>
	);
};

export default InsertarDiscos;
