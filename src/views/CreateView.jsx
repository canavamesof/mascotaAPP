import { useState } from "react";
import userServices from "../services/userServices";
import sourceShare from "../share/sourceShare";

const CreateView = () => {
  const [nombreDueno, setnombreDueno] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [email, setemail] = useState("");
  const [NombreMascota, setNombreMascota] = useState("");
  const [Tipo, setTipo] = useState("");
  const [FechaUltimaVisita, setFechaUltimaVisita] = useState("");
  const [textAlert, setTextAlert] = useState("");

    // Función para limpiar el formulario
    const clearForm = () => {
      // Establece los estados de los campos del formulario en una cadena vacía
      setnombreDueno("");
      setTelefono("");
      setemail("");
      setNombreMascota("");
      setTipo("");
      setFechaUltimaVisita("");
    };

  const createUser = async () => {
    if (sourceShare.esValidEmail(email)) {
      let newUser = {
        name: nombreDueno,
        email: email,
        Telefono: Telefono,
        NombreMascota: NombreMascota,
        Tipo: Tipo,
        FechaUltimaVisita: FechaUltimaVisita,
      };


      const response = await userServices.createUser(newUser);
      console.log (createUser);
      if (response.data.id) {
        window.location.href = "/read";
      }
    } else {
      //Notificar al usuario que el correo es invalido
      setTextAlert("El correo no cumple con el formato");
    }
  };

  return (
    <div className="container mt-5">
      {textAlert !== "" ? (
        <div className="alert alert-warning" role="alert">
          {textAlert}
        </div>
      ) : (
        <></>
      )}

      <form>
        <div className="mb-3">
          <label className="form-label">Nombre Dueño</label>
          <input
            value={nombreDueno}
            onChange={(event) => setnombreDueno(event.target.value)}
            type="text"
            className="form-control"
            id="nombreDueno"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={email}
            onChange={(event) => setemail(event.target.value)}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <input
            value={Telefono}
            onChange={(event) => setTelefono(event.target.value)}
            type="number"
            className="form-control"
            id="Telefono"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">NombreMascota</label>
          <input
            value={NombreMascota}
            onChange={(event) => setNombreMascota(event.target.value)}
            type="text"
            className="form-control"
            id="NombreMascota"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo</label>
          <input
            value={Tipo}
            onChange={(event) => setTipo(event.target.value)}
            type="text"
            className="form-control"
            id="Tipo"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Ultima Visita</label>
          <input
            value={FechaUltimaVisita}
            onChange={(event) => setFechaUltimaVisita(event.target.value)}
            type="text"
            className="form-control"
            id="FechaUltimaVisita"
          />
        </div>
        

        <button
          className="btn btn-success"
          onClick={() => {
            createUser();
          }}
          type="button"
        >
          Add
        </button>

        <button
          className="btn btn-success"
          onClick={() => {
            clearForm();
          }}
          type="button"
        >
          clear
        </button>
      </form>
    </div>
  );
};

export default CreateView;
