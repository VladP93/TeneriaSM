import React, { useState } from "react";
import Swal from "sweetalert2";
import "./crearProceso.css";

import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function CrearProceso() {
  const [formData, setFormData] = useState(defaultValues());

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    formData.estado = "iniciado";
    db.collection("procesos")
      .add(formData)
      .then(() => {
        Swal.fire(
          "Proceso agregado",
          `El proceso ha sido agregado exitosamente`,
          "success"
        );
      })
      .catch((err) => {
        Swal.fire(
          "Error",
          `Los datos del proceso no se han agregado error: ${JSON.stringify(
            err
          )}`,
          "error"
        );
      });

    event.preventDefault();
    event.target.reset();
  };

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
                    <form onSubmit={handleSubmit} onChange={onChange}>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Articulo</label>
                            <input
                              type="text"
                              name="articulo"
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
                              name="cantidad"
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
                              name="espesor"
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
                              name="traslado"
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

  function defaultValues() {
    return {
      articulo: "",
      fecha: "",
      color: "",
      lote: "",
      seleccion: "",
      cantidad: "",
      espesor: "",
      traslado: "",
      //operacion
      //indicacion
      //nombreOperacion
      //notas
    };
  }
}
