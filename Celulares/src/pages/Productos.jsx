import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import CardCelular from '../components/CardCelular';
import './Productos.css';

function Productos() {
  const { idMarca } = useParams();
  console.log('idMarca que llegó:', idMarca);
  const celularesFiltrados = idMarca
    ? celulares.filter(celu => celu.marcaId === Number(idMarca))
    : celulares;

  return (
    <div className="productos">
      <h1 className="productos-titulo">
        {idMarca 
          ? `Celulares de la marca ${idMarca}` 
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
