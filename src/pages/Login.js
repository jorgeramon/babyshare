import React from 'react';

import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md">
          <h3>Regístrate para:</h3>
          <ul>
            <li className="mt-3">Ver artículos en venta y publicar los tuyos</li>
            <li className="mt-3">Recibir notificaciones de bajada de precios de los productos que te gustan</li>
            <li className="mt-3">Configurar alertas de ofertas</li>
            <li className="mt-3">Enviar mensajes a compradores y vendedores</li>
          </ul>
        </div>
        <div className="col-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
