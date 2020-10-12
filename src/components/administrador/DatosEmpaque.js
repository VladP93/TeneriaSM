import React from "react";
import "./datosEmpaque.css";

export default function DatosEmpaque() {
  return (
    <div>
      <div className="limite">
        <div
          className="container-Registro"
          style={{ backgroundColor: "#69859A" }}
        >
          <div className="wrap-Registro">
            <span className="registro-form-titulo p-b-34 p-t-27">
              Datos de empaque
            </span>

            <div className="container formulario-proceso">
              <div className="row centered-form">
                <div className="col-xs-6 col-sm-12 col-md-12 col-sm-offset-2">
                  <div className=""></div>
                  <div className="panel-body">
                    <form>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Articulo Final</label>
                            <input
                              type="text"
                              name="Articulo"
                              className="form-control input-sm"
                              placeholder="Articulo Final"
                              required=""
                              pattern="[a-zA-Z]+"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Orden N°</label>
                            <input
                              type="text"
                              name="Orden"
                              className="form-control input-sm"
                              placeholder="Orden"
                              pattern="[0-9]+"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Cliente</label>
                            <input
                              type="text"
                              name="Cliente"
                              className="form-control input-sm"
                              placeholder="Cliente"
                              required=""
                              pattern="[a-zA-Z\s]+"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Codigo de Articulo</label>
                            <input
                              type="text"
                              name="Codigo"
                              className="form-control input-sm"
                              placeholder="Codigo"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Codigo de Origen</label>
                            <input
                              type="text"
                              name="Cod_Origen"
                              className="form-control input-sm"
                              placeholder="Cod Origen"
                              required=""
                              pattern="[0-9]+"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Form de Empaque</label>
                            <input
                              type="text"
                              name="Empaque"
                              className="form-control input-sm"
                              placeholder="Empaque"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Cubo #</label>
                            <input
                              type="text"
                              name="cubo"
                              className="form-control input-sm"
                              placeholder="cubo"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Acabado</label>
                            <input
                              type="text"
                              name="Acabado"
                              className="form-control input-sm"
                              placeholder="Acabado"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                      </div>
                      <div className="container-registro-form-btn">
                        <button className="registro-form-btn">Guardar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
