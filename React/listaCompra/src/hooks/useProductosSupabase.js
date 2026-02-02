import { supabaseConexion } from "../supabase/supabase.js";

const useProductosSupabase = (tabla) => {
	const obtenerListado = async () => {
		try {
			const { data, error } = await supabaseConexion.from(tabla).select("*");
			if (error) throw error;
			return data;
		} catch (error) {
			throw error;
		}
	};

	// -----------------------------------------------------------------------------------------------------------------------------------------------
	//Quitar esta función, hacerla en proveedorProductos
	const filtrarListado = async (variable, valor) => {
		try {
			let respuesta = supabaseConexion.from(tabla).select("*");
			if (variable === "precio" || variable === "peso") {
				respuesta = respuesta.lte(variable, valor);
			} else {
				respuesta = respuesta.ilike(variable, `%${valor}%`);
			}
			const { data, error } = await respuesta;
			if (error) throw error;
			return data;
		} catch (error) {
			throw error;
		}
	};

	const obtenerProductoPorId = async (id) => {
		try {
			const { data, error } = await supabaseConexion
				.from(tabla)
				.select("*")
				.eq("id", id);
			if (error) throw error;
			return data;
		} catch (error) {
			throw error;
		}
	};

	return {
		obtenerListado,
		filtrarListado,
		obtenerProductoPorId,
	};
};

export default useProductosSupabase;
