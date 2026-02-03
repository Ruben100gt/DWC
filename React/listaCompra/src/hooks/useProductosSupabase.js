import { supabaseConexion } from "../supabase/supabase.js";

const useProductosSupabase = (tabla) => {
	const consulta = async (tabla) => {
		try {
			const { data, error } = await tabla;
			if (error) throw error;
			return data;
		} catch (error) {
			throw error;
		}
	};

	const obtenerListado = async () => {
		return await consulta(supabaseConexion.from(tabla).select("*"));
	};

	const obtenerProductoPorId = async (id) => {
		return await consulta(
			supabaseConexion.from(tabla).select("*").eq("id", id),
		);
	};

	const insertarProducto = async (datos) => {
		return await consulta(supabaseConexion.from(tabla).insert(datos));
	};

	const editarProducto = async (id, datos) => {
		return await consulta(
			supabaseConexion.from(tabla).update(datos).eq("id", id),
		);
	};

	const eliminarProducto = async (id) => {
		return await consulta(supabaseConexion.from(tabla).delete().eq("id", id));
	};

	return {
		obtenerListado,
		obtenerProductoPorId,
		insertarProducto,
		editarProducto,
		eliminarProducto,
	};
};

export default useProductosSupabase;
