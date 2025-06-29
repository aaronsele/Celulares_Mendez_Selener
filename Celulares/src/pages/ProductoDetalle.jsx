import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import { useState } from 'react';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import './ProductoDetalle.css';

function ProductoDetalle() {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === Number(idCelular));
  const [agregado, setAgregado] = useState(false);

  if (!celular) {
    return <h2>Celular no encontrado 😢</h2>;
  }

  const handleAgregar = () => {
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1500);
  };

  return (
    <div className="producto-detalle">
      <h1>{celular.nombre}</h1>
      <div className="producto-detalle-info">
        <div className="producto-detalle-fotos">
          <img src={celular.fotos[0]} alt={`${celular.nombre}`} />
        </div>

        <div className="producto-detalle-texto">
          <p><strong>Descripción:</strong> {celular.descripcion}</p>
          <p><strong>Precio:</strong> ${celular.precio.toLocaleString()}</p>

          <div className="add-to-cart">
            <button onClick={handleAgregar} className={agregado ? 'animado' : ''}>
              {agregado
                ? <FaCheck className="cart check" />
                : <FaShoppingCart className="cart" />}
              <span>{agregado ? 'Agregado' : 'Agregar al carrito'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
