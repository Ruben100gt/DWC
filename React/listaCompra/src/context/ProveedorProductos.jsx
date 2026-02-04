import React, { useState, createContext, useEffect, useContext } from 'react';
import useTablaSupabase from '../hooks/useTablaSupabase.js';
import useNotificacion from '../hooks/useNotificacion.js';
import { contextoSesion } from './ProveedorSesion.jsx';

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
	const ERROR_INICIAL = '';

	const { obtenerListado, obtenerProductoPorId, insertarProducto, editarProducto, eliminarProducto } =
		useTablaSupabase('productos');

	const { notificacion } = useNotificacion();

	const { sesionIniciada } = useContext(contextoSesion);

	const [productos, setProductos] = useState([]);
	const [productosFiltro, setProductosFiltro] = useState([]);
	const [producto, setProducto] = useState({});
	const [errorProductos, setErrorProductos] = useState(ERROR_INICIAL);

	const limpiarFormulario = () => {
		setProducto({});
		setErrorProductos(ERROR_INICIAL);
	};

	// Si no hay sesión iniciada, actualizamos la lista a la original.
	useEffect(() => {
		if (!sesionIniciada && productos.length > 0) {
			setProductosFiltro(productos);
		}
	}, [sesionIniciada]);

	const cargarProductos = async () => {
		try {
			const respuesta = await obtenerListado('productos');
			setProductos(respuesta);
			setProductosFiltro(respuesta);
			setErrorProductos(ERROR_INICIAL);
		} catch (error) {
			setErrorProductos(error.message);
			notificacion('Error al cargar productos', 'error');
		}
	};

	const crearNuevoProducto = async (datos) => {
		try {
			const respuesta = await insertarProducto(datos);
			if (respuesta && respuesta.length > 0) {
				const nuevoItem = respuesta[0];
				setProductos([...productos, nuevoItem]);
				setProductosFiltro([...productosFiltro, nuevoItem]);
				notificacion('Producto creado correctamente', 'exito');
			}
			limpiarFormulario();
		} catch (error) {
			setErrorProductos(error.message);
			notificacion('Error al crear el producto', 'error');
		}
	};

	const editarProductoExistente = async (id, datos) => {
		try {
			await editarProducto(id, datos);

			const actualizarLista = (lista) => lista.map((p) => (p.id == id ? { ...p, ...datos } : p));

			setProductos(actualizarLista(productos));
			setProductosFiltro(actualizarLista(productosFiltro));
			limpiarFormulario();
			notificacion('Producto actualizado correctamente', 'exito');
		} catch (error) {
			setErrorProductos(error.message);
			notificacion('Error al editar el producto', 'error');
		}
	};

	const borrarProducto = async (id) => {
		try {
			await eliminarProducto(id);

			const quitarDeLista = (lista) => lista.filter((p) => p.id != id);

			setProductos(quitarDeLista(productos));
			setProductosFiltro(quitarDeLista(productosFiltro));

			if (producto.id == id) {
				limpiarFormulario();
			}
			notificacion('Producto eliminado', 'exito');
		} catch (error) {
			setErrorProductos(error.message);
			notificacion('Error al borrar el producto', 'error');
		}
	};

	const filtrarProductos = (variable, valor) => {
		if (!valor || valor.trim() === '') {
			setProductosFiltro(productos);
			return;
		}
		const listaFiltrada = productos.filter((p) => {
			if (variable === 'precio' || variable === 'peso') {
				return Number(p[variable]) <= Number(valor);
			} else {
				return p[variable].toLowerCase().includes(valor.toLowerCase());
			}
		});
		setProductosFiltro(listaFiltrada);
	};

	const ordenarProductos = (columna) => {
		if (!columna) {
			setProductosFiltro(productos);
			return;
		}
		const listaOrdenada = [...productosFiltro].sort((a, b) => {
			let valorA = a[columna];
			let valorB = b[columna];
			if (typeof valorA === 'string') {
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
	const precioMedio = totalProductos > 0 ? (sumaPrecios / totalProductos).toFixed(2) : 0;

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
		limpiarFormulario,
	};

	return <contextoProductos.Provider value={datosAProveer}>{children}</contextoProductos.Provider>;
};
export default ProveedorProductos;
export { contextoProductos };
