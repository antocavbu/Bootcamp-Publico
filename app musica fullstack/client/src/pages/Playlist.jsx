import React from "react";
import { Link , useNavigate} from "react-router-dom";
import '../styles/Songs.css';
import { useEffect } from "react";
import {getPlaylists } from '../api/playlistsServices.js';

const Playlist = ({ playlists,setPlaylists }) => {

  const navigate = useNavigate();
  const refreshPlaylists = async () => {
    try {
      const playlistsData = await getPlaylists();
      setPlaylists(playlistsData);
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };
    useEffect(() => {
      refreshPlaylists();
    }, [refreshPlaylists]);

  return (
    <div>
      <h1>Playlists</h1>
      {playlists.length === 0 ? (
        <div className="sinContenido">
          <h3>No hay playlists en la lista</h3>
          <Link to="/addplaylist">Crea una nueva Playlist aquí</Link>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Canciones</th>
              
            </tr>
          </thead>
          <tbody>
            {playlists.map(playlist => (
              <tr key={playlist.id}>
                <td><Link to={`/playlist/${playlist._id}`}> {playlist.name}  </Link></td>
                <td>{playlist.songs.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Playlist;