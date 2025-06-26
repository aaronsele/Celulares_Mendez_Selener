import './CardCelular.css';import React from 'react';

import { Link } from 'react-router-dom';

function CardCelular({ celular }) {
  return (
    <Link to={`/productos/producto-detalle/${celular.id}`}>
    <div className="card-celular">
      <div className="card-img">
        <img 
          src={celular.fotos[0] || 'https://via.placeholder.com/300x200?text=Sin+imagen'} 
          alt={celular.nombre} 
        />
      </div>
      <div className="card-info">
        <h3 className="card-titulo">{celular.nombre}</h3>
        <p className="card-descripcion">{celular.descripcion}</p>
        <p className="card-precio">${celular.precio.toLocaleString()}</p>
      </div>
    </div>
    </Link>
  );
}

export default CardCelular;
