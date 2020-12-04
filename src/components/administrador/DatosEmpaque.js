import React, { useState } from "react";
import Swal from "sweetalert2";
import "./datosEmpaque.css";

import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function DatosEmpaque() {
  const [formData, setFormData] = useState(defaultValues());

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    db.collection("datosEmpaque")
      .add(formData)
      .then(() => {
        Swal.fire(
          "Empaque agregado",
          `El empaque ${formData.articuloFinal} ha sido agregado exitosamente`,
          "success"
        );
      })
      .catch((err) => {
        Swal.fire(
          "Error",
          `Los datos del empaque ${
            formData.articuloFinal
          } no se ha agregado error: ${JSON.stringify(err)}`,
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
            <span className="registro-form-titulo p-b-34 p-t-27">
              Datos de empaque
            </span>

            <div className="container formulario-proceso">
              <div className="row centered-form">
                <div className="col-xs-6 col-sm-12 col-md-12 col-sm-offset-2">
                  <div className=""></div>
                  <div className="panel-body">
                    <form onSubmit={handleSubmit} onChange={onChange}>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <label>Articulo Final</label>
                            <input
                              type="text"
                              name="articuloFinal"
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
                              name="ordenNo"
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
                              name="cliente"
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
                              name="codigoArticulo"
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
                              name="codigoOrigen"
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
                              name="formDeEmpaque"
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
                              name="cuboNo"
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
                              name="acabado"
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

  function defaultValues() {
    return {
      articuloFinal: "",
      ordenNo: "",
      cliente: "",
      codigoArticulo: "",
      codigoOrigen: "",
      formDeEmpaque: "",
      cuboNo: "",
      acabado: "",
    };
  }
}
