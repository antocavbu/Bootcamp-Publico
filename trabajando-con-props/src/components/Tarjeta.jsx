import Comprar from './MiComponente';
import './Tarjeta.css'
const TarjetaProducto = (props) => {
    const {nombre, precio,descripcion} = props;
    
    return (
        <>
            <div className="card">
                    <h2 className="card-title">{nombre}</h2>
                    <p className="precio">{precio}</p>
                    <p className="descripcion">{descripcion}</p>
                    <Comprar cantidad = {Math.floor(Math.random() * 10)} />
            </div>
        </>
    );
}

export default TarjetaProducto