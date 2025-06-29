import './QuienesSomos.css';

function QuienesSomos() {
  return (
    <div className="qs-container">
      <h1>¡Quiénes somos!</h1>

      <div className="qs-info">
        <img
          className="qsfoto1"
          src="/src/assets/ort.jpg"
          alt="Estudiantes en la Ort"
        />

        <p className="qs-texto">
          Somos Aarón y Manuel, estudiantes de la secundaria Ort que, en paralelo a nuestros trabajos escolares, decidimos desarrollar este proyecto. ¡Esperamos que les haya servido!
        </p>
      </div>

      <img
        className="qsfoto2"
        src="/src/assets/estudiantes.jpg"
        alt="Estudiantes trabajando"
      />
    </div>
  );
}

export default QuienesSomos;
