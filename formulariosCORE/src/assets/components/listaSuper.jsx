import './formularioSuperheroes.css';
const ListaSuper = ({registros}) => {

    return (
        <div className='tarjetaRegistro'>
            {registros.map((registro, index) => (
        <div key={index}>
          <h3>Superheroe {index + 1}</h3>
          <p>Nombre: {registro.nombre}</p>
          <p>Apellido: {registro.apellido}</p>
          <p>Correo: {registro.correo}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default ListaSuper
