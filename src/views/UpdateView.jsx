import { useParams } from "react-router-dom";
import userServices from "../services/userServices";
import { useEffect, useState } from "react";
import sourceShare from "../share/sourceShare";

const UpdateView = () => {
  let { id } = useParams();

  const [nombreDueño, setNombreDueño] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [NombreMascota, setNombreMascota] = useState("");
  const [Tipo, setTipo] = useState("");
  const [FechaUltimaVisita, setFechaUltimaVisita] = useState("");
  const [textAlert, setTextAlert] = useState("");

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await userServices.getUserById(id);

    let data = response.data;

    if (response.status === 200 && data.id === id) {
      setNombreDueño(data.nombreDueño);
      setTelefono(data.Telefono);
      setNombreMascota(data.NombreMascota);
      setTipo(data.Tipo);
      setFechaUltimaVisita(data.FechaUltimaVisita);
    }
  };

  const updateUser = async () => {
    // Validar el correo electrónico si lo obtienes de alguna parte
      if (sourceShare.esValidemail(email)) {
      let updateUser = {
        nombreDueño: nombreDueño,
        Telefono: Telefono,
        NombreMascota: NombreMascota,
        tipo: Tipo,
        FechaUltimaVisita: FechaUltimaVisita
      };

      const response = await userServices.updateUser(updateUser, id);

      console.log(response);

      if (response.data.id) {
        window.location.href = "/read";
      }
} else {
    //   //Notificar al usuario que el correo es inválido
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
            value={nombreDueño}
            onChange={(event) => setNombreDueño(event.target.value)}
            type="text"
            className="form-control"
            id="nombreDueño"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <input
            value={Telefono}
            onChange={(event) => setTelefono(event.target.value)}
            type="text"
            className="form-control"
            id="Telefono"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre Mascota</label>
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
          className="btn btn-info"
          onClick={() => {
            updateUser();
          }}
          type="button"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateView;

