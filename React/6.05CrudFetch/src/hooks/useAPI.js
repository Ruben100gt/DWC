import React, { useState } from "react";

export const useAPI = () => {
  /**
   * Estados para las fases de la comunicación con la API.
   */
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Función genérica para hacer solicitudes a la API pasado como parámetro.
   */
  const solicitud = async (url, options = {}) => {
    // 1 -> Se pone cargando = true y se borran los errores al comenzar la solicitud nueva.
    setCargando(true);
    setError(null);
    // 2 -> Se intenta hacer la solicitud.
    try {
      const respuesta = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          //...options.headers, -> Si es necesario añadir algo más a headers.
        },
        ...options,
      });
      // 3 -> Se controla el error en la respuesta.
      if (!respuesta.ok) {
        throw new Error(
          `Error en la solicitud ${respuesta.status}: ${respuesta.statusText}`
        );
      }
      // 4 -> Se convierten los datos a JSON.
      const datos = await respuesta.json();
      // 5 -> Se devuelven los datos (pasos 4 y 5 se pueden hacer juntos).
      return datos;
    } catch (error) {
      // 6 -> Si se ha producido error se cambia el estado y se lanza el error.
      setError(error.message || "Algo salió mal, feo.");
      throw error;
    } finally {
      // 7 -> Al terminar la comunicación (correcta o no) se quita el estado cargando.
      setCargando(false);
    }
  };

  // Función para GET.
  const obtener = (url) => {
    return solicitud(url, { method: "GET" });
  };

  // Función para POST.
  const guardar = (url, body) => {
    return solicitud(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
  };
    

  // Función para PUT.
  const editarPUT = (url, body) =>
    solicitud(url, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  // Función para PATCH.
  const editarPATCH = (url, body) =>
    solicitud(url, {
      method: "PATCH",
      body: JSON.stringify(body),
    });

  // Fución para DELETE.
  const borrar = (url) =>
    solicitud(url, {
      method: "DELETE",
    });

  return {
    cargando,
    error,
    obtener,
    guardar,
    editarPUT,
    editarPATCH,
    borrar,
  };
};

export default useAPI;
