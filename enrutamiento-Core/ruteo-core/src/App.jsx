
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio'
import Art from './components/Art'


const App = () => (
 // ruteo de los componentes del proyecto
  <Router>
    <Routes>
      <Route path="/home" element={<Inicio />} />
      <Route path="/art/:id" element={<Art />} />
    </Routes>
  </Router>
);

export default App
