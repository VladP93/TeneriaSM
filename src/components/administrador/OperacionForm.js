import React, { useState } from "react";
import Swal from "sweetalert2";

import "./operacionForm.css";

import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function OperacionForm(props) {
  const { setTab } = props;
  const [formData, setFormData] = useState(defaultValues());

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    formData.createAt = new Date();
    db.collection("operaciones")
      .add(formData)
      .then((res) => {
        Swal.fire(
          "Operacion agregada",
          `La operacion ${formData.Nombre} ha sido agregada exitosamente`,
          "success"
        );
        setTab("operaciones");
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
      <div className="limite">
        <div className="container-Login" style={{ backgroundColor: "#69859A" }}>
          <div className="wrap-login">
            <form
              className="form-operacion"
              onSubmit={handleSubmit}
              onChange={onChange}
            >
              <span className="login-form-title p-b-34 p-t-27">
                Nueva operación
              </span>

              <div className="wrap-input ">
                <input
                  className="input1"
                  type="text"
                  name="id"
                  placeholder="Id"
                  disabled
                />
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input ">
                <input
                  className="input1"
                  type="text"
                  name="Nombre"
                  placeholder="Nombre de operación"
                />
                <span className="focus-input"></span>
              </div>
              <div className="wrap-input ">
                <input
                  className="input1"
                  type="text"
                  name="Indicacion"
                  id="id_indicacion"
                  placeholder="Indicación"
                />
                <span className="focus-input"></span>
              </div>

              <div className="container-login-form-btn">
                <input
                  type="submit"
                  className="login-form-btn"
                  value="Guardar"
                />
              </div>
            </form>
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
