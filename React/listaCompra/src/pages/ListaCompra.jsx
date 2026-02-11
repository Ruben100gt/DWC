import React, { useContext, useState } from "react";
import { contextoSesion } from "../context/ProveedorSesion.jsx";
import { contextoListas } from "../context/ProveedorListas.jsx";
import Compra from "./Compra.jsx";
import "./ListaCompra.css";

const ListaCompra = () => {
	const { sesionIniciada } = useContext(contextoSesion);
	const { listas, crearNuevaLista, errorListas } = useContext(contextoListas);

	const [nombreNueva, setNombreNueva] = useState("");

	const manejarCrear = () => {
		if (!nombreNueva.trim()) return;
		crearNuevaLista({ nombre: nombreNueva });
		setNombreNueva("");
	};

	return (
		<div className="principal-contenedor">
			<section className="listado-seccion">
				{/* ZONA DE ACCIONES */}
				{sesionIniciada && (
					<div className="acciones-listado">
						<input
							type="text"
							className="input-nueva-lista"
							placeholder="Nombre de la nueva lista..."
							value={nombreNueva}
							onChange={(e) => setNombreNueva(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && manejarCrear()}
						/>
						<button className="btn-crear-lista" onClick={manejarCrear}>
							+ Crear Lista
						</button>
					</div>
				)}

				<h3>Mis Listas de la Compra</h3>

				{errorListas && <p className="mensaje-error">{errorListas}</p>}

				{/* GRID DE LISTAS */}
				<div className="grid-listas">
					{listas.map((lista) => (
						<Compra key={lista.id} datos={lista} />
					))}

					{listas.length === 0 && (
						<p className="mensaje-vacio">No tienes ninguna lista creada.</p>
					)}
				</div>
			</section>
		</div>
	);
};

export default ListaCompra;
