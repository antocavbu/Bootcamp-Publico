import {Routes,Route} from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react';
import { getSongs } from './api/songsServices.js'; 
import { getPlaylists } from './api/playlistsServices.js';
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Songs from './pages/Songs'
import Playlist from './pages/Playlist'
import AddSongs from './pages/CrearSongs'
import AddPlaylist from './pages/CrearPlaylist'
import Singlesong from './components/Singlesong'
import Editsong from './components/Editsong'
import SinglePlaylist from './components/SinglePlaylist'
import EditPlaylist from './components/EditPlaylist'


const App = () => {

  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const songsData = await getSongs();
        setSongs(songsData);
        console.log(songsData);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    const fetchPlaylists = async () => {
      try {
        const playlistsData = await getPlaylists();
        setPlaylists(playlistsData);
        console.log(playlistsData);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    }
    fetchSongs();
    fetchPlaylists();
  }, []);

  return (
    <div>
      <NavBar />
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs songs={songs} setSongs={setSongs}/>} />
        <Route path="/playlist" element={<Playlist playlists={playlists} setPlaylists={setPlaylists}/>} />
        <Route path="/addsongs" element={<AddSongs songs={songs} setSongs={setSongs} />} />
        <Route path="/addplaylist" element={<AddPlaylist songs={songs} setPlaylists={setPlaylists}/>} />
        <Route path="/songs/:id" element={<Singlesong />} />
        <Route path="/songs/edit/:id" element={<Editsong setSongs={setSongs}/>}/>
        <Route path="/playlist/:id" element={<SinglePlaylist/>} />
        <Route path="/playlist/edit/:id" element={<EditPlaylist  songs={songs}setPlaylists={setPlaylists}/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
      </div>
    </div>
  )
}
export default App
