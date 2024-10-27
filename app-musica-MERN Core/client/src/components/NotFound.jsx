import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => { // Componente para mostrar la página de error 404
    const navigate = useNavigate();
    return (
        <div className="container mt-5 text-center">
            <h3>404</h3>
            <h3>Página no encontrada, vuelve al Home</h3>
            <button className="btn btn-primary" onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default NotFound;


