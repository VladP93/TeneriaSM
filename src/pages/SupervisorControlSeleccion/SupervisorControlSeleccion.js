import React from "react";
import Menu from "../../components/supervisorControlSeleccion/Menu";
import Procesos from "../../components/supervisores/Procesos";
import ControlSeleccion from "../../components/supervisorControlSeleccion/ControlSeleccion";
import "./supervisorControlSeleccion.css";

export default function SupervisorControlSeleccion(props) {
  const { setUser } = props;

  return (
    <div className="main-container">
      <div className="menu-container">
        <Menu setUser={setUser} />
      </div>
      <div className="contenido-container">
        <ControlSeleccion />
      </div>
    </div>
  );
}
