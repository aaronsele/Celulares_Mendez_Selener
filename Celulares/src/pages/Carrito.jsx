import React from 'react';
import { useCart } from '../components/CartContext'; // fijate la ruta según tu estructura
import CardCelular from '../components/CardCelular';
import './Carrito.css';

function Carrito() {
  const { carrito } = useCart();

  return (
    <div className="carrito-container">
      <h1 className="carrito-titulo">Tu Carrito</h1><h1>🛒</h1>
      

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="carrito-grid">
          {carrito.map((celular, index) => (
            <CardCelular key={index} celular={celular} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carrito;
