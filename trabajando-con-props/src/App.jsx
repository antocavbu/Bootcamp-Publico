import './App.css'
import TarjetaProducto from './components/Tarjeta.jsx'

function App() {
  
  return (
    <>
      <h1> TechStore - Tu Destino para la Mejor Tecnología</h1>
      <TarjetaProducto nombre="Laptop" precio=" $ 1500"stock="En stock" descripcion="Una potente lapto para trabajar y jugar"/>
      <TarjetaProducto nombre="Smartphone" precio="$ 800"stock="Agotado"  descripcion=" Smarthphone de última generaciónn con una de las mejores cámaras"/>
      <TarjetaProducto nombre="Auriculares"precio="$ 200"stock="En stock" descripcion="Auriculares con cancelación de ruido. No escucharás nada a tu alrededor"/>
      <TarjetaProducto nombre="Monitor"precio="$ 300"stock="En stock"  descripcion="Monitor 4K para una experiencia visual increíble"/>
    </> 
  )
}

export default App
