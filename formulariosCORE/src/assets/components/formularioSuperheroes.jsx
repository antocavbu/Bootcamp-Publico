import { useState } from 'react';
import './formularioSuperheroes.css';
import ListaSuper from './listaSuper.jsx';

const RegistroSuperheroes = () => {
    const [errorFormulario, setErrorFormulario] = useState(''); // para manejar estados de los formularios
    const [titulo, setTitulo] = useState('Registro de Superheroes'); // para manejar estado del titulo al enviar el formulario exitosamente
    const [persona, setPersona] = useState({  // para manejar estado de objeto inicial persona
        nombre:"",
        apellido:"",
        correo:"",
        contrasena:"",
        confirmarcontrasena:""
    });

    const [currentPerson,setCurrentPerson] = useState(persona); // para realizar una copia del estado actual
    const [registroSuper,setRegistroSuper] = useState([]); // para registrar los superheroes ingresados  en una lista

    const handleChange = (e) => { //para actualizar el valor del estado de current person de acuerdo a lo que registre el input correspondiente
        console.log(e)
        const { name, value } = e.target;
        setCurrentPerson({ ...currentPerson, [name]: value }); 
        console.log(currentPerson)
    } ;
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (currentPerson.nombre === '' || currentPerson.apellido === '' || currentPerson.correo === '' || currentPerson.contrasena === '' || currentPerson.confirmarcontrasena === '') {
            setErrorFormulario('Todos los campos son obligatorios');
            return;
        }
        if (currentPerson.nombre.length < 4 || currentPerson.apellido.length < 4 ) {
            setErrorFormulario('El nombre y el apellido deben tener al menos 4 caracteres');
            return;
        }
        if (currentPerson.correo.indexOf('@') === -1 || currentPerson.correo.length < 10) {
            setErrorFormulario('El correo debe tener al menos 10 caracteres y contener un @');
            return;
        }
        if (currentPerson.contrasena !== currentPerson.confirmarcontrasena || currentPerson.contrasena.length < 12 || currentPerson.confirmarcontrasena.length < 12) {
            setErrorFormulario('Las contrasenas no coinciden.Recuerda que tu contraseña debe tener 12 caracteres o mas');
            return;
        }
        setErrorFormulario('');
        const nuevoRegistro = { ...currentPerson };
        // Agregar el nuevo registro al array de registroSuper
        setRegistroSuper([...registroSuper, nuevoRegistro]);
        console.log(registroSuper);
        // Resetear los campos del formulario
        setCurrentPerson({
            nombre: '',
            apellido: '',
            correo: '',
            contrasena: '',
            confirmarcontrasena: ''});
        setTitulo('Registro exitoso!');  // titulo que cambia al realizar un nuevo registro
        setTimeout(() => {
            setTitulo('Registro de Superheroes');}, 3000);
        }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1> Bienvenido a la Liga de Superheroes </h1>
                <h2> {titulo} </h2>
                {errorFormulario && <p style={{ color: 'red' }}>{errorFormulario}</p>}
                <label htmlFor="nombre">Nombre:</label>
                <input
                    name="nombre"
                    type="text"
                    value={currentPerson.nombre}
                    id="nombre"
                    onChange={handleChange}
                />
                <label htmlFor="apellido">Apellido:</label>
                <input
                    name="apellido"
                    type="text"
                    value={currentPerson.apellido}
                    id="apellido"
                    onChange={handleChange}
                />
                <label htmlFor="correoelectronico">Correo electronico:</label>
                <input
                    name="correo"
                    type="text"
                    value={currentPerson.correo}
                    id="correoelectronico"
                    onChange={handleChange}
                />

                <label htmlFor="contrasena">Contraseña:</label>
                <input
                    name="contrasena"
                    type="password"
                    id="contrasena"
                    value={currentPerson.contrasena} 
                    onChange={handleChange}
                />
                <label htmlFor="confirmacontrasena">Confirmar Contraseña:</label>
                <input
                    name="confirmarcontrasena"
                    type="password"
                    id="confirmacontrasena"
                    value={currentPerson.confirmarcontrasena}
                    onChange={handleChange}
                />
            
                <button className="botonEnviar" type="submit" onClick={handleSubmit}>Crear Superheroe</button>
            </form>
            <h3>Lista de Superheroes Registrados</h3>
            <ListaSuper registros ={[...registroSuper]} />
        </div>
    )       
};

export default RegistroSuperheroes;

