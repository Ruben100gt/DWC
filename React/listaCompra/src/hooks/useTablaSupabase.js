import { supabaseConexion } from '../supabase/supabase.js';

const useTablaSupabase = (tabla) => {
	const consulta = async (query) => {
		try {
			const { data, error } = await query;
			if (error) throw error;
			return data;
		} catch (error) {
			throw error;
		}
	};

	const obtenerListado = async () => {
		return await consulta(supabaseConexion.from(tabla).select('*'));
	};

	const obtenerProductoPorId = async (id) => {
		return await consulta(supabaseConexion.from(tabla).select('*').eq('id', id));
	};

	const insertarProducto = async (datos) => {
		return await consulta(supabaseConexion.from(tabla).insert(datos).select());
	};

	const editarProducto = async (id, datos) => {
		return await consulta(supabaseConexion.from(tabla).update(datos).eq('id', id).select());
	};

	const eliminarProducto = async (id) => {
		return await consulta(supabaseConexion.from(tabla).delete().eq('id', id));
	};

	return {
		obtenerListado,
		obtenerProductoPorId,
		insertarProducto,
		editarProducto,
		eliminarProducto,
	};
};

export default useTablaSupabase;
