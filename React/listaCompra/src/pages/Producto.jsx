import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import { contextoProductos } from '../context/ProveedorProductos.jsx';
import Confirmacion from './Confirmacion.jsx';
import './Producto.css';

const Producto = ({ datos, modo = 'catalogo', cantidad = 0, incrementar, decrementar }) => {
	if (!datos) return null;

	const navigate = useNavigate();
	const { sesionIniciada } = useContext(contextoSesion);
	const { borrarProducto } = useContext(contextoProductos);
	const [confirmandoBorrado, setConfirmandoBorrado] = useState(false);

	const precioFormateado = Number(datos.precio || 0).toLocaleString('es-ES', {
		style: 'currency',
		currency: 'EUR',
		useGrouping: true,
	});

	const pesoFormateado = Number(datos.peso || 0).toLocaleString('es-ES', {
		useGrouping: true,
	});

	const imagenParaMostrar = datos.imagen_url || 'https://placehold.co/400?text=Sin+Foto';

	return (
		<div className={`producto-item ${cantidad > 0 ? 'producto-seleccionado' : ''}`}>
			<div className="contenedor-foto">
				<img src={imagenParaMostrar} alt={datos.nombre} className="foto-producto" />
			</div>

			<div className="info-producto">
				<h4>{datos.nombre}</h4>
				<p className="precio">{precioFormateado}</p>
				<p className="peso">Peso: {pesoFormateado}kg</p>

				{sesionIniciada && (
					<div className="acciones-producto">
						{modo === 'catalogo' && (
							<>
								<button className="btn-editar" onClick={() => navigate(`/productos/editar/${datos.id}`)}>
									Editar
								</button>
								<button className="btn-borrar" onClick={() => setConfirmandoBorrado(true)}>
									Borrar
								</button>
							</>
						)}

						{modo === 'seleccion' && (
							<div className="controles-cantidad">
								{cantidad === 0 ? (
									<button className="btn-anadir" onClick={incrementar}>
										Añadir
									</button>
								) : (
									<div className="columna-controles">
										<button className="btn-mas" onClick={incrementar}>
											+
										</button>
										<span className="numero-cantidad">{cantidad}</span>
										<button className="btn-menos" onClick={decrementar}>
											-
										</button>
									</div>
								)}
							</div>
						)}
					</div>
				)}
			</div>

			{confirmandoBorrado && (
				<Confirmacion
					mensaje={`¿Estás seguro que quieres borrar "${datos.nombre}"?`}
					onConfirmar={() => {
						borrarProducto(datos.id);
						setConfirmandoBorrado(false);
					}}
					onCancelar={() => setConfirmandoBorrado(false)}
				/>
			)}
		</div>
	);
};

export default Producto;
