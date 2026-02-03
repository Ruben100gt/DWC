import React, { useContext, useState } from "react";
import { contextoProductos } from "../context/ProveedorProductos.jsx";
import Producto from "./Producto.jsx";
import "./ListaProductos.css";

//
//
//
//Dejar ver lista productos pero sin editar ni nada (ni ordenar, filtrar...)
//
//
//

const ListaProductos = () => {
	//IMPORTANTE -> Al tener un orden puesto y cambiar el filtro, se pierde el orden, porque me salía un error de demasiadas consultas.

	const {
		productosFiltro,
		totalProductos,
		precioMedio,
		filtrarProductos,
		ordenarProductos,
	} = useContext(contextoProductos);

	const [tipoFiltro, setTipoFiltro] = useState("nombre");

	const formatearDinero = (cantidad) => {
		return Number(cantidad).toLocaleString("es-ES", {
			style: "currency",
			currency: "EUR",
		});
	};

	return (
		<div className="contenedor-principal">
			<section className="seccion-listado">
				<div className="caja-acciones">
					<div className="grupo-filtro">
						<label>Buscar por:</label>
						<select
							value={tipoFiltro}
							onChange={(e) => setTipoFiltro(e.target.value)}
						>
							<option value="nombre">Nombre</option>
							<option value="precio">Precio máximo</option>
							<option value="peso">Peso máximo</option>
						</select>
						<input
							type={tipoFiltro === "nombre" ? "text" : "number"}
							placeholder={`Filtrar ${tipoFiltro}...`}
							onChange={(e) => filtrarProductos(tipoFiltro, e.target.value)}
						/>
					</div>

					<div className="grupo-filtro">
						<label>Ordenar por:</label>
						<select onChange={(e) => ordenarProductos(e.target.value)}>
							<option value="">Selecciona...</option>
							<option value="nombre">Nombre</option>
							<option value="precio">Precio</option>
							<option value="peso">Peso</option>
						</select>
					</div>

					<div className="resumen-final">
						<p>
							Total: <strong>{totalProductos}</strong>
						</p>
						<p>
							Media: <strong>{formatearDinero(precioMedio)}</strong>
						</p>
					</div>
				</div>

				<h3>Listado de productos.</h3>

				<div className="grid-productos">
					{productosFiltro.map((p) => (
						// Usamos el componente <Producto />. ¿Buena descomposición?
						<Producto key={p.id} datos={p} />
					))}
				</div>
			</section>

			<section className="seccion-detalles">
				<h3>Detalles y formularios.</h3>
			</section>
		</div>
	);
};

export default ListaProductos;
