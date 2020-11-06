import React, { useState, useEffect } from "react";
import "./usuarioForm.css";
import logo from "../../assets/logo.jpeg";
import Swal from "sweetalert2";

import firebase from "../../utils/Firebase";
import "firebase/firestore";
import "firebase/auth";

const db = firebase.firestore(firebase);

export default function UsuarioForm(props) {
  const { setTab } = props;
  const [formData, setFormData] = useState(defaultValues());
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    db.collection("Roles")
      .get()
      .then((res) => {
        var tempRoles = [];
        res.docs.forEach((rol) => {
          tempRoles.push(rol.data());
        });

        setRoles(tempRoles);
      });
  }, []);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(formData.usuario, formData.contrasena)
      .then((res) => {
        console.log(res.user.uid);
        var newUser = {};
        var update = { displayName: `${formData.nombre} ${formData.apellido}` };

        newUser.rol = formData.rol;
        newUser.uid = res.user.uid;
        firebase
          .auth()
          .currentUser.updateProfile(update)
          .then(() => {
            db.collection("RolesUsuario")
              .add(newUser)
              .then(() => {
                Swal.fire(
                  "Usuario agregado",
                  "El usuario " +
                    update.displayName +
                    " ha sido agregado exitosamente. ",
                  "success"
                );
                if (formData.rol === "administrador") {
                  setTab(null);
                }
              })
              .catch((e) => {
                Swal.fire("Error", "Error inesperado: " + e.message, "error");
              });
          })
          .catch((er) => {
            Swal.fire("Error", "Error inesperado: " + er.message, "error");
          });
      })
      .catch((err) => {
        Swal.fire("Error", "Error inesperado: " + e.message, "error");
      });

    e.preventDefault();
  };

  return (
    <div>
      <div className="limite">
        <div
          className="container-Registro"
          style={{ backgroundColor: "#69859A" }}
        >
          <div className="wrap-Registro">
            <form
              onSubmit={onSubmit}
              onChange={onChange}
              className="form-Registro"
            >
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
                <select
                  className="form-control"
                  name="rol"
                  placeholder="Rol"
                  required
                >
                  <option value="">Seleccione un rol</option>
                  {roles.map((rol) => {
                    return (
                      <option key={rol.rol} value={rol.rol}>
                        {rol.displayName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="wrap-input">
                <input
                  className="input1"
                  type="text"
                  id="id"
                  name="usuario"
                  placeholder="usuario: ejemplo@teneriasm.com"
                  required
                />
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input">
                <input
                  className="input1"
                  type="text"
                  id="nombre"
                  name="nombre"
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
                  name="apellido"
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
                  id="contrasena"
                  name="contrasena"
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

  function defaultValues() {
    return {
      rol: "",
      usuario: "",
      nombre: "",
      apellido: "",
      contrasena: "",
    };
  }
}
