import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProveedorNotificaciones from './context/ProveedorNotificaciones.jsx';
import ProveedorSesion from './context/ProveedorSesion.jsx';
import Cabecera from './estructura/Cabecera.jsx';
import Rutas from './routes/Rutas.jsx';
import Pie from './estructura/Pie.jsx';

const App = () => {
	return (
		<BrowserRouter>
			<ProveedorNotificaciones>
				<ProveedorSesion>
					<Cabecera />
					<Rutas />
					<Pie />
				</ProveedorSesion>
			</ProveedorNotificaciones>
		</BrowserRouter>
	);
};

export default App;
