import React, { useState } from 'react';

import Form from '../Form';
import Input from '../Input';
import UserService from '../../services/UserService';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async function () {
    try {
      await UserService.register({ username, email, password });
      alert('Se ha enviado un correo electrónico para verificar su cuenta');
      window.location.href = '/';
    } catch (e) {
      alert('Ha ocurrido un error al procesar el registro');
    }
  }

  return (
    <Form onSubmit={ onSubmit }>
      <Input
        id="username"
        placeholder="Crea tu nombre de usuario"
        text="Nombre de usuario"
        value={ username }
        onChange={ e => setUsername(e.target.value) }
      />
      <Input
        id="email"
        placeholder="Introduce tu email"
        text="Email"
        value={ email }
        onChange={ e => setEmail(e.target.value) }
      />
      <Input
        id="password"
        placeholder="Crea tu contraseña"
        text="Contraseña"
        type='password'
        value={ password }
        footer="Debe tener al menos 6 caracteres y debe contener un número o símbolo"
        onChange={ e => setPassword(e.target.value) }
      />
      <button type="submit" className="btn btn-primary btn-block">Regístrate</button>
    </Form>
  );
}

export default RegisterForm;
