import React, { useState } from "react";
import Menu from "../../components/supervisorGeneral/Menu";
import Procesos from "../../components/supervisores/Procesos";
import CrearProceso from "../../components/supervisorGeneral/CrearProceso";

import "./supervisorGeneral.css";

export default function SupervisorGeneral(props) {
  const { setUser } = props;
  const [tab, setTab] = useState(null);

  const handleTab = () => {
    switch (tab) {
      case "procesos":
        return <Procesos />;
      case "crearProceso":
        return <CrearProceso />;
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
