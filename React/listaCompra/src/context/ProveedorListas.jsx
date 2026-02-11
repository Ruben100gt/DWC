import React, { useState, createContext, useEffect, useContext } from "react";
import useTablaSupabase from "../hooks/useTablaSupabase.js";
import useNotificacion from "../hooks/useNotificacion.js";
import { contextoSesion } from "./ProveedorSesion.jsx";

const contextoListas = createContext();

const ProveedorListas = ({ children }) => {
	const ERROR_INICIAL = "";

	// Para no crear 2 proveedores, llamamos a useTablaSupabase 2 veces, una para cada tabla (cambiando el nombre de las funciones).
	// Tabla de Listas de la compra.
	const {
		obtener: obtenerListado,
		obtenerPorId: obtenerListaPorId,
		insertar: insertarLista,
		eliminar: eliminarLista,
	} = useTablaSupabase("lista_compra");

	// Tabla de Artículos de la compra.
	const {
		obtener: obtenerArticulos,
		obtenerConConsulta: obtenerArticulosConDatos,
		insertar: insertarArticulo,
		eliminar: eliminarArticulo,
	} = useTablaSupabase("articulos_lista");

	const { notificacion } = useNotificacion();
	const { sesionIniciada, usuario } = useContext(contextoSesion);

	const [listas, setListas] = useState([]);
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
			setListas(respuesta);
			setErrorListas(ERROR_INICIAL);
		} catch (error) {
			setErrorListas(error.message);
			notificacion("Error al cargar listas", "error");
		}
	};

	const cargarArticulos = async (idLista) => {
		if (!idLista) {
			setArticulos([]);
			return;
		}
		try {
			// Usamos "obtenerConConsulta" para traer productos de cada artículo.
			const respuesta = await obtenerArticulosConDatos("*, productos(*)");

			const articulosLista = respuesta.filter((a) => a.lista_id === idLista);

			setArticulos(articulosLista);
			setErrorArticulos(ERROR_INICIAL);
		} catch (error) {
			setErrorArticulos(error.message);
			notificacion("Error al cargar artículos", "error");
		}
	};

	const crearNuevaLista = async (datos) => {
		const datosCompletos = {
			...datos,
			fecha_creacion: new Date().toISOString(), // Formato string (ISO) para que la base de datos lo entienda.
			propietario_id: usuario?.id, // Uso el ? para evitar errores si el usuario aún no se ha cargado (null).
		};
		try {
			const respuesta = await insertarLista(datosCompletos);
			if (respuesta && respuesta.length > 0) {
				setListas([...listas, respuesta[0]]);
				notificacion("Lista creada correctamente", "exito");
			}
			limpiarFormularioLista();
		} catch (error) {
			setErrorListas(error.message);
			notificacion("Error al crear la lista", "error");
		}
	};

	const crearNuevoArticulo = async (datos) => {
		try {
			const respuesta = await insertarArticulo(datos);
			if (respuesta && respuesta.length > 0) {
				cargarArticulos(datos.lista_id);
				notificacion("Producto añadido", "exito");
			}
		} catch (error) {
			setErrorArticulos(error.message);
			notificacion("Error al añadir producto", "error");
		}
	};

	const borrarLista = async (id) => {
		try {
			await eliminarLista(id);

			setListas(listas.filter((l) => l.id !== id));

			if (lista.id == id) {
				limpiarFormularioLista();
			}
			notificacion("Lista eliminada", "exito");
		} catch (error) {
			setErrorListas(error.message);
			notificacion("Error al borrar la lista", "error");
		}
	};

	const borrarArticulo = async (id) => {
		try {
			await eliminarArticulo(id);

			setArticulos(articulos.filter((p) => p.id !== id));

			notificacion("Artículo eliminado", "exito");
		} catch (error) {
			setErrorArticulos(error.message);
			notificacion("Error al borrar el artículo", "error");
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
	}, []);

	const totalArticulos = articulos.length;
	let precioLista = 0;
	let pesoLista = 0;

	articulos.forEach((p) => {
		const cantidad = p.cantidad || 1; // Si no hay cantidad, cuenta como 1.
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

		errorListas,
		errorArticulos,

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

		totalArticulos,
		precioLista,
		pesoLista,
		cocheNecesario,
	};

	return (
		<contextoListas.Provider value={datosAProveer}>
			{children}
		</contextoListas.Provider>
	);
};
export default ProveedorListas;
export { contextoListas };
