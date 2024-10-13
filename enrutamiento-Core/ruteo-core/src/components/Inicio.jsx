import { Link} from 'react-router-dom';

const obras =[
    {nombre: "Fuera de este mundo", ruta:1},
    {nombre: "Pacientes Holográficos", ruta:2},
    {nombre: "Lo Alto del Dinero", ruta:3},
    {nombre: "Nada como la privacidad del Hogar", ruta:4},
    {nombre: "Moverse en la Ciudad", ruta:5},
    {nombre: "Diversión en otro planeta", ruta:6},
    {nombre: "Espectáculo de la Galaxia", ruta:7},
    {nombre: "Taxistas", ruta:8}
];
const Inicio = () => (
    <div>
        <h1>Bienvenido a la Galería de Arte</h1>
        <ul>
            { obras.map((obra) => (
                <li key={obra.ruta}>
                    <Link to={`/art/${obra.ruta}`} className="art-link">{obra.nombre}</Link>
                </li>
            ))}
        </ul>
        
    </div>
)

    
export default Inicio;

 