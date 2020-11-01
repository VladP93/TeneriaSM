import React from "react";
import Menu from "../../components/operario/Menu";
import Procesos from "../../components/operario/Procesos";

import "./Operario.css";

export default function Operario(props) {
  const { setUser } = props;

  return (
    <div className="main-container">
      <div className="menu-container">
        <Menu setUser={setUser} />
      </div>
      <div className="contenido-container">
        <Procesos />
      </div>
    </div>
  );
}
