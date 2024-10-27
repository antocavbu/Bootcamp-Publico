import { Routes, Route, Router } from 'react-router-dom';
import NotFound from './components/NotFound';
import ListaCanciones from './components/ListaCanciones';
import AgregarCancion from './components/AgregarCancion';
import CrearPlaylist from './components/CrearPlaylist';
import ListaPlaylists from './components/ListaPlaylist';
import DetallePlaylist from './components/DetallePlaylist';
import DetalleCancion from './components/DetalleCancion';
import Home from './components/Home';
import Navbar from './components/NavBar'; // Importa el componente de la barra de navegación
import { useEffect,useState } from 'react';
import axios from 'axios';
 

function App() {
  const [canciones, setCanciones] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  
  useEffect(() => {
    const cargarPlaylist= async () => {
      axios.get("http://localhost:8080/playlist")
      .then((respuesta) => {
        setPlaylists(respuesta.data);
        console.log(respuesta.data);
      })

    
    }
    const cargarCanciones= async () => {
      axios.get("http://localhost:8080/songs")
      .then((respuesta) => {
        setCanciones(respuesta.data);
        console.log(respuesta.data);
      })
    
    };
    cargarCanciones();
    cargarPlaylist();
  
}, []);


const agregarPlaylist = async (nuevaPlaylist) => {
  try {
    await axios.post("http://localhost:8080/create/playlist", nuevaPlaylist);
    // Actualiza las playlists después de agregar una nueva playlist
    const respuesta = await axios.get("http://localhost:8080/playlist");
    setPlaylists(respuesta.data);
  } catch (error) {
    console.error('Error al agregar la nueva playlist:', error);
  }
};

  return (
    <div>
      <Navbar /> 
      <main style={{ marginTop: '56px' }}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listaCanciones" element={<ListaCanciones canciones={canciones} playlists={playlists} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/agregarcancion" element={<AgregarCancion />} />
          <Route path="/agregarplaylist" element={<CrearPlaylist agregarPlaylist={agregarPlaylist}/>} />
          <Route path="/listaplaylist" element={<ListaPlaylists playlists={playlists} />} />
          <Route path="/playlist/:nombre" element={<DetallePlaylist />} />
          <Route path="/cancion/:title" element={<DetalleCancion />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;