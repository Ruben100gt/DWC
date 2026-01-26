import React from "react";
import Cabecera from "./estructura/Cabecera.jsx";
import Rutas from "./routes/Rutas.jsx";
import Pie from "./estructura/Pie.jsx";

const App = () => {
	return (
		<>
			<Cabecera />
			<Rutas />
			<Pie />
		</>
	);
};

export default App;
