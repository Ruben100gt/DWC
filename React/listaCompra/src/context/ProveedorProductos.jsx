import React, { useState, createContext, useEffect } from "react";
import useProductosSupabase from "../hooks/useProductosSupabase.js";

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
	const ERROR_INICIAL = "";

	const {
		obtenerListado,
		obtenerProductoPorId,
		insertarProducto,
		editarProducto,
		eliminarProducto,
	} = useProductosSupabase("productos");

	const [productos, setProductos] = useState([]);
	const [productosFiltro, setProductosFiltro] = useState([]);
	const [producto, setProducto] = useState({});
	const [errorProductos, setErrorProductos] = useState(ERROR_INICIAL);

	const cargarProductos = async () => {
		try {
			const respuesta = await obtenerListado("productos");
			setProductos(respuesta);
			setProductosFiltro(respuesta);
			setErrorProductos(ERROR_INICIAL);
		} catch (error) {
			setErrorProductos(error.message);
		}
	};

	// --- CRUD ESTILO PROFESOR (Manual y sin esperar respuesta de datos) ---

	const crearNuevoProducto = async (datos) => {
		try {
			// Mandamos a Supabase (sin esperar retorno de datos)
			await insertarProducto(datos);

			// Actualizamos localmente añadiendo los datos 'a ciegas' al array
			setProductos([...productos, datos]);
			setProductosFiltro([...productosFiltro, datos]);
			setErrorProductos(ERROR_INICIAL);
		} catch (error) {
			setErrorProductos(error.message);
		}
	};

	const editarProductoExistente = async (id, datos) => {
		try {
			await editarProducto(id, datos);

			// Mapeamos para sustituir los datos antiguos por los nuevos
			const actualizarLista = (lista) =>
				lista.map((p) => (p.id === id ? { ...p, ...datos } : p));

			setProductos(actualizarLista(productos));
			setProductosFiltro(actualizarLista(productosFiltro));
			setErrorProductos(ERROR_INICIAL);
		} catch (error) {
			setErrorProductos(error.message);
		}
	};

	const borrarProducto = async (id) => {
		try {
			await eliminarProducto(id);

			// Filtramos para quitar el ID borrado
			const quitarDeLista = (lista) => lista.filter((p) => p.id !== id);

			setProductos(quitarDeLista(productos));
			setProductosFiltro(quitarDeLista(productosFiltro));
			setErrorProductos(ERROR_INICIAL);
		} catch (error) {
			setErrorProductos(error.message);
		}
	};

	// --- RESTO DE FUNCIONES IGUAL QUE ANTES ---

	const filtrarProductos = (variable, valor) => {
		if (!valor || valor.trim() === "") {
			setProductosFiltro(productos);
			return;
		}
		const listaFiltrada = productos.filter((p) => {
			if (variable === "precio" || variable === "peso") {
				return Number(p[variable]) <= Number(valor);
			} else {
				return p[variable].toLowerCase().includes(valor.toLowerCase());
			}
		});
		setProductosFiltro(listaFiltrada);
	};

	const ordenarProductos = (columna) => {
		if (!columna) return;
		const listaOrdenada = [...productosFiltro].sort((a, b) => {
			let valorA = a[columna];
			let valorB = b[columna];
			if (typeof valorA === "string") {
				valorA = valorA.toLowerCase();
				valorB = valorB.toLowerCase();
			}
			return valorA > valorB ? 1 : -1;
		});
		setProductosFiltro(listaOrdenada);
	};

	const obtenerProducto = async (id) => {
		try {
			const resultadoProducto = await obtenerProductoPorId(id);
			if (resultadoProducto && resultadoProducto.length > 0) {
				setProducto(resultadoProducto[0]);
			}
			setErrorProductos(ERROR_INICIAL);
		} catch (error) {
			setErrorProductos(error.message);
		}
	};

	useEffect(() => {
		cargarProductos();
	}, []);

	const totalProductos = productosFiltro.length;
	let sumaPrecios = 0;
	productosFiltro.forEach((p) => {
		sumaPrecios += Number(p.precio);
	});
	const precioMedio =
		totalProductos > 0 ? (sumaPrecios / totalProductos).toFixed(2) : 0;

	const datosAProveer = {
		productos,
		productosFiltro,
		producto,
		errorProductos,
		obtenerListado,
		cargarProductos,
		filtrarProductos,
		ordenarProductos,
		obtenerProducto,
		totalProductos,
		precioMedio,
		crearNuevoProducto,
		editarProductoExistente,
		borrarProducto,
	};

	return (
		<contextoProductos.Provider value={datosAProveer}>
			{children}
		</contextoProductos.Provider>
	);
};

export default ProveedorProductos;
export { contextoProductos };
