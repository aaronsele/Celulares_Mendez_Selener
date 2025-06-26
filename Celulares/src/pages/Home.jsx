import { celulares } from "../data/data";
import CardCelular from "../components/CardCelular";
import './Home.css';

function Home() {
  return (
    <main>
      <h1>Five GigaGuys</h1>
      <img className="home-img" src="/src/assets/fotoHome.jpg" alt="Imagen Home" />

      <section className="info-sections">
        <div className="info-card">
          <h2>Visión</h2>
          <p>Ser líderes en tecnología móvil, ofreciendo celulares de última generación que conecten y mejoren la vida de las personas.</p>
        </div>
        <div className="info-card">
          <h2>Misión</h2>
          <p>Brindar productos confiables, innovadores y accesibles, acompañados de un servicio que supere las expectativas de nuestros clientes.</p>
        </div>
        <div className="info-card">
          <h2>Valores</h2>
          <p>Compromiso, calidad, transparencia y pasión por la tecnología para crear relaciones duraderas con nuestros usuarios.</p>
        </div>
      </section>

      <section className="productos-destacados">
        <h1>Productos destacados:</h1>
        <div className="cards-container">
          <CardCelular celular={celulares[0]} />
          <CardCelular celular={celulares[4]} />
          <CardCelular celular={celulares[2]} />
        </div>
      </section>
    </main>
  );
}

export default Home;
