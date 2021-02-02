import React, { useState, useEffect } from "react";
import "./procesos.css";
import moment from "moment";
import Swal from "sweetalert2";

import firebase from "../../utils/Firebase";
import "firebase/firestore";
import "firebase/auth";

const db = firebase.firestore(firebase);

export default function Procesos() {
  const [operaciones, setOperaciones] = useState([]);
  const [procesos, setProcesos] = useState([]);
  const [formData, setFormData] = useState(defaultValues());
  const [refreshData, setRefreshData] = useState(false);

  const nombreOperario = firebase.auth().currentUser.displayName;
  const fecha = moment().format("DD/MM/YY");

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      nombreOperario,
      fecha,
    });
  };

  const onSubmit = (e) => {
    db.collection("procesos")
      .add(formData)
      .then(() => {
        Swal.fire(
          "Proceso guardado",
          `El proceso ha sido guardado exitosamente`,
          "success"
        );
      })
      .catch((err) => {
        Swal.fire("Error", "El procesos no se ha podido guardar", "error");
      });

    document.getElementById("selectOp").value = 0;
    document.getElementById("cantidad").value = "";
    document.getElementById("notas").value = "";
    setRefreshData(true);
    e.preventDefault();
  };

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

  useEffect(() => {
    db.collection("procesos")
      .orderBy("fecha")
      .get()
      .then((res) => {
        var tempProcs = [];
        res.docs.forEach((procs) => {
          var newProc = procs.data();
          newProc.id = procs.id;
          tempProcs.push(newProc);
        });
        setProcesos(tempProcs);
      });
    setRefreshData(false);
  }, [refreshData]);

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
                      <th>Nombre del operario</th>
                      <th>fecha</th>
                      <th>notas</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="inputid"
                            type="text"
                            name="id"
                            style={{ width: 40 }}
                            disabled
                            placeholder=""
                            value="****"
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <select
                          className="form-control"
                          name="operacion"
                          onChange={onChange}
                          id="selectOp"
                        >
                          <option value={0}>Seleccione</option>
                          {operaciones.map((op) => {
                            return (
                              <option value={op.Nombre} key={op.id}>
                                {op.Nombre}
                              </option>
                            );
                          })}
                        </select>
                      </td>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_Cantidad"
                            type="text"
                            name="cantidad"
                            id="cantidad"
                            placeholder="Cantidad"
                            onChange={onChange}
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>

                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
                          style={{ width: 170 }}
                          disabled
                          value={nombreOperario}
                        />
                        <span className="focus-input"></span>
                      </td>

                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_fecha"
                            type="text"
                            name="fecha"
                            disabled
                            placeholder="Fecha"
                            value={fecha}
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
                            id="notas"
                            placeholder="Notas"
                            onChange={onChange}
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <form onSubmit={onSubmit}>
                          <button
                            type="submit"
                            onSubmit={onSubmit}
                            className="form-control btn btn-success"
                          >
                            Guardar
                          </button>
                        </form>
                      </td>
                    </tr>

                    {procesos.map((proc) => {
                      return (
                        <tr key={proc.id}>
                          <td>
                            <div className="wrap-input ">
                              <input
                                className="inputid"
                                type="text"
                                name="id"
                                style={{ width: 40 }}
                                disabled
                                placeholder=""
                                value={proc.id}
                              />
                              <span className="focus-input"></span>
                            </div>
                          </td>
                          <td>
                            <select
                              className="form-control"
                              name="operacion"
                              disabled
                            >
                              <option value={null}>{proc.operacion}</option>
                            </select>
                          </td>
                          <td>
                            <div className="wrap-input ">
                              <input
                                className="input_Cantidad"
                                type="text"
                                name="cantidad"
                                id="cantidad"
                                disabled
                                value={proc.cantidad}
                              />
                              <span className="focus-input"></span>
                            </div>
                          </td>

                          <td>
                            <input
                              className="input_Cantidad"
                              type="text"
                              name="operario"
                              style={{ width: 170 }}
                              disabled
                              value={proc.nombreOperario}
                            />
                            <span className="focus-input"></span>
                          </td>

                          <td>
                            <div className="wrap-input ">
                              <input
                                className="input_fecha"
                                type="text"
                                name="fecha"
                                disabled
                                value={proc.fecha}
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
                                id="notas"
                                value={proc.notas}
                                disabled
                              />
                              <span className="focus-input"></span>
                            </div>
                          </td>
                          <td></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function defaultValues() {
    return {
      operacion: "",
      cantidad: "",
      nombreOperario: "",
      fecha: "",
      notas: "",
    };
  }
}
