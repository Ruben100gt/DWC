import React from "react";
import { Outlet } from "react-router-dom";
import SubMenu from "../menu/submenu/SubMenu";
import "./Galeria.css";

const Galeria = () => {
	return (
		<>
			<h2>Galería de Películas:</h2>
			<SubMenu />
			<div />
			<Outlet />
		</>
	);
};

export default Galeria;
