import React, { useState, createContext } from "react";
import useProductos from "../hooks/useProductos.js";

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
	const [producto, setProducto] = useState(null);
};
