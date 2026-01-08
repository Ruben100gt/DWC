import React, { useState, useEffect } from 'react';
import './App.css';
import Rutas from './routes/Rutas.jsx';
import Pie from './estructura/Pie.jsx';
import Cabecera from './estructura/Cabecera.jsx';
import Contenido from './estructura/Contenido.jsx';

function App() {
	const [listaDiscos, setListaDiscos] = useState(() => {
		if (typeof Storage !== 'undefined') {
			return JSON.parse(localStorage.getItem('coleccionDiscos')) || [];
		}
		console.error('Este navegador no soporta la API localStorage.');
		return [];
	});

	useEffect(() => {
		if (typeof Storage !== 'undefined') {
			localStorage.setItem('coleccionDiscos', JSON.stringify(listaDiscos));
		}
	}, [listaDiscos]);

	return (
		<>
			<Cabecera />

			<Contenido>
				<Rutas listaDiscos={listaDiscos} setListaDiscos={setListaDiscos} />
			</Contenido>

			<Pie />
		</>
	);
}

export default App;
