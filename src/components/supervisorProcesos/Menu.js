import React from "react";
import logo from "../../assets/logo.jpeg";

export default function Menu() {
  return (
    <div>
      <div class="row affix-row">
        <div class="col-sm-4 col-md-12 affix-sidebar">
          <div class="content">
            <div class="menu">
              <ul>
                <div class=" perfil p-b-34 p-t-27">
                  <img src={logo} alt="" width="150" />
                </div>
                <div class="menu-header">Menu </div>
                <div class="activar p-t-27">
                  <a href="procesos.html" target="contenido">
                    <button class="menu-form-btn">Procesos</button>
                  </a>
                </div>
                <div class="activar p-t-27">
                  <button class="menu-form-btn">Cerrar sesión</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
