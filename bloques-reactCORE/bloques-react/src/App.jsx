import './App.css'
import { BloqueAmarillo, BloqueFucsia, BloqueCeleste } from './components/bloquesgrandes.jsx'

function App() {

  return (
    <>
      <div className='bloqueGris'> 
        <BloqueAmarillo />
        <BloqueFucsia />
        <BloqueCeleste />
      </div>
    </>
  );
}

export default App;
