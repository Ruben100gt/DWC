import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { contextoListas } from '../context/ProveedorListas.jsx';
import fotoDefecto from '../assets/patitoFeo.jpg';
import './ListasAdmin.css';

const ListasAdmin = () => {
	const navigate = useNavigate();

	const {
		todasLasListas,
		cargarTodasLasListas,
		lista,
		articulos,
		obtenerLista,
		limpiarFormularioLista,
		precioLista,
		pesoLista,
		totalArticulos,
		cocheNecesario,
	} = useContext(contextoListas);

	useEffect(() => {
		limpiarFormularioLista();
		cargarTodasLasListas();
	}, []);

	const precioFormateado = (precio) => {
		return Number(precio || 0).toLocaleString('es-ES', {
			style: 'currency',
			currency: 'EUR',
			useGrouping: true,
		});
	};

	const formatearNumero = (numero) => {
		return Number(numero || 0).toLocaleString('es-ES', {
			useGrouping: true,
		});
	};

	return (
		<div className="principal-contenedor">
			{!lista.id ? (
				<section className="admin-listas-contenedor">
					<div className="admin-listas-cabecera">
						<h3>Panel de Administración: Todas las Listas</h3>
						<button className="btn-volver" onClick={() => navigate('/listacompra')}>
							Volver a Mis Listas
						</button>
					</div>

					<table className="tabla-admin">
						<thead>
							<tr>
								<th>Avatar</th>
								<th>Nombre de la Lista</th>
								<th>Propietario</th>
								<th>Fecha Creación</th>
								<th className="texto-centrado">Acciones</th>
							</tr>
						</thead>
						<tbody>
							{todasLasListas.map((l) => (
								<tr key={l.id}>
									<td>
										<img
											src={l.perfiles?.avatar_url || fotoDefecto}
											alt="Avatar"
											className="avatar-admin-tabla"
											onError={(e) => {
												e.target.src = fotoDefecto;
											}}
										/>
									</td>
									<td>
										<strong>{l.nombre_lista}</strong>
									</td>
									<td>{l.perfiles?.nombre || 'Desconocido'}</td>
									<td>{new Date(l.fecha_creacion).toLocaleDateString('es-ES')}</td>
									<td className="texto-centrado">
										<button className="btn-admin-listas btn-admin-listas-mini" onClick={() => obtenerLista(l.id)}>
											Ver Detalles
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>

					{todasLasListas.length === 0 && <p className="mensaje-vacio">No hay listas creadas en el sistema.</p>}
				</section>
			) : (
				<section className="listado-seccion">
					<div className="vista-detalle">
						<div className="cabecera-detalle">
							<button className="btn-volver" onClick={limpiarFormularioLista}>
								← Volver a todas las listas
							</button>
							<div className="info-titulo">
								<div className="contenedor-titulos">
									<h2>{lista.nombre_lista}</h2>
									<div className="propietario-detalle-flex">
										<img
											src={todasLasListas.find((l) => l.id === lista.id)?.perfiles?.avatar_url || fotoDefecto}
											alt="Avatar"
											className="avatar-mini-detalle"
											onError={(e) => {
												e.target.src = fotoDefecto;
											}}
										/>
										<p className="nombre-propietario-detalle">
											{todasLasListas.find((l) => l.id === lista.id)?.perfiles?.nombre || 'Desconocido'}
										</p>
									</div>
								</div>
								<div className="totales-badges">
									<span className="badge-precio">Total: {precioFormateado(precioLista)}</span>
									<span className="badge-peso">{formatearNumero(pesoLista)} kg</span>
									{cocheNecesario && <span className="aviso-coche">Necesita coche🚗</span>}
								</div>
							</div>
						</div>

						<div className="contenedor-columnas-admin">
							<div className="columna-cesta-admin">
								<div className="titulo-seccion-flex">
									<h4>Contenido de la Lista</h4>
									<span className="contador-items">{formatearNumero(totalArticulos)} unidades</span>
								</div>

								<div className="lista-items-cesta">
									{articulos.length === 0 && (
										<div className="cesta-vacia">
											<p>Esta lista está vacía.</p>
										</div>
									)}

									{articulos.map((articulo) => {
										const p = articulo.productos;
										const nombre = p?.nombre || 'Producto borrado';
										const imagen = p?.imagen_url || 'https://placehold.co/100?text=?';
										const precio = p?.precio || 0;

										return (
											<div key={articulo.id} className="item-cesta-simple">
												<div className="img-mini-contenedor">
													<img src={imagen} alt={nombre} />
												</div>
												<div className="info-cesta-simple">
													<span className="nombre-prod">{nombre}</span>
													<span className="precio-prod">{precioFormateado(precio)}</span>
												</div>
												<div className="controles-cesta-simple">
													<span className="badge-cantidad-cesta">x{formatearNumero(articulo.cantidad)}</span>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
	);
};

export default ListasAdmin;
