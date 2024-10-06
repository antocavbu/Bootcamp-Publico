import { useEffect, useState } from "react";
import Generarnota from "./Agreganotas";
import ListaNotas from "./Listanotas";
import FiltrarNotas from "./Filtranotas";



const MainNotas = () => {

    const [notas, setNotas] = useState([]);
    const agregarNota = (nota) => {
            setNotas([...notas, nota]);
        };
    const eliminarNota = (index) => {
        setNotas(notas.filter((nota, i) => i !== index));
    };
    
    const [notasFiltradas, setNotasFiltradas] = useState([]);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('todo');

    useEffect(() => {
        if (opcionSeleccionada === 'todo') {
          setNotasFiltradas(notas);
        } else {
            const notasFiltradas = notas.filter((nota) => {
              if (opcionSeleccionada === 'alta') return nota.prioridad.includes('Alta');
              if (opcionSeleccionada === 'media') return nota.prioridad.includes('Media');
              if (opcionSeleccionada === 'baja') return nota.prioridad.includes('Baja');
            });
            setNotasFiltradas(notasFiltradas);
          }
        }, [notas, opcionSeleccionada]);
      const handleFiltro = (event) => {
        setOpcionSeleccionada(event.target.value);
      }
        return (
            <div>
                <h1> Notas </h1>  
                <Generarnota  agregarNota={agregarNota}/> 
                <FiltrarNotas handleFiltro={handleFiltro} />
                <ListaNotas notas={notasFiltradas} eliminarNota={eliminarNota}/>
            </div>
        );
    };

export default MainNotas