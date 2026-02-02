import React, { useContext, useState } from "react";
import { contextoProductos } from "../context/ProveedorProductos.jsx";
import "./ListaProductos.css";

const ListaProductos = () => {
	//IMPORTANTE -> Al tener un orden puesto y cambiar el filtro, se pierde el orden, porque me salía un error de demasiadas consultas.

	const {
		productos,
		setProductos,
		totalProductos,
		precioMedio,
		filtrarProductos,
		cargarProductos,
	} = useContext(contextoProductos);

	const [tipoFiltro, setTipoFiltro] = useState("nombre");

	const ordenarProductos = (columna) => {
		if (!columna) return;

		const listaOrdenada = [...productos].sort((a, b) => {
			let valorA = a[columna];
			let valorB = b[columna];

			if (typeof valorA === "string") {
				valorA = valorA.toLowerCase();
				valorB = valorB.toLowerCase();
			}

			return valorA > valorB ? 1 : -1;
		});

		setProductos(listaOrdenada);
	};

	// -------------------------------------------------------------------------------------------------------------------
	//Creo que es mejor hacerlo en ProveedorProductos
	const cambioFiltro = (valor) => {
		if (!valor || valor.trim() === "") {
			cargarProductos();
		} else {
			filtrarProductos(tipoFiltro, valor);
		}
	};

	// -------------------------------------------------------------------------------------------------------------------
	//Buscar funcion local/tolocal(algo)
	const formatearDinero = (cantidad) => {
		return new Intl.NumberFormat("es-ES", {
			style: "currency",
			currency: "EUR",
			minimumFractionDigits: 2,
		}).format(cantidad);
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
							onChange={(e) => cambioFiltro(e.target.value)}
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
					{productos.map((p) => (
						// -------------------------------------------------------------------------------------------------------------------
						//Algo de que no hay componente <producto> ¿¿??
						<div key={p.id} className="producto-item">
							<div className="contenedor-foto">
								<img
									src={p.imagen_url}
									alt={p.nombre}
									className="foto-producto"
								/>
							</div>
							<div className="info-producto">
								<h4>{p.nombre}</h4>
								<p className="precio">{formatearDinero(p.precio)}</p>
								<p className="peso">Peso: {p.peso}g</p>
							</div>
						</div>
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
