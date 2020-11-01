import React from "react";
import { Switch, Route } from "react-router-dom";

//Pages
import Administrador from "../pages/Administrador";
import Operario from "../pages/Operario";
import SupervisorContorlSeleccion from "../pages/SupervisorControlSeleccion";
import SupervisorGeneral from "../pages/SupervisorGeneral";
import SupervisorProcesos from "../pages/SupervisorProcesos";

export default function Routes(props) {
  const { rol, setUser } = props;

  return (
    <Switch>
      <Route path="/administrador" exact>
        <Administrador rol={rol} setUser={setUser} />
      </Route>
      <Route path="/operario" exact>
        <Operario setUser={setUser} />
      </Route>
      <Route path="/supcontrolseleccion" exact>
        <SupervisorContorlSeleccion rol={rol} setUser={setUser} />
      </Route>
      <Route path="/supgeneral" exact>
        <SupervisorGeneral rol={rol} setUser={setUser} />
      </Route>
      <Route path="/supprocesos" exact>
        <SupervisorProcesos rol={rol} setUser={setUser} />
      </Route>
      <Route path="">
        <h2>No permitido!</h2>
      </Route>
    </Switch>
  );
}
