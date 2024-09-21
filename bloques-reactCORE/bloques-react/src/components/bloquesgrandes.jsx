import './bloquesgrandes.css'
import './bloqueschicos.jsx'
import { BloqueAzul, BloqueVerde } from './bloqueschicos.jsx';
const BloqueAmarillo = () => {
    return (
        <div className='bloqueAmarillo'> </div>
    );
}

const BloqueFucsia = () => {
    return (
        <div className='bloqueFucsia'> 
        <BloqueAzul/>
        <BloqueAzul/>
        <BloqueAzul/>
        <BloqueVerde/> 
        </div>
    );
}

const BloqueCeleste = () => {
    return (
        <div className='bloqueCeleste'>  </div>
    );
}   


export { BloqueAmarillo, BloqueFucsia, BloqueCeleste };

