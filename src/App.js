import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Modal from "./components/Modal";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/art" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
