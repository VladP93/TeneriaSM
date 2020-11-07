import React, { useState, useEffect } from "react";
import "./tablaOperaciones.css";

import Swal from "sweetalert2";
import firebase from "../../utils/Firebase";
import "firebase/firestore";
import "firebase/auth";

const db = firebase.firestore(firebase);

export default function ModalUsuarios(props) {
  const { user, setRefreshData } = props;
  const [formData, setFormData] = useState(defaultValues());
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    var editUser = { nombre: "", apellido: "", rol: "", uid: "" };
    editUser.nombre = user.nombre;
    editUser.apellido = user.apellido;
    editUser.rol = user.rol;
    editUser.uid = user.uid;
    setFormData(editUser);

    document.getElementById("nombre").value = user.nombre;
    document.getElementById("apellido").value = user.apellido;
    document.getElementById("rol").value = user.rol;
  }, [user]);

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

  const handleSubmit = (event) => {
    db.collection("RolesUsuario")
      .doc(user.id)
      .update(formData)
      .then((res) => {
        Swal.fire(
          "Usuario editado",
          `Usuario ${formData.nombre} ha sido actualizado exitosamente`,
          "success"
        );
        setRefreshData(true);
      })
      .catch((err) => {
        Swal.fire(
          "Error",
          `El Usuario ${
            formData.Nombre
          } no se ha agregado error: ${JSON.stringify(err)}`,
          "error"
        );
      });

    event.preventDefault();
  };

  return (
    <div>
      <div
        className="modal fade"
        id="modalOps"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalOps"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLocal">
                Editar Usuario
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Cerrar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={handleSubmit}
                onChange={onChange}
                className="form-Registro"
              >
                <div className="wrap-combo">
                  <label htmlFor="rol">Rol:</label>
                  <select
                    className="form-control"
                    name="rol"
                    id="rol"
                    placeholder="Rol"
                    required
                  >
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
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    className="form-control"
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
                  <label htmlFor="apellido">Apellido:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder="Apellido"
                    required=""
                    autoComplete="family-name"
                  />
                  <span className="focus-input"></span>
                </div>

                {/* <!-- Danger zone: auth edit !>
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
                </div> */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                data-dismiss="modal"
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function defaultValues() {
    return {
      nombre: "",
      apellido: "",
      rol: "",
      uid: "",
    };
  }
}
