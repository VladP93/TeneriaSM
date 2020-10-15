import React from "react";
import logo from "../../assets/logo.jpeg";

import "./menu.css";

export default function Menu() {
  return (
    <div>
      <div className="row affix-row">
        <div className="col-sm-4 col-md-12 affix-sidebar">
          <div className="content">
            <div className="menu">
              <ul>
                <div className=" perfil p-b-34 p-t-27">
                  <img src={logo} alt="" width="150" />
                </div>
                <div className="menu-header">Menu </div>
                <div className="activar p-t-27">
                  <a href="procesos.html" target="contenido">
                    <button className="menu-form-btn">Procesos</button>
                  </a>
                </div>
                <div className="activar p-t-27">
                  <a href="control_seleccion.html" target="contenido">
                    <button className="menu-form-btn">Control Selección</button>
                  </a>
                </div>
                <div className="activar p-t-27">
                  <button className="menu-form-btn">Cerrar sesión</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
