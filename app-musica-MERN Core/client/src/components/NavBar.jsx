import { Link } from 'react-router-dom';

const NavBar= () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark m-2">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">App Música</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item text-light">
                <Link className="nav-link active text-light" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/listaCanciones"> Canciones </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/agregarcancion"> Agregar Cancion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/listaplaylist"> Playlist </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/agregarplaylist"> Crear Playlist </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;