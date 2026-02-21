import React, { useContext, useState } from 'react';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import { contextoListas } from '../context/ProveedorListas.jsx';
import Confirmacion from './Confirmacion.jsx';
import './Compra.css';

const Compra = ({ datos, alSeleccionar }) => {
	if (!datos) return null;

	const { sesionIniciada, usuario } = useContext(contextoSesion);
	const { borrarLista } = useContext(contextoListas);

	const [confirmandoBorrado, setConfirmandoBorrado] = useState(false);

	const fecha = new Date(datos.fecha_creacion).toLocaleDateString('es-ES');

	const imagenLista =
		'https://thumbs.dreamstime.com/b/peque%C3%B1a-rata-gris-gracioso-lleva-carro-de-compras-lleno-verduras-frescas-la-compra-aisladas-en-fondo-blanco-167766727.jpg';

	const confirmarBorrado = () => {
		borrarLista(datos.id);
		setConfirmandoBorrado(false);
	};

	const manejarClickBorrar = (e) => {
		e.stopPropagation();
		setConfirmandoBorrado(true);
	};

	return (
		<div className="tarjeta-lista">
			<div className="zona-interactiva" onClick={alSeleccionar}>
				<div className="contenedor-imagen-lista">
					<img src={imagenLista} alt="Icono Lista" className="foto-lista-grande" />
				</div>

				<div className="info-lista">
					<h4 className="titulo-lista">{datos.nombre_lista}</h4>
					<p className="fecha-lista">Creada: {fecha}</p>
				</div>
			</div>

			<div className="acciones-tarjeta">
				<button className="btn-ver-lista" onClick={alSeleccionar}>
					Ver Productos
				</button>

				{sesionIniciada && usuario?.id === datos.propietario_id && (
					<button className="btn-borrar-lista" onClick={manejarClickBorrar}>
						Borrar
					</button>
				)}
			</div>

			{confirmandoBorrado && (
				<Confirmacion
					mensaje={`¿Borrar la lista "${datos.nombre_lista}"?`}
					textoBoton="Sí"
					onConfirmar={confirmarBorrado}
					onCancelar={() => setConfirmandoBorrado(false)}
				/>
			)}
		</div>
	);
};

export default Compra;
