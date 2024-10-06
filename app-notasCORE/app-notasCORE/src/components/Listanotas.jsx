import { useState } from "react";
import React from 'react';


const Listanotas = ({ notas, eliminarNota}) => {
  
    const ListaNotas = notas.map((nota, index) => (
      <div key={index} className='notaguardada'>
        <p>{nota.texto} - {nota.prioridad}</p>
        <button className='eliminar'  onClick={() => eliminarNota(index)}> Eliminar</button>
      </div>
    ));
  
    return (
      <div>
        {ListaNotas}
      </div>
    );
  };
  
  export default Listanotas;