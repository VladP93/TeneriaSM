import React from "react";
import logo from "../../assets/logo.jpeg";
import firebase from "../../utils/Firebase";
import "firebase/auth";
import "firebase/firestore";

import "./menu.css";

export default function Menu(props) {
  const { setUser, setTab } = props;

  const logout = () => {
    setUser(null);
    firebase.auth().signOut();
    window.location.href = "/";
  };

  return (
    <div>
      <div className="row affix-row">
        <div className="col-sm-4 col-md-12 affix-sidebar">
          <div className="content">
            <div className="menu">
              <ul>
                <div className=" perfil p-b-34 p-t-27">
                  <img src={logo} alt="" width="150" />
                </div>
                <div className="menu-header">Menu </div>
                <div className="activar p-t-27">
                  <button
                    className="menu-form-btn"
                    onClick={() => setTab("procesos")}
                  >
                    Procesos
                  </button>
                </div>
                <div className="activar p-t-27">
                  <button
                    className="menu-form-btn"
                    onClick={() => setTab("controlSeleccion")}
                  >
                    Control Selección
                  </button>
                </div>
                <div className="activar p-t-27">
                  <button className="menu-form-btn" onClick={logout}>
                    Cerrar sesión
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
