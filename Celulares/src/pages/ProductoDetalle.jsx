import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import './ProductoDetalle.css'; 

function ProductoDetalle() {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === Number(idCelular));
  
  console.log(idCelular);

  if (!celular) {
    return <h2>Celular no encontrado 😢</h2>;
  }

  return (
    <div className="producto-detalle">
      <h1>{celular.nombre}</h1>
      <div className="producto-detalle-info">
        <div className="producto-detalle-fotos">
          {celular.fotos.map((foto, index) => (
            <img key={index} src={foto} alt={`${celular.nombre} foto ${index + 1}`} />
          ))}
        </div>
        <div className="producto-detalle-texto">
          <p><strong>Descripción:</strong> {celular.descripcion}</p>
          <p><strong>Precio:</strong> ${celular.precio.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
