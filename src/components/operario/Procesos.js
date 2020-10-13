import React from "react";
import "./procesos.css";

export default function Procesos() {
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
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <select className="form-control">
                          <option>Lijado</option>
                          <option>Impregnado</option>
                        </select>
                      </td>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_Cantidad"
                            type="text"
                            name="cantidad"
                            placeholder="Cantidad"
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
                            placeholder="Notas"
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="#asd">
                          <button
                            type="submit"
                            className="form-control btn btn-success"
                          >
                            Guardar
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
                            style={{ width: 40 }}
                            disabled
                            placeholder=""
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <select className="form-control">
                          <option>Lijado</option>
                          <option>Impregnado</option>
                        </select>
                      </td>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_Cantidad"
                            type="text"
                            name="cantidad"
                            placeholder="Cantidad"
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
                            placeholder="Notas"
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="#asd">
                          <button
                            type="submit"
                            className="form-control btn btn-success"
                          >
                            Guardar
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
                            style={{ width: 40 }}
                            disabled
                            placeholder=""
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <select className="form-control">
                          <option>Lijado</option>
                          <option>Impregnado</option>
                        </select>
                      </td>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_Cantidad"
                            type="text"
                            name="cantidad"
                            placeholder="Cantidad"
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
                            placeholder="Notas"
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="#asd">
                          <button
                            type="submit"
                            className="form-control btn btn-success"
                          >
                            Guardar
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
                            style={{ width: 40 }}
                            disabled
                            placeholder=""
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <select className="form-control">
                          <option>Lijado</option>
                          <option>Impregnado</option>
                        </select>
                      </td>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_Cantidad"
                            type="text"
                            name="cantidad"
                            placeholder="Cantidad"
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
                            placeholder="Notas"
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="#asd">
                          <button
                            type="submit"
                            className="form-control btn btn-success"
                          >
                            Guardar
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
                            style={{ width: 40 }}
                            disabled
                            placeholder=""
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <select className="form-control">
                          <option>Lijado</option>
                          <option>Impregnado</option>
                        </select>
                      </td>
                      <td>
                        <div className="wrap-input ">
                          <input
                            className="input_Cantidad"
                            type="text"
                            name="cantidad"
                            placeholder="Cantidad"
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
                            placeholder="Notas"
                          />
                          <span className="focus-input"></span>
                        </div>
                      </td>
                      <td>
                        <a href="#asd">
                          <button
                            type="submit"
                            className="form-control btn btn-success"
                          >
                            Guardar
                          </button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
