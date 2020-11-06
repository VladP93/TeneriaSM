import React, { useState, useEffect } from "react";
import "./tablaOperaciones.css";

import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function TablaOperaciones(props) {
  const { setTab } = props;
  const [operaciones, setOperaciones] = useState([]);

  useEffect(() => {
    db.collection("operaciones")
      .get()
      .then((res) => {
        var tempOps = [];
        res.docs.forEach((ops) => {
          var newOp = ops.data();
          newOp.id = ops.id;
          tempOps.push(newOp);
        });
        setOperaciones(tempOps);
      });
  }, []);

  return (
    <div>
      <div className="limite" style={{ backgroundColor: "#69859A" }}>
        <div className="container-tabla4">
          <div className="form-tabla">
            <span className="tabla-form-titulo p-b-34 p-t-27">Operaciones</span>
            <div className="table-responsive" id="tabla4">
              <div className="col-sm-8 col-md-12">
                <table className="table table-striped table-bordered table-dark">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre de Operacion</th>
                      <th> Indicacion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {operaciones.map((op) => {
                      return (
                        <tr key={op.id}>
                          <td style={{ fontSize: 12 }}>{op.id}</td>
                          <td>{op.Nombre}</td>
                          <td>{op.Indicacion}</td>
                          <td>
                            <button className="tabla-form-btn">Eliminar</button>
                          </td>
                          <td>
                            <a href="modificar_operacion.html">
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
                onClick={() => setTab("operacionesForm")}
              >
                Agregar operacion
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
