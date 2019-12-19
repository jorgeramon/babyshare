import React, { useState, useEffect } from 'react';

import Card from '../components/Card';
import ProductService from '../services/ProductService';

function Home() {

  const [ products, setProducts ] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      const _products = await ProductService.getAll();

      const productsData = [];
      _products.forEach(p => productsData.push(p.data()));

      setProducts(productsData);
    }

    fetchProducts();
  }, []);

  return (
    <div class="container py-4">
      <h1>Bienvenido a Baby Share, ¿qué vas a comprar hoy?</h1>
      <div class="row">
        {
          products.map(product => (<Card {...product}/>))
        }
      </div>
    </div>
  );
}

export default Home;
