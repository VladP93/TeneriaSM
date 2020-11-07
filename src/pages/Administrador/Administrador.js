import React, { useState } from "react";
import Menu from "../../components/administrador/Menu";
import TablaOperaciones from "../../components/administrador/TablaOperaciones";
import TablaUsuarios from "../../components/administrador/TablaUsuarios";
import DatosEmpaque from "../../components/administrador/DatosEmpaque";
import OperacionForm from "../../components/administrador/OperacionForm";
import UsuarioForm from "../../components/administrador/UsuarioForm";

import "./Administrador.css";

export default function Administrador(props) {
  const { setUser } = props;
  const [tab, setTab] = useState(null);

  const handleTab = () => {
    switch (tab) {
      case "operaciones":
        return <TablaOperaciones setTab={setTab} />;
      case "usuarios":
        return <TablaUsuarios setTab={setTab} />;
      case "empaque":
        return <DatosEmpaque />;
      case "operacionesForm":
        return <OperacionForm setTab={setTab} />;
      case "usuariosForm":
        return <UsuarioForm setUser={setUser} setTab={setTab} />;
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
