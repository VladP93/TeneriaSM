import React, { useState } from "react";
import Menu from "../../components/operario/Menu";
import Procesos from "../../components/operario/Procesos";

import "./Operario.css";

export default function Operario(props) {
  const { setUser } = props;

  const [tab, setTab] = useState(null);

  const handleTab = () => {
    switch (tab) {
      case "procesos":
        return <Procesos />;
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
