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

	// Uso " select = * " para poder consultar múltiples tablas.
	const obtener = async (select = '*') => {
		return await consulta(supabaseConexion.from(tabla).select(select));
	};

	const obtenerPorId = async (id) => {
		return await consulta(supabaseConexion.from(tabla).select('*').eq('id', id));
	};

	const obtenerDonde = async (columna, valor, select = '*') => {
		return await consulta(supabaseConexion.from(tabla).select(select).eq(columna, valor));
	};

	const insertar = async (datos) => {
		return await consulta(supabaseConexion.from(tabla).insert(datos).select());
	};

	const editar = async (id, datos) => {
		return await consulta(supabaseConexion.from(tabla).update(datos).eq('id', id).select());
	};

	const eliminar = async (id) => {
		return await consulta(supabaseConexion.from(tabla).delete().eq('id', id));
	};

	return {
		obtener,
		obtenerPorId,
		obtenerDonde,
		insertar,
		editar,
		eliminar,
	};
};

export default useTablaSupabase;
