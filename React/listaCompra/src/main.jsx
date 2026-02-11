import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProveedorNotificaciones from "./context/ProveedorNotificaciones.jsx";
import ProveedorSesion from "./context/ProveedorSesion.jsx";
import ProveedorProductos from "./context/ProveedorProductos.jsx";
import "./index.css";
import App from "./App.jsx";
import ProveedorListas from "./context/ProveedorListas.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<ProveedorNotificaciones>
				<ProveedorSesion>
					<ProveedorListas>
						<ProveedorProductos>
							<App />
						</ProveedorProductos>
					</ProveedorListas>
				</ProveedorSesion>
			</ProveedorNotificaciones>
		</BrowserRouter>
	</StrictMode>,
);
