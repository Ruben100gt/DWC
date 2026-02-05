import { supabaseConexion } from "../supabase/supabase.js";

const useSupabase = () => {
	// ---------------------------------------------------------------------------
	// Hacer lo mismo que useTablaSupabase (una función para hacer la llamada a supabase y desde cada una de las otras funciones le pasas la consulta)
	const registro = async (email, password, nombre) => {
		try {
			const { data, error } = await supabaseConexion.auth.signUp({
				email,
				password,
				options: { data: { name: nombre } },
			});
			if (error) throw error;
			return data;
		} catch (error) {
			throw error;
		}
	};

	const iniciarSesion = async (email, password) => {
		try {
			const { data, error } = await supabaseConexion.auth.signInWithPassword({
				email,
				password,
			});
			if (error) throw error;
			return data;
		} catch (error) {
			throw error;
		}
	};

	const cerrarSesion = async () => {
		try {
			const { error } = await supabaseConexion.auth.signOut();
			if (error) throw error;
		} catch (error) {
			throw error;
		}
	};

	const obtenerSesion = async () => {
		try {
			const { data, error } = await supabaseConexion.auth.getSession();
			if (error) throw error;
			return data.session;
		} catch (error) {
			throw error;
		}
	};

	const suscribirse = (callback) => {
		try {
			const { data } = supabaseConexion.auth.onAuthStateChange(
				(event, session) => {
					callback(session ? session.user : null);
				},
			);
			return data;
		} catch (error) {
			throw error;
		}
	};

	return { registro, iniciarSesion, cerrarSesion, obtenerSesion, suscribirse };
};

export default useSupabase;
