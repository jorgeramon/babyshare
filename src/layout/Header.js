import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Iniciar sesión
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Registrarse
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;