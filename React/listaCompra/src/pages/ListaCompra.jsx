import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import { contextoListas } from '../context/ProveedorListas.jsx';
import { contextoProductos } from '../context/ProveedorProductos.jsx';
import MenuFiltros from '../menu/submenu/MenuFiltros.jsx';
import Producto from './Producto.jsx';
import Compra from './Compra.jsx';
import './ListaCompra.css';

const ListaCompra = () => {
	const navigate = useNavigate();
	const { sesionIniciada, rolUsuario } = useContext(contextoSesion);

	const {
		listas,
		articulos,
		lista,
		obtenerLista,
		crearNuevaLista,
		crearNuevoArticulo,
		borrarArticulo,
		limpiarFormularioLista,
		precioLista,
		pesoLista,
		cocheNecesario,
		totalArticulos,
	} = useContext(contextoListas);

	const { productosFiltro, filtrarProductos, ordenarProductos } = useContext(contextoProductos);

	const [nombreNueva, setNombreNueva] = useState('');
	const [tipoFiltro, setTipoFiltro] = useState('nombre');

	useEffect(() => {
		limpiarFormularioLista();
	}, []);

	const manejarCrearLista = () => {
		if (!nombreNueva.trim()) return;
		crearNuevaLista({ nombre: nombreNueva });
		setNombreNueva('');
	};

	const gestionarCantidad = (producto, cantidadCambio) => {
		crearNuevoArticulo({
			lista_id: lista.id,
			producto_id: producto.id,
			cantidad: cantidadCambio,
		});
	};

	const eliminarDeCesta = (idArticulo) => {
		borrarArticulo(idArticulo);
	};

	const irAGestionarProductos = () => {
		navigate('/productos');
	};

	const cerrarLista = () => {
		limpiarFormularioLista();
	};

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
			<section className="listado-seccion">
				{!lista.id ? (
					<>
						{sesionIniciada && (
							<div className="acciones-listado">
								<input
									type="text"
									className="input-nueva-lista"
									placeholder="Nombre de la nueva lista..."
									value={nombreNueva}
									onChange={(e) => setNombreNueva(e.target.value)}
									onKeyDown={(e) => e.key === 'Enter' && manejarCrearLista()}
								/>
								<button className="btn-crear-lista" onClick={manejarCrearLista}>
									+ Crear Lista
								</button>
								{rolUsuario === 'administrador' && (
									<button className="btn-crear-lista" onClick={() => navigate('/admin/listas')}>
										Ver todas las Listas 👁️
									</button>
								)}
							</div>
						)}

						<h3>Mis Listas de la Compra</h3>

						<div className="grid-listas">
							{listas.map((l) => (
								<div key={l.id}>
									<Compra datos={l} alSeleccionar={() => obtenerLista(l.id)} />
								</div>
							))}

							{listas.length === 0 && <p className="mensaje-vacio">No tienes ninguna lista creada.</p>}
						</div>
					</>
				) : (
					<div className="vista-detalle">
						<div className="cabecera-detalle">
							<button className="btn-volver" onClick={cerrarLista}>
								← Volver a Mis Listas
							</button>
							<div className="info-titulo">
								<h2>{lista.nombre_lista}</h2>
								<div className="totales-badges">
									<span className="badge-precio">Total: {precioFormateado(precioLista)}</span>

									<span className="badge-peso">{formatearNumero(pesoLista)} kg</span>

									{cocheNecesario && <span className="aviso-coche">Necesita coche🚗</span>}
								</div>
							</div>
						</div>

						<div className="contenedor-columnas">
							<div className="columna-cesta">
								<div className="titulo-seccion-flex">
									<h4>Mi Cesta</h4>
									<span className="contador-items">{formatearNumero(totalArticulos)} unidades</span>
								</div>

								<div className="lista-items-cesta">
									{articulos.length === 0 && (
										<div className="cesta-vacia">
											<p>Tu cesta está vacía.</p>
										</div>
									)}

									{articulos.map((articulo) => {
										const p = articulo.productos;
										const nombre = p?.nombre || 'Producto no disponible';
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
													{sesionIniciada && (
														<button
															className="btn-eliminar-item"
															title="Quitar de la lista"
															onClick={() => eliminarDeCesta(articulo.id)}
														>
															❌
														</button>
													)}
												</div>
											</div>
										);
									})}
								</div>
							</div>

							<div className="columna-catalogo">
								<div className="cabecera-catalogo-flex">
									<button className="btn-gestion-mini" onClick={irAGestionarProductos}>
										Ir a Productos
									</button>
								</div>

								<MenuFiltros
									tipoFiltro={tipoFiltro}
									setTipoFiltro={setTipoFiltro}
									filtrarProductos={filtrarProductos}
									ordenarProductos={ordenarProductos}
								/>

								<div className="grid-catalogo">
									{productosFiltro.map((producto) => {
										const articuloEnLista = articulos.find((a) => a.producto_id === producto.id);
										const cantidadActual = articuloEnLista ? articuloEnLista.cantidad || 0 : 0;

										return (
											<Producto
												key={producto.id}
												datos={producto}
												modo="seleccion"
												cantidad={cantidadActual}
												incrementar={() => gestionarCantidad(producto, 1)}
												decrementar={() => gestionarCantidad(producto, -1)}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				)}
			</section>
		</div>
	);
};

export default ListaCompra;
