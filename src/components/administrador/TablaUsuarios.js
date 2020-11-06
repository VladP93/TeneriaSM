import React, { useState, useEffect } from "react";
import "./tablaOperaciones.css";

import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function TablaUsuarios(props) {
  const { setTab } = props;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection("RolesUsuario")
      .get()
      .then((res) => {
        var tempUsers = [];
        res.docs.forEach((user) => {
          var newUser = user.data();
          newUser.id = user.id;
          newUser.rol = displayRol(newUser.rol);
          tempUsers.push(newUser);
        });
        setUsers(tempUsers);
      });
  }, []);

  return (
    <div>
      <div className="limite" style={{ backgroundColor: "#69859A" }}>
        <div className="container-tabla4">
          <div className="form-tabla">
            <span className="tabla-form-titulo p-b-34 p-t-27">Usuarios</span>
            <div className="table-responsive" id="tabla4">
              <div className="col-sm-8 col-md-12">
                <table className="table table-striped table-bordered table-dark">
                  <thead>
                    <tr>
                      <th>Id Usuario </th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Rol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td style={{ fontSize: 12 }}>{user.id}</td>
                          <td>{user.nombre}</td>
                          <td>{user.apellido}</td>
                          <td>{user.rol}</td>
                          <td style={{ height: 50 }}>
                            <button className="tabla-form-btn">Eliminar</button>
                          </td>
                          <td>
                            <a href="modificar_usuario.html">
                              <button className="tabla-form-btn">
                                Modificar
                              </button>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <span>
              <button
                className="guardar-form-btn proceso1"
                style={{ marginRight: 25, width: 200, marginTop: 25 }}
                onClick={() => setTab("usuariosForm")}
              >
                Agregar Usuario
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  function displayRol(rol) {
    switch (rol) {
      case "administrador":
        return "Administrador";
      case "operario":
        return "Operario";
      case "supcontrolseleccion":
        return "Supervisor Control";
      case "supgeneral":
        return "Supervisor General";
      case "supprocesos":
        return "Supervisor Procesos";
      default:
        return <h2>Cargando...</h2>;
    }
  }
}
