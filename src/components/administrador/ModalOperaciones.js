import React, { useState, useEffect } from "react";
import "./tablaOperaciones.css";

import Swal from "sweetalert2";
import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function ModalOperaciones(props) {
  const { op, setRefreshData } = props;
  const [formData, setFormData] = useState(defaultValues());

  useEffect(() => {
    var editOp = { Nombre: "", Indicacion: "" };
    editOp.Nombre = op.Nombre;
    editOp.Indicacion = op.Indicacion;
    setFormData(editOp);

    document.getElementById("id").value = op.id;
    document.getElementById("nombre").value = op.Nombre;
    document.getElementById("indicacion").value = op.Indicacion;
  }, [op]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    formData.createAt = new Date();
    db.collection("operaciones")
      .doc(op.id)
      .update(formData)
      .then((res) => {
        Swal.fire(
          "Operacion editada",
          `La operacion ${formData.Nombre} ha sido editada exitosamente`,
          "success"
        );
        setRefreshData(true);
      })
      .catch((err) => {
        Swal.fire(
          "Error",
          `La operación ${
            formData.Nombre
          } no se ha agregado error: ${JSON.stringify(err)}`,
          "error"
        );
      });

    event.preventDefault();
  };

  return (
    <div>
      <div
        className="modal fade"
        id="modalOps"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalOps"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLocal">
                Editar Operacion
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Cerrar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                className="form-operacion"
                onSubmit={handleSubmit}
                onChange={onChange}
              >
                <span className="login-form-title">Nueva operación</span>

                <div className="wrap-input ">
                  <label htmlFor="id">Id:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Id"
                    id="id"
                    placeholder="Id"
                    disabled
                  />
                  <span className="focus-input"></span>
                </div>
                <div className="wrap-input ">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Nombre"
                    id="nombre"
                    placeholder="Nombre de operación"
                  />
                  <span className="focus-input"></span>
                </div>
                <div className="wrap-input ">
                  <label htmlFor="indicacion">Indicación:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Indicacion"
                    id="indicacion"
                    placeholder="Indicación"
                  />
                  <span className="focus-input"></span>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                data-dismiss="modal"
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function defaultValues() {
    return {
      Nombre: "",
      Indicacion: "",
    };
  }
}
