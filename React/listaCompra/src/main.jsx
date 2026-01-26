import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProveedorNotificaciones from "./context/ProveedorNotificaciones.jsx";
import ProveedorSesion from "./context/ProveedorSesion.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<ProveedorNotificaciones>
				<ProveedorSesion>
					<App />
				</ProveedorSesion>
			</ProveedorNotificaciones>
		</BrowserRouter>
	</StrictMode>,
);
