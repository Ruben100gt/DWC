import React, { useState, useEffect } from 'react';
import './App.css';
import Rutas from './routes/Rutas.jsx';
import Pie from './estructura/Pie.jsx';
import Cabecera from './estructura/Cabecera.jsx';
import Contenido from './estructura/Contenido.jsx';

function App() {
	'use strict';

	return (
		<>
			<Cabecera />

			<Contenido>
				<Rutas />
			</Contenido>

			<Pie />
		</>
	);
}

export default App;
