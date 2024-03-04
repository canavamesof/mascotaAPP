import { useState, useEffect } from "react";
import userServices from "../services/userServices";
import { Link } from "react-router-dom";

const ReadView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();// Traer los usuarios cuando el componente se monto
  }, []);

  const getUsers = async () => {
    const response = await userServices.getUsers();

    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    const response = await userServices.deleteUser(id);

    if (response.data.id) {
      getUsers();
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center m-3">
        <label
          style={{
            color: "black",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Usuarios
        </label>
        <button
          className="btn btn-primary"
          style={{
            borderRadius: "50%",
            height: "55px",
            width: "55px",
          }}
          onClick={() => {
            window.location.href = "/create";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
            style={{
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre Dueño</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            <th scope="col">Nombre de la Mascota</th>
            <th scope="col">Tipo</th>
            <th scope="col">Ultima visita</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.nombreDueño}</td>
                <td>{data.email}</td>
                <td>{data.Telefono}</td>
                <td>{data.NombreMascota}</td>
                <td>{data.Tipo}</td>
                <td>{data.UltimaVisita}</td>
                <td
                  onClick={() => {
                    window.location.href = `mailto:${data.email}`;
                  }}
                >
                  <label className="item-select">{data.email}</label>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: `/update/${data.id}`,
                    }}
                    className="btn btn-warning"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-clockwise"
                      viewBox="0 0 16 16"
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                      />
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                    </svg>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(data.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReadView;
