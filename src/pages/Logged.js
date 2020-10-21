import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Administrador from "./Administrador";
import Operario from "./Operario";
import SupervisorControlSeleccion from "./SupervisorControlSeleccion";
import SupervisorGeneral from "./SupervisorGeneral";
import SupervisorProcesos from "./SupervisorProcesos";

export default function Logged(props) {
  const { user } = props;
  return (
    <div>
      <h2>Logged</h2>
    </div>
  );
}
