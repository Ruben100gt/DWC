import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import AcercaDe from "../pages/AcercaDe.jsx";
import Peliculas from "../pages/Peliculas.jsx";
import Interpretes from "../pages/Interpretes.jsx";
import Galeria from "../pages/Galeria.jsx";
import PeliculaDetalle from "../pages/PeliculaDetalle.jsx";
import Error from "../estructura/Error.jsx";
import GaleriaDirector from "../pages/GaleriaDirector.jsx";
import GaleriaTitulo from "../pages/GaleriaTitulo.jsx";
import GaleriaInterprete from "../pages/GaleriaInterprete.jsx";
import GaleriaTodas from "../pages/GaleriaTodas.jsx";

const Rutas = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/peliculas" element={<Peliculas />} />
				<Route path="/detallepeli/:id" element={<PeliculaDetalle />} />
				<Route path="/interpretes" element={<Interpretes />} />
				<Route path="/galeria" element={<Galeria />}>
					<Route path="/galeria/todas" element={<GaleriaTodas />} />
					<Route path="/galeria/titulo" element={<GaleriaTitulo />} />
					<Route path="/galeria/interprete" element={<GaleriaInterprete />} />
					<Route path="/galeria/director" element={<GaleriaDirector />} />
				</Route>
				<Route path="/acerca-de" element={<AcercaDe />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default Rutas;
