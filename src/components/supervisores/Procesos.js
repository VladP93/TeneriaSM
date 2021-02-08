import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import "./procesos.css";

import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);
const QRCode = require("qrcode.react");

export default function Procesos() {
  const [procesos, setProcesos] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [indicacion, setIndicacion] = useState("");
  const [observacion, setObservacion] = useState("");
  const [idFinalizar, setIdFinalizar] = useState("");

  useEffect(() => {
    db.collection("procesos")
      .orderBy("fecha")
      .get()
      .then((res) => {
        var tempProcesos = [];
        res.docs.forEach((proceso) => {
          var newProceso = proceso.data();
          newProceso.id = proceso.id;
          tempProcesos.push(newProceso);
        });
        setProcesos(tempProcesos.reverse());
      });
    setRefreshData(false);
  }, [refreshData]);

  const onChangeIndicacion = (e) => {
    setIndicacion(e.target.value);
  };

  const onChangeObservacion = (e) => {
    setObservacion(e.target.value);
  };

  const onChangeFinalizar = (e) => {
    setIdFinalizar(e.target.value);
  };

  const onClickOk = (id) => {
    db.collection("procesos")
      .doc(id)
      .update({ indicacion })
      .then(() => {
        Swal.fire(
          "Proceso actualizado",
          `El proceso ha sido actualizado exitosamente`,
          "success"
        );
      })
      .catch((err) => {
        Swal.fire("Error", "El procesos no se ha podido actualizar", "error");
      });
    setRefreshData(true);
  };

  const onClickFinalizar = () => {
    if (idFinalizar === "" || idFinalizar === "Seleccione proceso") {
      Swal.fire("Error", "Seleccione un proceso", "error");
    } else {
      db.collection("procesos")
        .doc(idFinalizar)
        .update({ observacion, estado: "finalizado" })
        .then(() => {
          Swal.fire(
            "Proceso actualizado",
            `El proceso ha sido actualizado exitosamente`,
            "success"
          );
        })
        .catch((err) => {
          Swal.fire("Error", "El procesos no se ha podido actualizar", "error");
        });
      document.getElementById("selectFinalizar").selectedIndex = 0;
    }
    setRefreshData(true);
  };

  return (
    <div>
      <div className="limite" style={{ backgroundColor: "#69859A" }}>
        <div className="container-tabla">
          <div className="form-tabla">
            <span className="tabla-form-titulo p-b-34 p-t-27">proceso</span>

            <div className="table-responsive" id="tabla1">
              <div className="col-sm-8 col-md-12">
                <table className="table table-striped table-bordered table-dark">
                  <thead>
                    <tr>
                      <th>id </th>
                      <th>Operacion</th>
                      <th>Cantidad</th>
                      <th>Indicación</th>
                      <th>Nombre del operario</th>
                      <th>fecha</th>
                      <th>notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {procesos.map((proceso) => {
                      if (proceso.estado !== "finalizado") {
                        return (
                          <tr key={proceso.id}>
                            <td>
                              <div className="wrap-input ">
                                <input
                                  className="inputid"
                                  type="text"
                                  name="id"
                                  placeholder=""
                                  style={{ width: 60 }}
                                  value={proceso.id}
                                  disabled
                                />
                                <br />
                                <QRCode
                                  value={`https://teneriasm.herokuapp.com/proceso/${proceso.id}`}
                                />
                                <span className="focus-input"></span>
                              </div>
                            </td>
                            <td>
                              <input
                                className="input_Cantidad"
                                type="text"
                                name="operario"
                                value={proceso.operacion}
                                disabled
                              />
                            </td>
                            <td>
                              <div className="wrap-input ">
                                <input
                                  className="input_Cantidad"
                                  type="text"
                                  name="cantidad"
                                  style={{ width: 40 }}
                                  value={proceso.cantidad}
                                  disabled
                                />
                                <span className="focus-input"></span>
                              </div>
                            </td>
                            <td>
                              <input
                                className="input_Cantidad"
                                type="text"
                                name="Indicación"
                                style={{ width: 160 }}
                                placeholder="Indicación"
                                onChange={onChangeIndicacion}
                                defaultValue={proceso.indicacion}
                              />
                            </td>
                            <td>
                              <input
                                className="input_Cantidad"
                                type="text"
                                name="operario"
                                disabled
                                style={{ width: 160 }}
                                value={proceso.nombreOperario}
                              />
                            </td>

                            <td>
                              <div className="wrap-input ">
                                <input
                                  className="input_fecha"
                                  type="text"
                                  name="fecha"
                                  style={{ width: 80 }}
                                  disabled
                                  value={proceso.fecha}
                                />
                                <span className="focus-input"></span>
                              </div>
                            </td>

                            <td>
                              <div className="wrap-input ">
                                <input
                                  className="input_notas notas-movil"
                                  type=" text"
                                  name="notas"
                                  style={{ width: 130 }}
                                  disabled
                                  value={proceso.notas}
                                />
                                <span className="focus-input"></span>
                              </div>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-success"
                                style={{ width: 60 }}
                                onClick={() => onClickOk(proceso.id)}
                              >
                                Ok
                              </button>
                            </td>
                          </tr>
                        );
                      } else {
                        return (
                          <tr
                            style={{
                              backgroundColor: "#9B0000",
                            }}
                            key={proceso.id}
                          >
                            <td>
                              <div className="wrap-input ">
                                <input
                                  className="inputid"
                                  type="text"
                                  name="id"
                                  placeholder=""
                                  style={{ width: 60, color: "#222" }}
                                  value={proceso.id}
                                  disabled
                                />
                                <br />
                                <QRCode
                                  value={`https://teneriasm.herokuapp.com/proceso/${proceso.id}`}
                                />
                                <span className="focus-input"></span>
                              </div>
                            </td>
                            <td>
                              <input
                                className="input_Cantidad"
                                type="text"
                                name="operario"
                                style={{ color: "#222" }}
                                value={proceso.operacion}
                                disabled
                              />
                            </td>
                            <td>
                              <div className="wrap-input ">
                                <input
                                  className="input_Cantidad"
                                  type="text"
                                  name="cantidad"
                                  style={{ width: 40, color: "#222" }}
                                  value={proceso.cantidad}
                                  disabled
                                />
                                <span className="focus-input"></span>
                              </div>
                            </td>
                            <td>
                              <input
                                className="input_Cantidad"
                                type="text"
                                name="Indicación"
                                style={{ width: 160, color: "#222" }}
                                value={proceso.indicacion}
                                disabled
                              />
                            </td>
                            <td>
                              <input
                                className="input_Cantidad"
                                type="text"
                                name="operario"
                                disabled
                                style={{ width: 160, color: "#222" }}
                                value={proceso.nombreOperario}
                              />
                            </td>

                            <td>
                              <div className="wrap-input ">
                                <input
                                  className="input_fecha"
                                  type="text"
                                  name="fecha"
                                  style={{ width: 80, color: "#222" }}
                                  disabled
                                  value={proceso.fecha}
                                />
                                <span className="focus-input"></span>
                              </div>
                            </td>

                            <td>
                              <div className="wrap-input ">
                                <input
                                  className="input_notas notas-movil"
                                  type=" text"
                                  name="notas"
                                  style={{ width: 130, color: "#222" }}
                                  disabled
                                  value={proceso.notas}
                                />
                                <span className="focus-input"></span>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <span>
              <div className="row" style={{ marginTop: 30 }}>
                <select
                  className="form-control proceso1"
                  style={{ width: 200 }}
                  onChange={onChangeFinalizar}
                  id="selectFinalizar"
                >
                  <option>Seleccione proceso</option>
                  {procesos.map((proceso) => {
                    return (
                      <option
                        key={proceso.id}
                        hidden={proceso.estado === "finalizado"}
                      >
                        {proceso.id}
                      </option>
                    );
                  })}
                </select>
                <textarea
                  className="form-control espacio"
                  name="ObservacionesGenerales"
                  style={{ width: 225 }}
                  placeholder="Observaciones Generales"
                  onChange={onChangeObservacion}
                ></textarea>
                <button className="guardar-form-btn" onClick={onClickFinalizar}>
                  Finalizar Proceso
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
