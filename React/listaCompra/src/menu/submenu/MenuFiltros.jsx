import React from 'react';
import './MenuFiltros.css';

const MenuFiltros = ({
	tipoFiltro,
	setTipoFiltro,
	filtrarProductos,
	ordenarProductos,
	total,
	precioMedio,
	formatearDinero,
}) => {
	return (
		<div className="contenedor-filtros">
			<div className="fila-filtros">
				<div className="grupo-input">
					<label>Buscar por:</label>
					<div className="control-filtro">
						<select className="select-filtro" value={tipoFiltro} onChange={(e) => setTipoFiltro(e.target.value)}>
							<option value="nombre">Nombre</option>
							<option value="precio">Precio máx</option>
							<option value="peso">Peso máx</option>
						</select>
						<input
							className="input-buscar"
							type={tipoFiltro === 'nombre' ? 'text' : 'number'}
							placeholder="Escribe..."
							onChange={(e) => filtrarProductos(tipoFiltro, e.target.value)}
						/>
					</div>
				</div>

				<div className="grupo-input">
					<label>Ordenar:</label>
					<select className="select-filtro" onChange={(e) => ordenarProductos(e.target.value)}>
						<option value="">Defecto</option>
						<option value="nombre">Nombre</option>
						<option value="precio">Precio</option>
						<option value="peso">Peso</option>
					</select>
				</div>
			</div>

			{total !== undefined && (
				<div className="resumen-datos">
					<span>
						Total: <strong>{total}</strong>
					</span>
					{precioMedio && (
						<span>
							Media: <strong>{formatearDinero(precioMedio)}</strong>
						</span>
					)}
				</div>
			)}
		</div>
	);
};

export default MenuFiltros;
