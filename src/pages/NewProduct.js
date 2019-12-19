import React from 'react';

import NewProductForm from '../components/NewProductForm';

function NewProduct() {
  return (
    <div className="container py-3">
      <h3 className="mb-3">¿Qué vas a vender hoy?</h3>
      <NewProductForm />
    </div>
  );
}

export default NewProduct;
