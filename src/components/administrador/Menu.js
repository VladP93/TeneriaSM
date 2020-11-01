import React from "react";
import logo from "../../assets/logo.jpeg";
import "./menu.css";
import firebase from "../../utils/Firebase";
import "firebase/auth";
import "firebase/firestore";

export default function Menu(props) {
  const { setUser, setTab } = props;

  const logout = () => {
    setUser(null);
    firebase.auth().signOut();
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
                <div className="menu-header">Menú </div>

                <div className="activar p-t-27">
                  <button
                    className="menu-form-btn"
                    onClick={() => setTab("operaciones")}
                  >
                    Gestionar Operaciones
                  </button>
                </div>

                <div className="activar p-t-27">
                  <button
                    className="menu-form-btn"
                    onClick={() => setTab("usuarios")}
                  >
                    Gestionar Usuarios
                  </button>
                </div>
                <div className="activar p-t-27">
                  <button
                    className="menu-form-btn"
                    onClick={() => setTab("empaque")}
                  >
                    Datos de empaque
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
