import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { contextoProductos } from '../context/ProveedorProductos.jsx';
import useNotificacion from '../hooks/useNotificacion.js';
import './FormularioProducto.css';

const FormularioProducto = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const { crearNuevoProducto, editarProductoExistente, producto, limpiarFormulario, obtenerProducto } =
		useContext(contextoProductos);

	const { notificacion } = useNotificacion();

	const [form, setForm] = useState({
		nombre: '',
		descripcion: '',
		precio: '',
		peso: '',
		imagen_url: '',
	});

	useEffect(() => {
		if (id) {
			obtenerProducto(id);
		} else {
			limpiarFormulario();
			setForm({ nombre: '', descripcion: '', precio: '', peso: '', imagen_url: '' });
		}
	}, [id]);

	useEffect(() => {
		if (id && producto && producto.id == id) {
			setForm({
				...producto,
				descripcion: producto.descripcion || '',
				imagen_url: producto.imagen_url || '',
			});
		}
	}, [producto, id]);

	const actualizarInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const guardarDatos = async (e) => {
		e.preventDefault();

		const datosAEnviar = {
			nombre: form.nombre,
			descripcion: form.descripcion || '',
			// Convertimos a string y cambiamos comas a punto (para supabase).
			precio: form.precio.toString().replace(',', '.'),
			peso: form.peso.toString().replace(',', '.'),
			imagen_url: form.imagen_url || null,
		};

		try {
			if (id) {
				await editarProductoExistente(id, datosAEnviar);
			} else {
				await crearNuevoProducto(datosAEnviar);
			}
			navigate('/productos');
		} catch (error) {
			notificacion('Error al guardar el producto', 'error');
		}
	};

	return (
		<div className="formulario-contenedor formulario-pagina">
			<h4>{id ? 'Editar Producto' : 'Nuevo Producto'}</h4>

			<form onSubmit={guardarDatos}>
				<div className="campo">
					<label htmlFor="nombre">Nombre (Obligatorio):</label>
					<input
						type="text"
						name="nombre"
						value={form.nombre || ''}
						onChange={actualizarInput}
						required
						placeholder="Ej: Cuchillo"
					/>
				</div>

				<div className="campo">
					<label htmlFor="descripcion">Descripción (Opcional):</label>
					<textarea
						name="descripcion"
						value={form.descripcion || ''}
						onChange={actualizarInput}
						placeholder="Información extra..."
						rows="3"
						style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
					/>
				</div>

				<div className="campo">
					<label htmlFor="precio">Precio (€) (Obligatorio):</label>
					<input
						type="number"
						min="0"
						name="precio"
						value={form.precio || ''}
						onChange={actualizarInput}
						required
						placeholder="0.00"
					/>
				</div>

				<div className="campo">
					<label htmlFor="peso">Peso (g) (Obligatorio):</label>
					<input
						type="number"
						min="0"
						name="peso"
						value={form.peso || ''}
						onChange={actualizarInput}
						required
						placeholder="0"
					/>
				</div>

				<div className="campo">
					<label htmlFor="imagen_url">URL Imagen (Opcional):</label>
					<input
						type="text"
						name="imagen_url"
						value={form.imagen_url || ''}
						onChange={actualizarInput}
						placeholder="https://..."
					/>
				</div>

				<div className="botones-form">
					<button type="submit" className="btn-guardar">
						{id ? 'Guardar Cambios' : 'Crear Producto'}
					</button>
					<button type="button" className="btn-cancelar" onClick={() => navigate('/productos')}>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormularioProducto;
