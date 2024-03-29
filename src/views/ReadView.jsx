// esta es la pagina de los usuarios

import { useState, useEffect } from "react";
import userServices from "../services/userServices";
import { Link } from "react-router-dom";

const ReadView = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await userServices.getUsers();
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    const response = await userServices.deleteUser(id);
    if (response.data.id) {
      getUsers(); // Actualizar lista de usuarios después de eliminar uno
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
        <Link to="/create" className="btn btn-primary">
          Ingresar informacion
        </Link>
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
            
            <th scope="col">Visitas</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.nombreDueno}</td>
                <td>{data.email}</td>
                <td>{data.Telefono}</td>
                <td>{data.NombreMascota}</td>
                <td>{data.Tipo}</td>
                <td>{data.FechaUltimaVisita}</td> 
                <td>
                  <div><h5>{count}</h5>
                  <div><button className="btn btn-danger" onClick={()=>setCount(count-1)}>-</button> <button className="btn btn-primary" onClick={()=>setCount(count+1)}>+</button></div></div> 
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(data.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })};
        </tbody>
      </table>
    </div>
  );
};

export default ReadView;
