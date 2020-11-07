import React, { useState, useEffect } from "react";
import "./tablaOperaciones.css";
import ModalUsuarios from "./ModalUsuarios";
import Swal from "sweetalert2";

import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function TablaUsuarios(props) {
  const { setTab } = props;
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    rol: "Seleccione un rol",
    uid: "",
  });
  const [refreshData, setRefreshData] = useState(false);

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
    setRefreshData(false);
  }, [refreshData]);

  const editOnClick = (u) => {
    setUser(u);
  };

  const deleteOnClick = (u) => {
    Swal.fire({
      title: "¿Está seguro que desea eliminar a " + u.nombre + "?",
      text: "Esta acción no puede deshacerse",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.value) {
        db.collection("RolesUsuario")
          .doc(u.id)
          .delete()
          .then(() => {
            Swal.fire(
              "Usuario Eliminado",
              u.nombre + " ha sido eliminado",
              "success"
            );
            setRefreshData(true);
          })
          .catch((err) => {
            Swal.fire("Algo salió mal", "Erro: " + err, "error");
          });
      } else {
        Swal.fire(
          "Cancelado",
          "Usuario: " + u.nombre + " no se ha eliminado",
          "error"
        );
      }
    });
  };

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
                            <button
                              className="tabla-form-btn"
                              onClick={() => deleteOnClick(user)}
                            >
                              Eliminar
                            </button>
                          </td>
                          <td>
                            <button
                              className="tabla-form-btn"
                              data-toggle="modal"
                              data-target="#modalOps"
                              onClick={() => {
                                editOnClick(user);
                              }}
                            >
                              Modificar
                            </button>
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
      <ModalUsuarios user={user} setRefreshData={setRefreshData} />
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
