import React from "react";
import Login from "./pages/Login";
import Administrador from "./pages/Administrador";
import Operario from "./pages/Operario";
import SupervisorControlSeleccion from "./pages/SupervisorControlSeleccion";
import SupervisorGeneral from "./pages/SupervisorGeneral";
import SupervisorProcesos from "./pages/SupervisorProcesos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SupervisorProcesos />
    </div>
  );
}

export default App;
