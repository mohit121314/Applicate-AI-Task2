import React, { Component } from "react";
import "./App.css";
import checkoutdata from "./checkoutdata.json";

export default class checkoutpage extends Component {
  render() {
    return (
      <div className="checkoutContainer">
        <section className="section">
          <div className="cardWrapper cartContainer">
            <h1>Items in your cart</h1>
            {checkoutdata.map((item) => {
              return (
                <div className="card cartItem">
                  <div className="prodPic">
                    <img src={item.image} alt="product-image" />
                  </div>
                  <div className="prodDetailsWrapper">
                    <p className="brand">{item.nameofproduct}</p>
                    <p className="prodName">
                      {item.brand} <span>{item.qty}</span>
                    </p>
                    <p className="price">&#8377;{item.price}/-</p>
                    <p className="category">Category: {item.category}</p>
                  </div>
                </div>
              );
            })}

            <button
              type="button"
              onClick={() => this.props.history.push(`/success`)}
            >
              Place Order
            </button>
          </div>
        </section>
      </div>
    );
  }
}
