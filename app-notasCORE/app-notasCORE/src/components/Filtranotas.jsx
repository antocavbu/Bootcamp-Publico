import React, { useState } from 'react';
const FiltrarNotas = ({handleFiltro}) => {
    const opciones = [
        { value: 'todo', label: 'Todo' },
        { value: 'alta', label: 'Alta' },
        { value: 'media', label: 'Media' },
        { value: 'baja', label: 'Baja' },
      ];
    
      return (
        <div>
          <select onChange={handleFiltro}>
            {opciones.map((opcion) => (
              <option key={opcion.value} value={opcion.value}>
                {opcion.label}
              </option>
            ))}
          </select>
        </div>
      );
    };


export default FiltrarNotas;