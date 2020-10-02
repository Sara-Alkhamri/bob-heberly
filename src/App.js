import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/art" component={ProductList} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
