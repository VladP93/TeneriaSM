import React, { useState } from "react";
import Menu from "../../components/supervisorProcesos/Menu";
import Procesos from "../../components/supervisores/Procesos";

import "./supervisorProcesos.css";

export default function SupervisorProcesos(props) {
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
    <div>
      <div className="main-container">
        <div className="menu-container">
          <Menu setUser={setUser} setTab={setTab} />
        </div>
        <div className="contenido-container">{handleTab()}</div>
      </div>
    </div>
  );
}
