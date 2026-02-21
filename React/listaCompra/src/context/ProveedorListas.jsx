import React, { useState, createContext, useEffect, useContext } from 'react';
import useTablaSupabase from '../hooks/useTablaSupabase.js';
import useNotificacion from '../hooks/useNotificacion.js';
import { contextoSesion } from './ProveedorSesion.jsx';

const contextoListas = createContext();

const ProveedorListas = ({ children }) => {
	const ERROR_INICIAL = '';

	// Para no crear 2 proveedores, llamamos a useTablaSupabase 2 veces, una para cada tabla (cambiando el nombre de las funciones).
	// Tabla de Listas de la compra.
	const {
		obtener: obtenerListado,
		obtenerPorId: obtenerListaPorId,
		insertar: insertarLista,
		eliminar: eliminarLista,
	} = useTablaSupabase('listas_compra');

	// Tabla de Artículos de la compra.
	const {
		obtenerDonde: obtenerArticulosFiltrados,
		insertar: insertarArticulo,
		eliminar: eliminarArticulo,
		editar: editarArticulo,
	} = useTablaSupabase('articulos_lista');

	const { notificacion } = useNotificacion();
	const { sesionIniciada, usuario, rolUsuario } = useContext(contextoSesion);

	const [listas, setListas] = useState([]);
	const [todasLasListas, setTodasLasListas] = useState([]);
	const [lista, setLista] = useState({});
	const [errorListas, setErrorListas] = useState(ERROR_INICIAL);

	const [articulos, setArticulos] = useState([]);
	const [errorArticulos, setErrorArticulos] = useState(ERROR_INICIAL);

	const limpiarFormularioLista = () => {
		setLista({});
		setErrorListas(ERROR_INICIAL);
	};

	const cargarListas = async () => {
		try {
			const respuesta = await obtenerListado();
			// Filtramos para solo se guarden las listas del usuario actual (si hay sesión iniciada).
			const misListas =
				sesionIniciada && usuario ? (respuesta || []).filter((l) => l.propietario_id === usuario.id) : [];

			setListas(misListas);
			setErrorListas(ERROR_INICIAL);
		} catch (error) {
			setErrorListas(error.message);
			notificacion('Error al cargar listas', 'error');
		}
	};

	// Exclusiva para la vista del Administrador
	const cargarTodasLasListas = async () => {
		try {
			// Nos traemos el nombre del dueño de la lista.
			const respuesta = await obtenerListado('*, perfiles(nombre, avatar_url)');
			setTodasLasListas(respuesta || []);
		} catch (error) {
			console.error('Error al cargar todas las listas:', error);
			notificacion('Error al cargar la vista de administrador', 'error');
		}
	};

	const cargarArticulos = async (idLista) => {
		if (!idLista) {
			setArticulos([]);
			return;
		}
		try {
			const respuesta = await obtenerArticulosFiltrados('lista_id', idLista, '*, productos(*)');
			setArticulos(respuesta || []);
			setErrorArticulos(ERROR_INICIAL);
		} catch (error) {
			setErrorArticulos(error.message);
			notificacion('Error al cargar artículos', 'error');
		}
	};

	const crearNuevaLista = async (datos) => {
		const datosCompletos = {
			nombre_lista: datos.nombre,
			fecha_creacion: new Date().toISOString(),
			propietario_id: usuario?.id,
		};
		try {
			const respuesta = await insertarLista(datosCompletos);
			if (respuesta && respuesta.length > 0) {
				setListas([...listas, respuesta[0]]);
				notificacion('Lista creada correctamente', 'exito');
			}
			limpiarFormularioLista();
		} catch (error) {
			setErrorListas(error.message);
			notificacion('Error al crear la lista', 'error');
		}
	};

	const crearNuevoArticulo = async (datos) => {
		const articuloExistente = articulos.find((a) => a.producto_id === datos.producto_id);

		try {
			if (articuloExistente) {
				const nuevaCantidad = (articuloExistente.cantidad || 1) + datos.cantidad;

				if (nuevaCantidad <= 0) {
					await borrarArticulo(articuloExistente.id);
				} else {
					await editarArticulo(articuloExistente.id, { cantidad: nuevaCantidad });
					notificacion('Cantidad actualizada', 'exito');
					cargarArticulos(datos.lista_id);
				}
			} else {
				if (datos.cantidad > 0) {
					const datosCompletos = {
						lista_id: datos.lista_id,
						producto_id: datos.producto_id,
						cantidad: datos.cantidad,
					};
					await insertarArticulo(datosCompletos);
					notificacion('Producto añadido', 'exito');
					cargarArticulos(datos.lista_id);
				}
			}
		} catch (error) {
			setErrorArticulos(error.message);
			notificacion('Error al gestionar el producto', 'error');
		}
	};

	const borrarLista = async (id) => {
		try {
			await eliminarLista(id);
			setListas(listas.filter((l) => l.id !== id));
			if (lista.id === id) {
				limpiarFormularioLista();
			}
			notificacion('Lista eliminada', 'exito');
		} catch (error) {
			setErrorListas(error.message);
			notificacion('Error al borrar la lista', 'error');
		}
	};

	const borrarArticulo = async (id) => {
		try {
			await eliminarArticulo(id);
			setArticulos((prev) => prev.filter((p) => p.id !== id));
			notificacion('Artículo eliminado', 'exito');
		} catch (error) {
			setErrorArticulos(error.message);
			notificacion('Error al borrar el artículo', 'error');
		}
	};

	const obtenerLista = async (id) => {
		try {
			const resultado = await obtenerListaPorId(id);
			if (resultado && resultado.length > 0) {
				setLista(resultado[0]);
				cargarArticulos(id);
			}
			setErrorListas(ERROR_INICIAL);
		} catch (error) {
			setErrorListas(error.message);
		}
	};

	useEffect(() => {
		cargarListas();
	}, [sesionIniciada, usuario, rolUsuario]);

	const totalUnidades = articulos.reduce((acc, item) => acc + (item.cantidad || 0), 0);

	let precioLista = 0;
	let pesoLista = 0;

	articulos.forEach((p) => {
		const cantidad = p.cantidad || 1;
		const precioUnitario = Number(p.productos?.precio || 0);
		const pesoUnitario = Number(p.productos?.peso || 0);

		precioLista += precioUnitario * cantidad;
		pesoLista += pesoUnitario * cantidad;
	});

	const cocheNecesario = pesoLista > 15;

	const datosAProveer = {
		listas,
		articulos,
		lista,
		obtenerListado,
		obtenerListaPorId,
		cargarListas,
		cargarArticulos,
		obtenerLista,
		crearNuevaLista,
		crearNuevoArticulo,
		borrarLista,
		borrarArticulo,
		limpiarFormularioLista,
		todasLasListas,
		cargarTodasLasListas,
		totalArticulos: totalUnidades,
		precioLista,
		pesoLista,
		cocheNecesario,
	};

	return <contextoListas.Provider value={datosAProveer}>{children}</contextoListas.Provider>;
};
export default ProveedorListas;
export { contextoListas };
