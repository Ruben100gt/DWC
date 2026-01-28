import { supabaseConexion } from "../supabase/supabase.js";

const useSupabase = () => {
	const registro = async (email, password, nombre) => {
		try {
			const { data, error } = await supabaseConexion.auth.signUp({
				email,
				password,
				options: { data: { name: nombre } },
			});
			if (error) throw error;
			return { data };
		} catch (error) {
			throw error;
		}
	};

	const login = async (email, password) => {
		try {
			const { data, error } = await supabaseConexion.auth.signInWithPassword({
				email,
				password,
			});
			if (error) throw error;
			return { data };
		} catch (error) {
			throw error;
		}
	};

	const logout = async () => {
		try {
			const { error } = await supabaseConexion.auth.signOut();
			if (error) throw error;
		} catch (error) {
			throw error;
		}
	};
	return { registro, login, logout };
};

export default useSupabase;
