import React, { useState, createContext, useEffect } from 'react';
import useProductos from '../hooks/useProductos.js';
import useProductosSupabase from '../hooks/useProductosSupabase.js';

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
	const ERROR_INICIAL = '';

	const { obtenerListado, filtrarListado, ordenarListado, obtenerProductoPorId } = useProductosSupabase();
	const [productos, setProductos] = useState([]);
	const [producto, setProducto] = useState({});
	const [errorProductos, setErrorProductos] = useState(ERROR_INICIAL);

	const cargarProductos = async () => {
		try {
			const respuesta = await obtenerListado();
			setProductos(respuesta);
		} catch (error) {
			setErrorProductos(error.message);
		}
	};

	const filtrarProductos = async (variable, valor) => {
		try {
			const productosFiltrados = await filtrarListado(variable, valor);
			setProductos(productosFiltrados);
			setErrorProductos(ERROR_INICIAL);
		} catch (error) {
			setErrorProductos(error.message);
		}
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

	const totalProductos = productos.length;

	let sumaPrecios = 0;
	productos.forEach((p) => {
		sumaPrecios += Number(p.precio);
	});
	const precioMedio = totalProductos > 0 ? (sumaPrecios / totalProductos).toFixed(2) : 0;

	const datosAProveer = {
		productos,
		setProductos,
		producto,
		errorProductos,
		obtenerListado,
		cargarProductos,
		filtrarProductos,
		obtenerProducto,
		totalProductos,
		precioMedio,
	};

	return <contextoProductos.Provider value={datosAProveer}>{children}</contextoProductos.Provider>;
};

export default ProveedorProductos;
export { contextoProductos };
