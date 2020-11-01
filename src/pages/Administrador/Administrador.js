import React from "react";
import Menu from "../../components/administrador/Menu";
import TablaOperaciones from "../../components/administrador/TablaOperaciones";
import TablaUsuarios from "../../components/administrador/TablaUsuarios";
import DatosEmpaque from "../../components/administrador/DatosEmpaque";
import OperacionForm from "../../components/administrador/OperacionForm";
import UsuarioForm from "../../components/administrador/UsuarioForm";

import "./Administrador.css";

export default function Administrador(props) {
  const { setUser } = props;

  return (
    <div className="main-container">
      <div className="menu-container">
        <Menu setUser={setUser} />
      </div>
      <div className="contenido-container">
        <UsuarioForm />
      </div>
    </div>
  );
}
