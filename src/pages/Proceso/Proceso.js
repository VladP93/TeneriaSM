import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import firebase from "../../utils/Firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function Proceso(props) {
  const { rol, setUser } = props;
  let { id } = useParams();
  const [proceso, setProceso] = useState([]);

  const logout = () => {
    setUser(null);
    firebase.auth().signOut();
    window.location.href = "/";
  };

  useEffect(() => {
    db.collection("procesos")
      .doc(id)
      .get()
      .then((res) => {
        setProceso(res.data());
      });
  }, [id]);

  return (
    <div style={{ backgroundColor: "#69859ae6", margin: "10%" }}>
      <p>
        <b>Estado: </b> {proceso.estado} &nbsp;&nbsp;&nbsp;&nbsp; <b>Fecha: </b>{" "}
        {proceso.fecha}
      </p>
      <br />
      <p>
        <b>Operario: </b> {proceso.nombreOperario} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <b>Cantidad: </b> {proceso.cantidad}
      </p>
      <br />
      <p>
        <b>Operación: </b> {proceso.operacion} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <b>Indicación: </b> {proceso.indicacion}
      </p>
      <br />
      <p>
        <b>Notas: </b> {proceso.notas} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <b>Observación: </b> {proceso.observacion}
      </p>
      <br />
      <div style={{ justifyContent: "space-between" }}>
        <p>
          <Link to={"/" + rol} style={{ color: "#FF0", fontSize: "24px" }}>
            <u>Regresar</u>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <u
            style={{ color: "#FF0", fontSize: "24px", cursor: "pointer" }}
            onClick={logout}
          >
            Cerrar Sesión
          </u>
        </p>
      </div>
    </div>
  );
}
