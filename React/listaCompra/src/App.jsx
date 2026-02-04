import React from 'react';
import Cabecera from './estructura/Cabecera.jsx';
import Rutas from './routes/Rutas.jsx';
import Pie from './estructura/Pie.jsx';
import Notificaciones from './pages/Notificaciones.jsx';

const App = () => {
	return (
		<>
			<Cabecera />
			<Notificaciones />
			<Rutas />
			<Pie />
		</>
	);
};

export default App;
