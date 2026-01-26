import { supabaseConexion } from "../supabase/supabase.js";

const useSupabase = () => {
	const registro = (email, password, nombre) => {
		return supabaseConexion.auth.signUp({
			email,
			password,
			options: { data: { name: nombre } },
		});
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
