import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import firebase from 'firebase';

function Header() {
  const [ hasSession, setHasSession ] = useState(false);

  const signOut = function () {
    firebase.auth().signOut();
    window.location.href = '/';
  }

  useEffect(function () {
    firebase.auth().onAuthStateChanged(user => {
      setHasSession(!!user);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Baby Share
      </Link>
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
          {
            !hasSession ?
              <>
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
              </> : <></>
          }
          {
            hasSession ?
              <>
                <li className="nav-item">
                  <Link to="/new" className="nav-link">
                    Vender
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={ signOut }>Cerrar Sesión</a>
                </li>
              </> : <></>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Header;
