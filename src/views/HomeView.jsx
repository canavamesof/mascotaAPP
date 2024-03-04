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
  
  useEffect(() => {
    Login();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5">
        <MyComponent
          titulo="MascoTICA "
          texto="Una aplicación web diseñada para facilitar la gestión de mascotas para nuestros clientes.
       En MascoTICAS CR entendemos la importancia que tienen las mascotas en la vida de las personas, por eso hemos desarrollado esta herramienta que permite realizar consultas, registros, actualizaciones y eliminaciones de forma eficiente y segura."

        />
      </div>
    </div>
  );
};

export default HomeView;