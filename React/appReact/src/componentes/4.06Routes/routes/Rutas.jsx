import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Contacto from "../pages/Contacto";
import AcercaDe from "../pages/AcercaDe";
import Productos from "../pages/Productos";
import Error from "../pages/Error";

const Rutas = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/acerca-de" element={<AcercaDe />} />
				<Route path="/productos" element={<Productos />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default Rutas;
