import React from "react";
import "./operacionForm.css";

export default function OperacionForm() {
  return (
    <div>
      <div className="limite">
        <div className="container-Login" style={{ backgroundColor: "#69859A" }}>
          <div className="wrap-login">
            <span className="login-form-title p-b-34 p-t-27">
              Nueva operación
            </span>

            <div className="wrap-input ">
              <input
                className="input1"
                type="text"
                name=""
                id="id_nueva_operacion"
                placeholder="Id"
              />
              <span className="focus-input"></span>
            </div>

            <div className="wrap-input ">
              <input
                className="input1"
                type="text"
                name=""
                id="id_nombre_operacion"
                placeholder="Nombre de operación"
              />
              <span className="focus-input"></span>
            </div>
            <div className="wrap-input ">
              <input
                className="input1"
                type="text"
                name=""
                id="id_indicacion"
                placeholder="Indicación"
              />
              <span className="focus-input"></span>
            </div>

            <div className="container-login-form-btn">
              <a href="Tabla_operaciones.html">
                <button className="login-form-btn">Guardar</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
