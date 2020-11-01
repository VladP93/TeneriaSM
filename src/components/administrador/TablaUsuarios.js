import React from "react";
import "./tablaOperaciones.css";

export default function TablaUsuarios(props) {
  const { setTab } = props;

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
                      <th>Contraseña</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Juan</td>
                      <td>Ramos</td>
                      <td>Supervisor</td>
                      <td>xxxxxxxxxxx</td>
                      <td>
                        <button className="tabla-form-btn">Eliminar</button>
                      </td>
                      <td>
                        <a href="modificar_usuario.html">
                          <button className="tabla-form-btn">Modificar</button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Juan</td>
                      <td>Ramos</td>
                      <td>Supervisor</td>
                      <td>xxxxxxxxxxx</td>
                      <td>
                        <button className="tabla-form-btn">Eliminar</button>
                      </td>
                      <td>
                        <a href="modificar_usuario.html">
                          <button className="tabla-form-btn">Modificar</button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Juan</td>
                      <td>Ramos</td>
                      <td>Supervisor</td>
                      <td>xxxxxxxxxxx</td>
                      <td>
                        <button className="tabla-form-btn">Eliminar</button>
                      </td>
                      <td>
                        <a href="modificar_usuario.html">
                          <button className="tabla-form-btn">Modificar</button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Juan</td>
                      <td>Ramos</td>
                      <td>Supervisor</td>
                      <td>xxxxxxxxxxx</td>
                      <td>
                        <button className="tabla-form-btn">Eliminar</button>
                      </td>
                      <td>
                        <a href="modificar_usuario.html">
                          <button className="tabla-form-btn">Modificar</button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Juan</td>
                      <td>Ramos</td>
                      <td>Supervisor</td>
                      <td>xxxxxxxxxxx</td>
                      <td>
                        <button className="tabla-form-btn">Eliminar</button>
                      </td>
                      <td>
                        <a href="modificar_usuario.html">
                          <button className="tabla-form-btn">Modificar</button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Juan</td>
                      <td>Ramos</td>
                      <td>Supervisor</td>
                      <td>xxxxxxxxxxx</td>
                      <td>
                        <button className="tabla-form-btn">Eliminar</button>
                      </td>
                      <td>
                        <a href="modificar_usuario.html">
                          <button className="tabla-form-btn">Modificar</button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Juan</td>
                      <td>Ramos</td>
                      <td>Supervisor</td>
                      <td>xxxxxxxxxxx</td>
                      <td>
                        <button className="tabla-form-btn">Eliminar</button>
                      </td>
                      <td>
                        <a href="modificar_usuario.html">
                          <button className="tabla-form-btn">Modificar</button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Juan</td>
                      <td>Ramos</td>
                      <td>Supervisor</td>
                      <td>xxxxxxxxxxx</td>
                      <td>
                        <button className="tabla-form-btn">Eliminar</button>
                      </td>
                      <td>
                        <a href="modificar_usuario.html">
                          <button className="tabla-form-btn">Modificar</button>
                        </a>
                      </td>
                    </tr>
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
}
