import React, { useState } from "react";
import Menu from "../../components/supervisorControlSeleccion/Menu";
import Procesos from "../../components/supervisores/Procesos";
import ControlSeleccion from "../../components/supervisorControlSeleccion/ControlSeleccion";
import "./supervisorControlSeleccion.css";

export default function SupervisorControlSeleccion(props) {
  const { setUser } = props;
  const [tab, setTab] = useState(null);

  const handleTab = () => {
    switch (tab) {
      case "procesos":
        return <Procesos />;
      case "controlSeleccion":
        return <ControlSeleccion />;
      default:
        return <div />;
    }
  };

  return (
    <div className="main-container">
      <div className="menu-container">
        <Menu setUser={setUser} setTab={setTab} />
      </div>
      <div className="contenido-container">{handleTab()}</div>
    </div>
  );
}
