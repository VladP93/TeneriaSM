import React from "react";

import "./crearProceso.css";

export default function CrearProceso() {
  return (
    <div>
      <div class="limite">
        <div class="container-Registro" style={{ backgroundColor: "#69859A" }}>
          <div class="wrap-Registro">
            <span class="registro-form-titulo">Nuevo proceso</span>

            <div class="container formulario-proceso">
              <div class="row centered-form">
                <div class="col-xs-6 col-sm-12 col-md-12 col-sm-offset-2">
                  <div class=""></div>
                  <div class="panel-body">
                    <form>
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group">
                            <label>Articulo</label>
                            <input
                              type="text"
                              name="Articulo"
                              class="form-control input-sm"
                              placeholder="Articulo"
                            />
                            <span class="focus-input"></span>
                          </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group">
                            <label>Fecha</label>
                            <input
                              type="text"
                              name="fecha"
                              class="form-control input-sm"
                              placeholder="Fecha"
                            />
                            <span class="focus-input"></span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group">
                            <label>Color</label>
                            <input
                              type="text"
                              name="color"
                              class="form-control input-sm"
                              placeholder="Color"
                            />
                            <span class="focus-input"></span>
                          </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group">
                            <label>Lote</label>
                            <input
                              type="text"
                              name="lote"
                              class="form-control input-sm"
                              placeholder="Lote"
                            />
                            <span class="focus-input"></span>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group">
                            <label>Seleccion</label>
                            <input
                              type="text"
                              name="seleccion"
                              class="form-control input-sm"
                              placeholder="Seleccion"
                            />
                            <span class="focus-input"></span>
                          </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group">
                            <label>Cantidad</label>
                            <input
                              type="text"
                              name="Cantidad"
                              class="form-control input-sm"
                              placeholder="Cantidad"
                            />
                            <span class="focus-input"></span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group">
                            <label>Espesor</label>
                            <input
                              type="text"
                              name="Espesor"
                              class="form-control input-sm"
                              placeholder="Espesor"
                            />
                            <span class="focus-input"></span>
                          </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group">
                            <label>Traslado</label>
                            <input
                              type="text"
                              name="Translado"
                              class="form-control input-sm"
                              placeholder="Traslado N°"
                            />
                            <span class="focus-input"></span>
                          </div>
                        </div>
                      </div>
                      <div class="container-registro-form-btn">
                        <button class="registro-form-btn">Crear Proceso</button>
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
