import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Inicio from "../pages/Inicio";
import Quartos from "../pages/Quartos";

export default function Rotas() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/quartos" component={Quartos} />
      </Switch>
    </HashRouter>
  );
}
