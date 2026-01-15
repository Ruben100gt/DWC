import React, { useContext } from "react";
import { ContextoDiscentes } from "../context/ProveedorDiscentes.jsx";

const useDiscentes = () => {
  /**
   * Hook personalizado para consumir el contexto de Discentes de forma segura.
   * Lanza un error si se intenta usar fuera de su proveedor.
   */
  const contexto = useContext(ContextoDiscentes);

  if (!contexto) {
    throw new Error(
      "El hook useDiscentes debe ser utilizado dentro de <ProveedorDiscentes>."
    );
  }

  return contexto;
};

export default useDiscentes;
