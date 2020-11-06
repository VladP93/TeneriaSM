import React, { useState } from "react";
import Swal from "sweetalert2";

import "./Login.css";

import firebase from "../../utils/Firebase";
import "firebase/auth";

export default function Login(props) {
  const { setUser } = props;
  const [formData, setFormData] = useState(defaultValues());

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(formData.Usuario, formData.Contrasena)
      .then((response) => {
        setUser(response.user);
        Swal.fire(`Bienvenido ${firebase.auth().currentUser.displayName}`);
      })
      .catch((err) => {
        Swal.fire("Error", "El error: " + err.message, "error");
      });

    event.preventDefault();
  };

  return (
    <>
      <div className="limite">
        {/* <!--Este contenedor va a contener todo la pantalla del Login --> */}
        <div className="container-Login" style={{ backgroundColor: "#69859A" }}>
          <div className="wrap-login">
            {/* <!--Creacion del formulario--> */}
            <form
              className="form-login"
              onSubmit={handleSubmit}
              onChange={onChange}
            >
              {/* <!--Logo centrando del formulario--> */}
              <span className="form-login-logo">
                <i className="fas fa-user"></i>
              </span>

              {/* <!--Texto de Iniciar Sesion--> */}
              <span className="login-form-title p-b-34 p-t-27">
                Iniciar Sesion
              </span>

              {/* <!--Campo de texto para ingresar el usuario--> */}
              <div className="wrap-input ">
                <input
                  className="input1"
                  type="text"
                  name="Usuario"
                  autoComplete="username"
                  placeholder="Usuario"
                />
                <span className="focus-input"></span>
              </div>

              {/* <!--Campo de texto para ingresar la contraseña--> */}
              <div className="wrap-input ">
                <input
                  className="input1"
                  type="password"
                  name="Contrasena"
                  autoComplete="current-password"
                  placeholder="Contraseña"
                />
                <span className="focus-input"></span>
              </div>

              {/* <!--Boton para iniciar Sesion--> */}
              <div className="container-login-form-btn">
                <button className="login-form-btn">Iniciar Sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  function defaultValues() {
    return {
      Usuario: "",
      Contrasena: "",
    };
  }
}
