import './FormContacto.css';

function FormularioContacto() {

  function Alerta(e) {
    e.preventDefault();

    const consulta = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      email: e.target.email.value,
      consulta: e.target.consulta.value,
    };

    const consultasGuardadas = JSON.parse(localStorage.getItem('consultas')) || [];
    consultasGuardadas.push(consulta);
    localStorage.setItem('consultas', JSON.stringify(consultasGuardadas));

    alert("Consulta recibida!");
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={Alerta}>
        <h2>Deje su consulta</h2>

        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="consulta">Consulta:</label>
        <input type="text" id="consulta" name="consulta" required />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default FormularioContacto;
