import React, { useState } from 'react';
import './MiComponente.css';

const Comprar = (props) => {
  const {cantidad}  = props;
  const [contador, setContador] = useState(cantidad);
  const agregarCarrito = () => {
    contador > 0 && setContador(contador - 1)
  } ;
 
  return (
    <div className="divComprar">
      <h4 className={contador===0 ? 'agotado' : ''} id='stock'>{contador === 0 ? 'Agotado' : `Stock: ${contador}`}</h4>
      <button onClick={agregarCarrito} disabled={contador === 0} className={contador === 0 ? 'disabled' : ''}>Comprar</button>
    </div>
  );
}

export default Comprar;