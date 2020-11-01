import React from "react";
import { Redirect, BrowserRouter as Router } from "react-router-dom";
import Routes from "../routes/Routes";

export default function Logged(props) {
  const { rol, setUser } = props;

  //supcontrolseleccion, supprocesos, administrador, supgeneral, operario
  const handleRol = () => {
    switch (rol) {
      case "administrador":
        return <Redirect to={{ pathname: "/administrador" }} />;
      case "operario":
        return <Redirect to={{ pathname: "/operario" }} />;
      case "supcontrolseleccion":
        return <Redirect to={{ pathname: "/supcontrolseleccion" }} />;
      case "supgeneral":
        return <Redirect to={{ pathname: "/supgeneral" }} />;
      case "supprocesos":
        return <Redirect to={{ pathname: "/supprocesos" }} />;
      default:
        return <h2>Cargando...</h2>;
    }
  };

  return (
    <Router>
      <Routes rol={rol} setUser={setUser} />
      {handleRol()}
    </Router>
  );
}
