import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';
import CardCelular from '../components/CardCelular';
import './Productos.css';

function Productos() {
  const { idMarca } = useParams();
  const celularesFiltrados = idMarca
    ? celulares.filter(celu => celu.marcaId === Number(idMarca))
    : celulares;

  const nombreMarca = idMarca 
    ? marcas.find(marca => marca.id === Number(idMarca))?.nombre 
    : null;

  return (
    <div className="productos">
      <h1 className="productos-titulo">
        {idMarca 
          ? `Celulares de la marca ${nombreMarca}` 
          : 'Todos los celulares'}
      </h1>
      <div className="productos-grid">
        {celularesFiltrados.map(celu => (
          <CardCelular key={celu.id} celular={celu} />
        ))}
      </div>
    </div>
  );
}

export default Productos;
