import "./App.css";
import HomeView from "./views/HomeView";
import ReadView from "./views/ReadView";
import CreateView from "./views/CreateView";
import UpdateView from "./views/UpdateView";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/read">
                  Usuarios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/read" element={<ReadView />}></Route>
        <Route path="/create" element={<CreateView />}></Route>
        <Route path="/update/:id" element={<UpdateView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
