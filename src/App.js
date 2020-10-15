import React from "react";
import Login from "./pages/Login";
import Administrador from "./pages/Administrador";
import Operario from "./pages/Operario";
import SupervisorControlSeleccion from "./pages/SupervisorControlSeleccion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SupervisorControlSeleccion />
    </div>
  );
}

export default App;
