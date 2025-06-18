import React from 'react';
import './CardCelular.css';

function CardCelular({ celular }) {
  return (
    <div className="card-celular">
      <div className="card-img">
        <img 
          src={celular.fotos[0] || 'https://via.placeholder.com/300x200?text=Sin+imagen'} 
          alt={celular.nombre} 
        />
      </div>
      <div className="card-info">
        <h3 className="card-title">{celular.nombre}</h3>
        <p className="card-desc">{celular.descripcion}</p>
        <p className="card-price">${celular.precio.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CardCelular;
