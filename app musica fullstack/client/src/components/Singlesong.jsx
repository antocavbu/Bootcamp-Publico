import {getSongById} from '../api/songsServices.js'
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import '../styles/Songs.css'

const Singlesong = () => {
    const {id} = useParams();
    const [song, setSong] = useState(null);
    useEffect(() => {
        const fetchSong = async () => {
          try {
            const songData = await getSongById(id);
            console.log('Fetched song data:', songData); // Debugging
            setSong(songData);
          } catch (error) {
            console.error('Error fetching song:', error);
          }
        };
        fetchSong();
      }, [id]);
    if (!song) {
        return <h1>Loading...</h1>
    }
    return (
        <div className='form-container'>
            <h2>{song.title} - {song.artist}</h2>
            <h3>Album: {song.album}</h3>
            <h3>Year: {song.year}</h3>
            <h3>Genre: {song.genre}</h3>
            <Link className="click-aqui" to="/songs">Back to songs</Link>
        </div>
    )
}

export default Singlesong;
            