import React, { useState, useEffect } from "react";

import "./procesos.css";

import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function Procesos() {
  const [procesos, setProcesos] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    db.collection("procesos")
      .get()
      .then((res) => {
        var tempProcesos = [];
        res.docs.forEach((proceso) => {
          var newProceso = proceso.data();
          newProceso.id = proceso.id;
          tempProcesos.push(newProceso);
        });
        setProcesos(tempProcesos);
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
                      <th>Indicación</th>
                      <th>Nombre del operario</th>
                      <th>fecha</th>
                      <th>notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {procesos.map((proceso)=>{
                      return(
                        <tr key={proceso.id}>
                          
                        </tr>
                      )
                    })} */}
                    <tr>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="inputid"
                            type="text"
                            name="id"
                            placeholder=""
                            style={{ width: 30 }}
                            disabled
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
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
                          style={{ width: 180 }}
                          placeholder="Indicación"
                        />
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
                          disabled
                          style={{ width: 180 }}
                        />
                      </td>

                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_fecha"
                            type="text"
                            name="fecha"
                            style={{ width: 90 }}
                            disabled
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
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="asd">
                          <button
                            type="button"
                            className="btn btn-success"
                            style={{ width: 60 }}
                          >
                            Ok
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="inputid"
                            type="text"
                            name="id"
                            placeholder=""
                            style={{ width: 30 }}
                            disabled
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
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
                          style={{ width: 180 }}
                          placeholder="Indicación"
                        />
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
                          disabled
                          style={{ width: 180 }}
                        />
                      </td>

                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_fecha"
                            type="text"
                            name="fecha"
                            style={{ width: 90 }}
                            disabled
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
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="asd">
                          <button
                            type="button"
                            className="btn btn-success"
                            style={{ width: 60 }}
                          >
                            Ok
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="inputid"
                            type="text"
                            name="id"
                            placeholder=""
                            style={{ width: 30 }}
                            disabled
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
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
                          style={{ width: 180 }}
                          placeholder="Indicación"
                        />
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
                          disabled
                          style={{ width: 180 }}
                        />
                      </td>

                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_fecha"
                            type="text"
                            name="fecha"
                            style={{ width: 90 }}
                            disabled
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
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="asd">
                          <button
                            type="button"
                            className="btn btn-success"
                            style={{ width: 60 }}
                          >
                            Ok
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="inputid"
                            type="text"
                            name="id"
                            placeholder=""
                            style={{ width: 30 }}
                            disabled
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
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
                          style={{ width: 180 }}
                          placeholder="Indicación"
                        />
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
                          disabled
                          style={{ width: 180 }}
                        />
                      </td>

                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_fecha"
                            type="text"
                            name="fecha"
                            style={{ width: 90 }}
                            disabled
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
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="asd">
                          <button
                            type="button"
                            className="btn btn-success"
                            style={{ width: 60 }}
                          >
                            Ok
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="inputid"
                            type="text"
                            name="id"
                            placeholder=""
                            style={{ width: 30 }}
                            disabled
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
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
                          style={{ width: 180 }}
                          placeholder="Indicación"
                        />
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
                          disabled
                          style={{ width: 180 }}
                        />
                      </td>

                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_fecha"
                            type="text"
                            name="fecha"
                            style={{ width: 90 }}
                            disabled
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
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="asd">
                          <button
                            type="button"
                            className="btn btn-success"
                            style={{ width: 60 }}
                          >
                            Ok
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="inputid"
                            type="text"
                            name="id"
                            placeholder=""
                            style={{ width: 30 }}
                            disabled
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
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
                          style={{ width: 180 }}
                          placeholder="Indicación"
                        />
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
                          disabled
                          style={{ width: 180 }}
                        />
                      </td>

                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_fecha"
                            type="text"
                            name="fecha"
                            style={{ width: 90 }}
                            disabled
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
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="asd">
                          <button
                            type="button"
                            className="btn btn-success"
                            style={{ width: 60 }}
                          >
                            Ok
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="inputid"
                            type="text"
                            name="id"
                            placeholder=""
                            style={{ width: 30 }}
                            disabled
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
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
                          style={{ width: 180 }}
                          placeholder="Indicación"
                        />
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
                          disabled
                          style={{ width: 180 }}
                        />
                      </td>

                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_fecha"
                            type="text"
                            name="fecha"
                            style={{ width: 90 }}
                            disabled
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
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="asd">
                          <button
                            type="button"
                            className="btn btn-success"
                            style={{ width: 60 }}
                          >
                            Ok
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="inputid"
                            type="text"
                            name="id"
                            placeholder=""
                            style={{ width: 30 }}
                            disabled
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
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
                          style={{ width: 180 }}
                          placeholder="Indicación"
                        />
                      </td>
                      <td>
                        <input
                          className="input_Cantidad"
                          type="text"
                          name="operario"
                          disabled
                          style={{ width: 180 }}
                        />
                      </td>

                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_fecha"
                            type="text"
                            name="fecha"
                            style={{ width: 90 }}
                            disabled
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
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="asd">
                          <button
                            type="button"
                            className="btn btn-success"
                            style={{ width: 60 }}
                          >
                            Ok
                          </button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <span>
              <div className="row" style={{ marginTop: 30 }}>
                <select className="form-control proceso1  ">
                  <option>Proceso </option>
                  <option>Proceso 2</option>
                  <option> Proceso 3</option>
                </select>
                <textarea
                  className="form-control espacio"
                  name="ObservacionesGenerales"
                  style={{ width: 225 }}
                  placeholder="Observaciones Generales"
                ></textarea>
                <a href="asd" target="contenido">
                  <button className="guardar-form-btn">
                    Finalizar Proceso
                  </button>
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
