import { supabaseConexion } from "../supabase/supabase.js";

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

	const obtener = async () => {
		return await consulta(supabaseConexion.from(tabla).select("*"));
	};

	const obtenerPorId = async (id) => {
		return await consulta(
			supabaseConexion.from(tabla).select("*").eq("id", id),
		);
	};

	const insertar = async (datos) => {
		return await consulta(supabaseConexion.from(tabla).insert(datos).select());
	};

	const editar = async (id, datos) => {
		return await consulta(
			supabaseConexion.from(tabla).update(datos).eq("id", id).select(),
		);
	};

	const eliminar = async (id) => {
		return await consulta(supabaseConexion.from(tabla).delete().eq("id", id));
	};

	const obtenerConConsulta = async (consulta) => {
		return await consulta(supabaseConexion.from(tabla).select(consulta));
	};

	return {
		obtener,
		obtenerPorId,
		insertar,
		editar,
		eliminar,
		obtenerConConsulta,
	};
};

export default useTablaSupabase;
