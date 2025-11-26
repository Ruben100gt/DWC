import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import InsertarDiscos from '../pages/InsertarDiscos.jsx';
import Discos from '../pages/Discos.jsx';
import DiscosDetalle from '../pages/DiscosDetalle.jsx';
import Error from '../estructura/Error.jsx';

const Rutas = (props) => {
	const { listaDiscos, setListaDiscos } = props;
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route
					path="/insertardiscos"
					element={<InsertarDiscos listaDiscos={listaDiscos} setListaDiscos={setListaDiscos} />}
				/>
				<Route path="/discos" element={<Discos listaDiscos={listaDiscos} setListaDiscos={setListaDiscos} />} />
				<Route path="/detalledisco/:id" element={<DiscosDetalle listaDiscos={listaDiscos} />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default Rutas;
