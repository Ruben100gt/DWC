import { supabaseConexion } from "../supabase/supabase.js";

const useProductosSupabase = () => {
	const obtenerListado = async () => {
		try {
			const { data, error } = await supabaseConexion
				.from("productos")
				.select("*");
			if (error) throw error;
			return data;
		} catch (error) {
			throw error;
		}
	};

	return obtenerListado;
};

export default useProductosSupabase;
