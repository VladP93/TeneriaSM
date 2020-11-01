import React from "react";
import Menu from "../../components/supervisorProcesos/Menu";
import Procesos from "../../components/supervisores/Procesos";

import "./supervisorProcesos.css";

export default function SupervisorProcesos(props) {
  const { setUser } = props;

  return (
    <div>
      <div className="main-container">
        <div className="menu-container">
          <Menu setUser={setUser} />
        </div>
        <div className="contenido-container">
          <Procesos />
        </div>
      </div>
    </div>
  );
}
