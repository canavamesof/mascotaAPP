
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userServices from "../services/userServices";
import sourceShare from "../share/sourceShare";

const UpdateView = () => {
  let { id } = useParams();

  const [nombreDueño, setNombreDueño] = useState("");
  const [email, setemail] = useState("");
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
      setemail(data.email);
      setTelefono(data.Telefono);
      setNombreMascota(data.NombreMascota);
      setTipo(data.Tipo);
      setFechaUltimaVisita(data.FechaUltimaVisita);
    }
  };

  const updateUser = async () => {
    if (sourceShare.esValidEmail()) {
      let updateUser = {
        nombreDueño: nombreDueño,
        email: email,
        Telefono: Telefono,
        NombreMascota: NombreMascota,
        tipo: Tipo,
        FechaUltimaVisita: FechaUltimaVisita
      };

      const response = await userServices.updateUser(updateUser, id);

      if (response.data.id) {
        history.push("/read");
      }
    } else {
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
        {/* Aquí van los campos de actualización del usuario */}
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
