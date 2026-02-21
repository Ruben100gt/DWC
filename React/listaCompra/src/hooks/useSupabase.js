import { supabaseConexion } from '../supabase/supabase.js';

const useSupabase = () => {
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
			const { data } = supabaseConexion.auth.onAuthStateChange((event, session) => {
				callback(session ? session.user : null);
			});
			return data;
		} catch (error) {
			throw error;
		}
	};

	const obtenerRolUsuario = async (idUsuario) => {
		try {
			const { data, error } = await supabaseConexion.from('roles').select('rol').eq('id_rol', idUsuario).single();

			if (error) throw error;
			return data.rol;
		} catch (error) {
			console.error('Error al obtener el rol:', error.message);
			return null;
		}
	};

	const obtenerPerfil = async (idUsuario) => {
		try {
			const { data, error } = await supabaseConexion
				.from('perfiles')
				.select('nombre, avatar_url, descripcion')
				.eq('id_perfil', idUsuario)
				.single();
			if (error) throw error;
			return data;
		} catch (error) {
			console.error('Error al obtener el perfil:', error.message);
			return null;
		}
	};

	const actualizarPerfil = async (idUsuario, nombre, avatar_url, descripcion) => {
		try {
			const { error } = await supabaseConexion
				.from('perfiles')
				.update({ nombre, avatar_url, descripcion })
				.eq('id_perfil', idUsuario);
			if (error) throw error;
			return true;
		} catch (error) {
			throw error;
		}
	};

	const obtenerTodosLosUsuarios = async () => {
		try {
			const { data, error } = await supabaseConexion.from('perfiles').select(`
                    id_perfil, 
                    nombre, 
                    avatar_url, 
                    roles (rol, correo)
                `);

			if (error) throw error;
			return data;
		} catch (error) {
			console.error('Error al obtener usuarios:', error.message);
			return [];
		}
	};

	const cambiarRolUsuario = async (idUsuario, nuevoRol) => {
		try {
			const { error } = await supabaseConexion.from('roles').update({ rol: nuevoRol }).eq('id_rol', idUsuario);

			if (error) throw error;
			return true;
		} catch (error) {
			throw error;
		}
	};

	return {
		registro,
		iniciarSesion,
		cerrarSesion,
		obtenerSesion,
		suscribirse,
		obtenerRolUsuario,
		obtenerPerfil,
		actualizarPerfil,
		obtenerTodosLosUsuarios,
		cambiarRolUsuario,
	};
};

export default useSupabase;
