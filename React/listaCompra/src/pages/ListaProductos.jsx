import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import { contextoProductos } from '../context/ProveedorProductos.jsx';
import Producto from './Producto.jsx';
import MenuFiltros from '../menu/submenu/MenuFiltros.jsx';
import './ListaProductos.css';

const ListaProductos = () => {
	const navigate = useNavigate();
	const { sesionIniciada } = useContext(contextoSesion);

	const { productosFiltro, totalProductos, precioMedio, filtrarProductos, ordenarProductos, limpiarFormulario } =
		useContext(contextoProductos);

	const [tipoFiltro, setTipoFiltro] = useState('nombre');

	const formatearDinero = (cantidad) => {
		return Number(cantidad).toLocaleString('es-ES', {
			style: 'currency',
			currency: 'EUR',
		});
	};

	const irACrear = () => {
		limpiarFormulario();
		navigate('/productos/crear');
	};

	return (
		<div className="contenedor-principal">
			<section className="seccion-listado" style={{ flex: 1 }}>
				<div className="caja-acciones">
					{sesionIniciada ? (
						<>
							<MenuFiltros
								tipoFiltro={tipoFiltro}
								setTipoFiltro={setTipoFiltro}
								filtrarProductos={filtrarProductos}
								ordenarProductos={ordenarProductos}
								total={totalProductos}
								precioMedio={precioMedio}
								formatearDinero={formatearDinero}
							/>

							<div className="fila-inferior" style={{ justifyContent: 'flex-end', marginTop: '10px' }}>
								<button className="btn-crear" onClick={irACrear}>
									Crear producto
								</button>
							</div>
						</>
					) : (
						<p className="mensaje-sesion">Inicia sesión para ver opciones.</p>
					)}
				</div>

				<h3>Listado de productos.</h3>

				<div className="grid-productos">
					{productosFiltro.map((p) => (
						<Producto key={p.id} datos={p} />
					))}
					{productosFiltro.length === 0 && (
						<p style={{ textAlign: 'center', marginTop: '20px' }}>No se han encontrado productos.</p>
					)}
				</div>
			</section>
		</div>
	);
};

export default ListaProductos;
