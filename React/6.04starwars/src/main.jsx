import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import ProveedorPeliculas from './context/ProveedorPeliculas.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<ProveedorPeliculas>
				<App />
			</ProveedorPeliculas>
		</BrowserRouter>
	</StrictMode>
);
