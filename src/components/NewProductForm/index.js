import React, { useState } from 'react';

import Input from '../Input';
import TextArea from '../TextArea';
import Select from '../Select';
import Form from '../Form';
import ProductService from '../../services/ProductService';

function NewProductForm() {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ category, setCategory ] = useState('');
  const [ size, setSize ] = useState('');
  const [ brand, setBrand ] = useState('');
  const [ color, setColor ] = useState('');
  const [ state, setState ] = useState('');
  const [ price, setPrice ] = useState('');

  const categories = [
    'Categoría 1',
  ];

  const sizes = [
    'Talla 1',
  ];

  const brands = [
    'Marca 1',
  ];

  const colors = [
    'Color 1',
  ];

  const states = [
    'Estado 1',
  ];

  const submit = async function () {
    try {
      await ProductService.create({ name, description, price, category, size, brand, color, state });
      alert('Producto creado exitosamente');
      window.location.href = '/';
    } catch (e) {
      alert('Ocurrio un error inesperado mientras de guardaba el producto');
    }
  }

  const cancel = function () {
    window.location.href = '/';
  }

  return (
    <Form onSubmit={ submit }>
      <Input
        id="name"
        text="Nombre de la prenda"
        value={ name }
        onChange={ e => setName(e.target.value) }
      />
      <TextArea
        id="description"
        text="Descripción"
        value={ description }
        onChange={ e => setDescription(e.target.value) }
      />
      <Select
        id="category"
        text="Categoría"
        options={ categories }
        value={ category }
        defaultOption="Selecciona una categoría"
        onChange={ e => setCategory(e.target.value) }
      />
      <Select
        id="size"
        text="Talla"
        options={ sizes }
        value={ size }
        defaultOption="Selecciona una talla"
        onChange={ e => setSize(e.target.value) }
      />
      <Select
        id="brand"
        text="Marca"
        options={ brands }
        value={ brand }
        defaultOption="Selecciona una marca"
        onChange={ e => setBrand(e.target.value) }
      />
      <Select
        id="color"
        text="Color"
        options={ colors }
        defaultOption="Selecciona un color"
        value={ color }
        onChange={ e => setColor(e.target.value) }
      />
      <Select
        id="state"
        text="Estado"
        options={ states }
        defaultOption="Selecciona un estado"
        value={ state }
        onChange={ e => setState(e.target.value) }
      />
      <Input
        id="price"
        text="Precio"
        type="number"
        placeholder="Coloca la cantidad"
        footer="Para vender más rápido, ofrece un descuento mínimo de 50%"
        value={ price }
        onChange={ e => setPrice(e.target.value) }
      />
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary btn-block">Vender</button>
        </div>
        <div className="col-sm">
          <button className="btn btn-secondary btn-block" onClick={ cancel }>Cancelar</button>
        </div>
      </div>
    </Form>
  );
}

export default NewProductForm;
