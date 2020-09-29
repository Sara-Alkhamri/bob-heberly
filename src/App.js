import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
