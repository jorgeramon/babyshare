import React, { useState } from 'react';

import Form from '../Form';
import Input from '../Input';
import UserService from '../../services/UserService';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async function () {
    try {
      const userId = await UserService.login({ email, password });
      localStorage.setItem('session', userId);
      alert('Bienvenido');
      window.location.href = '/';
    } catch (e) {
      alert('Ha ocurrido un error al procesar el inicio de sesión');
    }
  }

  return (
    <Form onSubmit={ onSubmit }>
      <Input
        id="email"
        text="Email"
        placeholder="Ingrese su correo electrónico"
        value={ email }
        onChange={ e => setEmail(e.target.value) }
      />
      <Input
        id="password"
        text="Contraseña"
        placeholder="Ingrese su contraseña"
        type='password'
        value={ password }
        onChange={ e => setPassword(e.target.value) }
      />
      <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
    </Form>
  );
}

export default LoginForm;
