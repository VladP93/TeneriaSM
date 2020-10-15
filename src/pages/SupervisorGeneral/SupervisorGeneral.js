import React from "react";
import Menu from "../../components/supervisorGeneral/Menu";
import Procesos from "../../components/supervisores/Procesos";
import CrearProceso from "../../components/supervisorGeneral/CrearProceso";

import "./supervisorGeneral.css";

export default function SupervisorGeneral() {
  return (
    <div className="main-container">
      <div className="menu-container">
        <Menu />
      </div>
      <div className="contenido-container">
        <CrearProceso />
      </div>
    </div>
  );
}
