import React, { useEffect, useState, useContext } from 'react';
import useSupabase from '../hooks/useSupabase.js';
import useNotificacion from '../hooks/useNotificacion.js';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import fotoDefecto from '../assets/patitoFeo.jpg';
import './AdminRoles.css';

const AdminRoles = () => {
	const [usuarios, setUsuarios] = useState([]);
	const { obtenerTodosLosUsuarios, cambiarRolUsuario } = useSupabase();
	const { notificacion } = useNotificacion();
	const { usuario: usuarioActual } = useContext(contextoSesion);

	const cargarUsuarios = async () => {
		const datos = await obtenerTodosLosUsuarios();
		setUsuarios(datos);
	};

	useEffect(() => {
		cargarUsuarios();
	}, []);

	const manejarCambioRol = async (idUsuario, rolActual) => {
		if (idUsuario === usuarioActual.id) {
			notificacion('No puedes cambiarte el rol a ti mismo.', 'error');
			return;
		}

		const nuevoRol = rolActual === 'administrador' ? 'usuario' : 'administrador';

		try {
			await cambiarRolUsuario(idUsuario, nuevoRol);
			notificacion(`Usuario actualizado a ${nuevoRol}`, 'exito');
			cargarUsuarios();
		} catch (error) {
			notificacion('Error al cambiar el rol', 'error');
		}
	};

	return (
		<div className="principal-contenedor">
			<section className="admin-roles-seccion">
				<h2>Gestión de Usuarios</h2>
				<p>Puede cambiar los permisos de acceso de los usuarios.</p>

				<table className="tabla-roles">
					<thead>
						<tr>
							<th>Avatar</th>
							<th>Nombre</th>
							<th>Rol Actual</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{usuarios.map((u) => (
							<tr key={u.id_perfil}>
								<td>
									<img
										src={u.avatar_url || fotoDefecto}
										alt="Avatar"
										className="avatar-tabla"
										onError={(e) => {
											e.target.src = fotoDefecto;
										}}
									/>
								</td>
								<td>{u.nombre}</td>
								<td>
									<span className={`badge-rol ${u.roles?.rol}`}>{u.roles?.rol || 'Sin rol'}</span>
								</td>
								<td>
									<button className="btn-cambiar-rol" onClick={() => manejarCambioRol(u.id_perfil, u.roles?.rol)}>
										Hacer {u.roles?.rol === 'administrador' ? 'Usuario' : 'Admin'}
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</div>
	);
};

export default AdminRoles;
