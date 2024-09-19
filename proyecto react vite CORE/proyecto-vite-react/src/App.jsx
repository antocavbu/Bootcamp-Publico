import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h1> ¡Bienvenido/a a mi aplicación de React! </h1>
      <ul className='listaPorHacer'>
          <h2> Lista de cosas por hacer :</h2>
          <li> Aprender React </li>
          <li> Practicar con Vite </li>
          <li> Construir proyectos inscríbles </li>
      </ul>
    </section>
  )
}

export default App
