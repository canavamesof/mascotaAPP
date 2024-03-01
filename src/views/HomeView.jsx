import React from "react";
import { useEffect } from "react";
import MyComponent from "../components/MyComponent";



const HomeView = () => {
  const Login = () => {
    console.log("Iniciando Login....");
    setTimeout(function () {
      console.log("Termino login....");
    }, 2000);
  };

  const Registro = () => {
    console.log("Iniciando Registro....");
    setTimeout(function () {
      console.log("Termino Registro....");
    }, 2000);
  };

  useEffect(() => {
    Login();
  }, []);

  return (
    <div className="container">
      <MyComponent
        titulo="MascoTICA "
        texto="Una aplicación web diseñada para facilitar la gestión de mascotas para nuestros clientes.
       En MascoTICAS CR entendemos la importancia que tienen las mascotas en la vida de las personas, por eso hemos desarrollado esta herramienta que permite realizar consultas, registros, actualizaciones y eliminaciones de forma eficiente y segura."
        textoBoton="Registrarse"
        metodo={Registro}
        clasesBoton="custom-button"
        myStyles={{ borderRadius: "40px" }}
        html={
          <button
            className="custom-button" 
            onClick={() => {
            Login();
            }}
          >
            Ingreso de usuario
          </button>
        }
      />
    </div>
  );
};

export default HomeView;