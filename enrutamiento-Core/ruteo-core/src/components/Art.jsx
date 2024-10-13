import { Link, useNavigate, useParams } from "react-router-dom"
// objeto que contiene los datos de obras identificadas con id unico
const obras = {
    "1": { nombre: "Fuera de este mundo", imagen: "/src/assets/Fueradeestemundo.jpg" },
    "2": { nombre: "Pacientes Holograficos", imagen: "/src/assets/Pacientes.jpg" },
    "3": { nombre: "Lo Alto del Dinero", imagen: "/src/assets/money.jpg" },
    "4": { nombre: "Nada como la privacidad del Hogar", imagen: "/src/assets/hogar.jpg" },
    "5": { nombre: "Moverse en la Ciudad", imagen: "/src/assets/moverseciudad.jpg" },
    "6": { nombre: "Diversión en otro planeta", imagen: "/src/assets/diversion.jpg" },
    "7": { nombre: "Espectáculo de la Galaxia", imagen: "/src/assets/galaxia.jpg" },
    "8": { nombre: "Taxistas", imagen: "/src/assets/taxistas.jpg" }
}

const Arte = () => {
    const { id } = useParams() // para obtener el id
    const arte = obras[id];
    const navigate = useNavigate(); // para actualizar la ruta segun el boton que se utilice
    const siguienteObra = () => { 
        navigate(`/art/${parseInt(id) + 1}`)
    }
    const anteriorObra = () => {
        navigate(`/art/${parseInt(id) - 1}`)
    }
    
    // en el caso de que no exista la ruta por ser un id inexistente, se redirige a la ruta home
    if (!arte) {
        return (
            <div>
                <h1>Arte no encontrado</h1>
                <h2><Link to="/home">Volver al Home</Link></h2>
            </div>
         );
    }

    return (
    <> 
        <div className="contenedor-art">
            <h1>{arte.nombre}</h1>
            <img src= {arte.imagen} alt={arte.nombre} />
        </div>
        <div>
            <button onClick={anteriorObra} >Anterior</button> 
            <button onClick= {() => navigate("/home")}> Inicio </button>
            <button onClick= {siguienteObra}>Siguiente</button>
        </div>
    </>
        
    )
    

    
}

export default Arte;