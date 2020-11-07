import React, { useState, useEffect } from "react";
import "./tablaOperaciones.css";
import ModalOperaciones from "./ModalOperaciones";
import Swal from "sweetalert2";

import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function TablaOperaciones(props) {
  const { setTab } = props;
  const [operaciones, setOperaciones] = useState([]);
  const [op, setOp] = useState({ Nombre: "", Indicacion: "" });
  const [refreshData, setRefreshData] = useState(false);

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
    setRefreshData(false);
  }, [refreshData]);

  const editOnClick = (op) => {
    setOp(op);
  };

  const deleteOnClick = (op) => {
    Swal.fire({
      title: "¿Está seguro que desea eliminar " + op.Nombre + "?",
      text: "Esta acción no puede deshacerse",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.value) {
        db.collection("operaciones")
          .doc(op.id)
          .delete()
          .then(() => {
            Swal.fire(
              "Indicación Eliminada",
              op.Nombre + " ha sido eliminada",
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
          "El item: " + op.Nombre + " no se ha eliminado",
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
                            <button
                              className="tabla-form-btn"
                              onClick={() => deleteOnClick(op)}
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
                                editOnClick(op);
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
                onClick={() => setTab("operacionesForm")}
              >
                Agregar operacion
              </button>
            </span>
          </div>
        </div>
      </div>
      <ModalOperaciones op={op} setRefreshData={setRefreshData} />
    </div>
  );
}
