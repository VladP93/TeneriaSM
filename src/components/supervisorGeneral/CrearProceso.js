import React from "react";

import "./crearProceso.css";

export default function CrearProceso() {
  return (
    <div>
      <div className="limite">
        <div
          className="container-Registro"
          style={{ backgroundColor: "#69859A" }}
        >
          <div className="wrap-Registro">
            <span className="registro-form-titulo">Nuevo proceso</span>

            <div className="container formulario-proceso">
              <div className="row centered-form">
                <div className="col-xs-6 col-sm-12 col-md-12 col-sm-offset-2">
                  <div className=""></div>
                  <div className="panel-body">
                    <form>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Articulo</label>
                            <input
                              type="text"
                              name="Articulo"
                              className="form-control input-sm"
                              placeholder="Articulo"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Fecha</label>
                            <input
                              type="text"
                              name="fecha"
                              className="form-control input-sm"
                              placeholder="Fecha"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Color</label>
                            <input
                              type="text"
                              name="color"
                              className="form-control input-sm"
                              placeholder="Color"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Lote</label>
                            <input
                              type="text"
                              name="lote"
                              className="form-control input-sm"
                              placeholder="Lote"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Seleccion</label>
                            <input
                              type="text"
                              name="seleccion"
                              className="form-control input-sm"
                              placeholder="Seleccion"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Cantidad</label>
                            <input
                              type="text"
                              name="Cantidad"
                              className="form-control input-sm"
                              placeholder="Cantidad"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Espesor</label>
                            <input
                              type="text"
                              name="Espesor"
                              className="form-control input-sm"
                              placeholder="Espesor"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Traslado</label>
                            <input
                              type="text"
                              name="Translado"
                              className="form-control input-sm"
                              placeholder="Traslado N°"
                            />
                            <span className="focus-input"></span>
                          </div>
                        </div>
                      </div>
                      <div className="container-registro-form-btn">
                        <button className="registro-form-btn">
                          Crear Proceso
                        </button>
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
