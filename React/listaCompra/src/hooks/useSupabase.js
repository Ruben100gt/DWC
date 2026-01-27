import { supabaseConexion } from "../supabase/supabase.js";

const useSupabase = () => {
	const registro = async (email, password, nombre) => {
		try {
			const { data, error } = await supabaseConexion.auth.signUp({
				email,
				password,
				options: { data: { name: nombre } },
			});
		} catch (error) {
			throw error;
		}
	};

	const login = (email, password) => {
		return supabaseConexion.auth.signInWithPassword({
			email,
			password,
		});
	};

	const logout = () => supabaseConexion.auth.signOut();

	return { registro, login, logout };
};

export default useSupabase;
