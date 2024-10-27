import React, { useState } from 'react';

const CrearPlaylist = ({ agregarPlaylist }) => { // Recibe la función agregarPlaylist como prop
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (event) => { // Define la función handleSubmit
    event.preventDefault();

    const nuevaPlaylist = { // objeto inicializado con los valores de los estados
      nombre,
      descripcion,
    };

    try {
        await agregarPlaylist(nuevaPlaylist); // Llama a la función agregarPlaylist pasada como prop
        alert('Playlist creada exitosamente');
        setNombre('');
        setDescripcion('');
      } catch (error) {
        console.error('Error al crear la playlist:', error);
        alert('Error al crear la playlist');
      }
  };

  return (
    <div className="container mt-5">
      <h2>Crear Nueva Playlist</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <textarea
            className="form-control"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Crear Playlist</button>
      </form>
    </div>
  );
};

export default CrearPlaylist;