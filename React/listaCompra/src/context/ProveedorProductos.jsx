import React, { useState, createContext, useEffect } from "react";
import useProductos from "../hooks/useProductos.js";

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
	const ERROR_INICIAL = "";

	const [productos, setProductos] = useState([]);
	const [producto, setProducto] = useState({});
	const [errorProductos, setErrorProductos] = useState(ERROR_INICIAL);

	//Falta filtra por precio y peso, debe ser igual o menor
	const filtrarProductos = async (variable, valor) => {
		try {
			const { data, error } = await supabaseConexion
				.from("productos")
				.select("*")
				.eq(variable, valor);
			setProductos(data);
			setErrorProductos(ERROR_INICIAL);
		} catch (error) {
			setErrorProductos(error.message);
		}
	};

	const ordenarProductos = async (variable, orden = true) => {
		try {
			const { data, error } = await supabaseConexion
				.from("productos")
				.select("*")
				.order(variable, { ascending: orden });
			setProducto(data);
			setErrorProductos(ERROR_INICIAL);
		} catch (error) {
			setErrorProductos(error.message);
		}
	};

	const obtenerProducto = async (id) => {
		try {
			const { data, error } = await supabaseConexion
				.from("productos")
				.select("*")
				.eq("id", id);
			setProducto(data);
			setErrorProductos(ERROR_INICIAL);
		} catch (error) {
			setErrorProductos(error.message);
		}
	};

	useEffect(() => {
		obtenerListado();
	}, []);

	const datosAProveer = {
		productos,
		errorProductos,
		obtenerListado,
		filtrarProductos,
		ordenarProductos,
		obtenerProducto,
	};

	return (
		<contextoSesion.Provider value={datosAProveer}>
			{children}
		</contextoSesion.Provider>
	);
};

export default ProveedorProductos;
export { contextoProductos };
