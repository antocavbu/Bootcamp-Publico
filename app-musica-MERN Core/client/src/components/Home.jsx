import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => { // Componente para la página de inicio
  return (
    <div className="container mt-5">
      <div className="container">
        <h1 className="display-6">Bienvenido a la App de Música</h1>
        <p className="blockquote">Explora y gestiona tus canciones favoritas.</p>
      
        <p>Utiliza la barra de navegación para explorar esta nueva app.</p>
        
      </div>
    </div>
  );
}

export default Home;