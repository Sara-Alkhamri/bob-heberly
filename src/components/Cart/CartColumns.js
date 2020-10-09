import React from "react";

export default function cartColumns() {
  return (
    <div className="container text-center d-none d-lg-block pt-5">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Art Piece</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Name of Art Piece</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
      </div>
    </div>
  );
}
