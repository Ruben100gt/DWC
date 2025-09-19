import React from "react";
import "./Feos.css";

const Feos = (props) => {
  // JacaScript
  let saludo = "Hola";
  console.log(props);

  return (
    <>
      <div>{saludo}</div>
      <div>
        {props.nombre} {props.apellidos} con un tamaño de {props.tamanyo}
      </div>
      <div>Esto es el valor de children: {props.children}</div>
      <div className='feos_alerta'>Feos</div>
    </>
  );
};

export default Feos;
