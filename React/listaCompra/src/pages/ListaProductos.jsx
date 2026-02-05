import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contextoSesion } from "../context/ProveedorSesion.jsx";
import { contextoProductos } from "../context/ProveedorProductos.jsx";
import Producto from "./Producto.jsx";
import "./ListaProductos.css";

const ListaProductos = () => {
	const navigate = useNavigate();
	const { sesionIniciada } = useContext(contextoSesion);

	const {
		productosFiltro,
		totalProductos,
		precioMedio,
		filtrarProductos,
		ordenarProductos,
		limpiarFormulario,
	} = useContext(contextoProductos);

	const [tipoFiltro, setTipoFiltro] = useState("nombre");

	const formatearDinero = (cantidad) => {
		return Number(cantidad).toLocaleString("es-ES", {
			style: "currency",
			currency: "EUR",
		});
	};

	const irACrear = () => {
		limpiarFormulario();
		navigate("/productos/crear");
	};

	return (
		<div className="contenedor-principal">
			<section className="seccion-listado" style={{ flex: 1 }}>
				<div className="caja-acciones">
					{/* --------------------------------------------------------------------------------------------------------------*/}
					{/*Poner todo el menú de productos (filtrar, ordenar, total de productos y media del precio) en un componente aparte*/}
					{sesionIniciada ? (
						<>
							<div className="fila-superior">
								<div className="grupo-filtro">
									<label>Buscar por:</label>
									<div style={{ display: "flex", gap: "5px" }}>
										<select
											value={tipoFiltro}
											onChange={(e) => setTipoFiltro(e.target.value)}
										>
											<option value="nombre">Nombre</option>
											<option value="precio">Precio máx</option>
											<option value="peso">Peso máx</option>
										</select>
										<input
											type={tipoFiltro === "nombre" ? "text" : "number"}
											placeholder="Filtro..."
											onChange={(e) =>
												filtrarProductos(tipoFiltro, e.target.value)
											}
											style={{ width: "140px" }}
										/>
									</div>
								</div>

								<div className="grupo-filtro">
									<label>Ordenar:</label>
									<select onChange={(e) => ordenarProductos(e.target.value)}>
										<option value="">Defecto</option>
										<option value="nombre">Nombre</option>
										<option value="precio">Precio</option>
										<option value="peso">Peso</option>
									</select>
								</div>
							</div>

							<div className="fila-inferior">
								<div className="resumen-info">
									<span>
										Total: <strong>{totalProductos}</strong> productos
									</span>
									<span>
										Media: <strong>{formatearDinero(precioMedio)}</strong>
									</span>
								</div>

								<button className="btn-crear" onClick={irACrear}>
									Crear producto
								</button>
							</div>
						</>
					) : (
						<p className="mensaje-sesion">Inicia sesión para ver opciones.</p>
					)}
				</div>

				<h3>Listado de productos.</h3>

				<div className="grid-productos">
					{productosFiltro.map((p) => (
						<Producto key={p.id} datos={p} />
					))}
					{productosFiltro.length === 0 && (
						<p style={{ textAlign: "center", marginTop: "20px" }}>
							No se han encontrado productos.
						</p>
					)}
				</div>
			</section>
		</div>
	);
};

export default ListaProductos;
