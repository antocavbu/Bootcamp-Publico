import { useState } from "react";
// states y variables
const prioridades = ['Baja', 'Media', 'Alta'];
const Generarnota = ({agregarNota}) => {
    const [nota, setNota] = useState({ texto: '', prioridad: '' });
    const [error,setError] = useState("");

// Eventos
    // para registrar los cambios en el input
    const handleChange= (event) => {
        const {name, value} = event.target;
        setNota({
            ...nota,
            [name]: value
        });
    };

    // manejar errores y si esta todo ok guardar la nota en el state para que luego se pueda listar
    const handleSubmit= (event) => {
        event.preventDefault();
        if (nota.texto.trim() === "") {
            setError("Debes escribir un mensaje");
        } else if (nota.prioridad !== 'Baja' && nota.prioridad !== 'Media' && nota.prioridad !== 'Alta') {
            setError("Debes seleccionar una prioridad");
        } else {
        setError("");
        agregarNota(nota);
        setNota({ texto: '', prioridad: '' });
        document.querySelector('input[name="texto"]').value = "";
        }
    };
// JSX  
    return (
      <>  
        <form onSubmit = {handleSubmit}>
            <input 
                type="text" 
                name="texto" 
                placeholder="Escribe tu nota"
                onChange={handleChange}
            />
            
            <select
                name="prioridad"
                value={nota.prioridad}
                onChange={handleChange}
                >
                <option value="">Seleccione una prioridad</option>
                {prioridades.map((prioridad, index) => (
                    <option key={index} value={prioridad}>
                    {prioridad}
                    </option>
                ))}
            </select>
            
            <button className="agregarNota" type="submit" > Agregar Nota </button>
            {error && <div className="error">{error}</div>}
        </form>
    
        
    </>
    );
};

export default Generarnota;
