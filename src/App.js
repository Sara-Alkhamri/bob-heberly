import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Modal from "./components/Modal";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/art" component={ProductList} />
        <Route exact path="/art/portraites" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Modal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
