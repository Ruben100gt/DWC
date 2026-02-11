import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contextoSesion } from "../context/ProveedorSesion.jsx";
import { contextoListas } from "../context/ProveedorListas.jsx";
import Confirmacion from "./Confirmacion.jsx";
import "./Compra.css";

const Compra = ({ datos }) => {
	if (!datos) return null;

	const navigate = useNavigate();
	const { sesionIniciada } = useContext(contextoSesion);
	const { borrarLista } = useContext(contextoListas);

	const [confirmandoBorrado, setConfirmandoBorrado] = useState(false);

	// Formateamos fecha
	const fecha = new Date(datos.fecha_creacion).toLocaleDateString("es-ES");

	// Icono genérico para listas
	const imagenLista = "https://cdn-icons-png.flaticon.com/512/2331/2331970.png";

	const confirmarBorrado = () => {
		borrarLista(datos.id);
		setConfirmandoBorrado(false);
	};

	const irAlDetalle = () => {
		navigate(`/listas/${datos.id}`);
	};

	return (
		<div className="tarjeta-lista">
			<div className="contenedor-imagen-lista" onClick={irAlDetalle}>
				<img src={imagenLista} alt="Icono Lista" className="foto-lista" />
			</div>

			<div className="info-lista">
				<h4 onClick={irAlDetalle} className="titulo-lista">
					{datos.nombre}
				</h4>
				<p className="fecha-lista">Creada: {fecha}</p>

				<button className="btn-ver-lista" onClick={irAlDetalle}>
					Ver Productos
				</button>

				{sesionIniciada && (
					<button
						className="btn-borrar-lista"
						onClick={() => setConfirmandoBorrado(true)}
					>
						Borrar
					</button>
				)}
			</div>

			{confirmandoBorrado && (
				<Confirmacion
					mensaje={`¿Borrar la lista "${datos.nombre}"?`}
					onConfirmar={confirmarBorrado}
					onCancelar={() => setConfirmandoBorrado(false)}
				/>
			)}
		</div>
	);
};

export default Compra;
