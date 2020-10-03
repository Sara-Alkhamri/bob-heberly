import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  {/* <h1>{title}</h1> */}
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                  <h1>{title}</h1>
                  <h4 className="text-title text-capitalize text-muted mt-3 mb-2">
                    A Robert Heberly Original
                    <span className="text-uppercase"></span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalized font-weight-bold mt-3 mb-0">
                    Description <p className="text-muted lead">{info}</p>
                  </p>
                  {/* buttons */}
                  <div>
                    <Link to="/art">
                      <ButtonContainer>Back to Collection</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "Add to Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
