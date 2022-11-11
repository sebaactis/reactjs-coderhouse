import { useState } from "react";

const Form = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const enviarDatos = (e) => {
    e.preventDefault();

    const cliente = {
      nombre: name,
      apellido: lastName,
      email: email
    }
    
    console.log(cliente);
  }

const handleName = (e) => setName(e.target.value);

const handleLastName = (e) => setLastName(e.target.value);

const handleEmail = (e) => setEmail(e.target.value);


  return (
    <div className="formConteiner">
      <form className="form" action="" onSubmit={enviarDatos}>
        <input style={{marginBottom: "0.2rem"}} type="text" placeholder="Nombre" name="nombre" onChange={handleName} value={name} />
        <input style={{marginBottom: "0.2rem"}} type="text" placeholder="Apellido" name="apellido" onChange={handleLastName} value={lastName}  />
        <input style={{marginBottom: "0.2rem"}} type="email" placeholder="Correo Electronico" name="email" onChange={handleEmail} value={email}  />
        <button > Enviar </button>
      </form>
    </div>
  )
}

export default Form