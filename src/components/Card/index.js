import React from 'react';

function Card({ name, description, price, category, size, color, brand, state }) {
  return (
    <div className="card">
      <img className="card-img-top" src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt={ name }/>
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p className="card-text">{ description }</p>
        <a href="#" className="btn btn-primary">Comprar</a>
      </div>
      <div className="card-footer">
        <h5>${price}</h5>
        <p className="card-text">{ category } | { size } | { color } | { brand } | { state }</p>
      </div>
    </div>
  );
}

export default Card;
