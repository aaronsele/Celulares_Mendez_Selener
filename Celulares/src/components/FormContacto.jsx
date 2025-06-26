import './FormContacto.css';

function FormularioContacto() {

  function Alerta(e) {
    e.preventDefault();
    alert("Registro exitoso!");
    window.location.reload();
  }

  return (
    <>
      <form onSubmit={Alerta}>
    
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required></input>
      
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required></input>
      
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
      
        <label for="edad">Duda:</label>
        <input type="text" id="duda" name="duda" required></input>
      
        <input type="submit" value="Submit"></input>
      </form>
    </>
  )
}

export default FormularioContacto