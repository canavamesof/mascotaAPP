//Los componentes en React son Funciones que devuelve JSX --> Se covierte e JS puro
// un objeto donde vienen los prop
const MyComponent = ({
  titulo,
  texto,
  metodo,
  textoBoton,
  clasesBoton,
  myStyles,
  html,
}) => {
  //JSX --> JavaScript Mejorado
  //HTML --> JS Puro

  //console.log(metodo)
  //console.log(typeof miNumber);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        {titulo !== undefined ? (
          <h5 className="card-title">{titulo}</h5>
        ) : (
          <></>
        )}

        {texto !== undefined ? <p className="card-text">{texto}</p> : <></>}

        {textoBoton !== undefined &&
        metodo !== undefined &&
        clasesBoton !== undefined ? (
          <button
            onClick={() => {
              metodo();
            }}
            className={clasesBoton}
            style={myStyles}
          >
            {textoBoton}
          </button>
        ) : (
          <></>
        )}

        {html}
      </div>
    </div>
  );
};

export default MyComponent;
