import React, { Component } from "react";
import Product from "./Product";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
import NavBar from "./NavBar";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="py-5">
          <div className="container">
            {/* <Title name="our" title="ptoducts" /> */}
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
