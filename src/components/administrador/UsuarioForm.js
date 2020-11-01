import React from "react";
import "./usuarioForm.css";
import logo from "../../assets/logo.jpeg";

export default function UsuarioForm() {
  return (
    <div>
      <div className="limite">
        <div
          className="container-Registro"
          style={{ backgroundColor: "#69859A" }}
        >
          <div className="wrap-Registro">
            <form action="#" method="POST" className="form-Registro">
              <span className="form-registro-logo">
                <img
                  src={logo}
                  alt=""
                  width="100"
                  style={{ borderRadius: 50 }}
                />
              </span>

              <span
                className="registro-form-titulo"
                style={{ marginBottom: 10 }}
              >
                Registrar Usuario
              </span>

              <div className="wrap-combo">
                <select className="form-control" required>
                  <option>Rol</option>
                </select>
              </div>

              <div className="wrap-input">
                <input
                  className="input1"
                  type="text"
                  id="id"
                  name="id"
                  placeholder="#"
                  required
                  pattern="[0-9]+"
                  readOnly
                />
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input">
                <input
                  className="input1"
                  type="text"
                  id="nombre"
                  name="Nombre"
                  placeholder="Nombre"
                  required=""
                  autoComplete="given-name"
                  pattern="[a-zA-Z]+"
                />
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input">
                <input
                  className="input1"
                  type="text"
                  id="apellido"
                  name="Apellido"
                  placeholder="Apellido"
                  required=""
                  autoComplete="family-name"
                />
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input ">
                <input
                  className="input1"
                  type="password"
                  id="Contraseña"
                  name="Contraseña"
                  placeholder="Contraseña"
                  required
                  autoComplete="current-password"
                />
                <span className="focus-input"></span>
              </div>

              <div className="container-registro-form-btn">
                <button className="registro-form-btn">Registrar Usuario</button>
              </div>
            </form>
            <div id="error" style={{ marginBottom: -15 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
