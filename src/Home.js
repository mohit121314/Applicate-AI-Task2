import React, { Component } from "react";
import "./App.css";
import d from "./data.json";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      cart: 0,
    };
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  };
  handleChange = () => {
    this.setState(
      {
        cart: this.state.cart + 1,
      },
    );
  };
  render() {
    let filtereddata = d.filter((item) => {
      return (
        item.nameofproduct
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container">
        <header className="header">
          <p>Applicate AI</p>
          <a className="checkout">
                    <i className="fa fa-shopping-cart checkout" aria-hidden="true" onClick={() => this.props.history.push(`/checkout`)}><span>Checkout</span></i>
                    <span className="count">{this.state.cart}</span>
                </a>
        </header>
        <section className="section">
          <aside className="aside">
            <ul>
              <li className="active">Home</li>
              <li className="inactive">Groceries</li>
              <li className="inactive">Beauty &amp; Makeup</li>
              <li className="inactive">Electronics Market</li>
              <li className="inactive">Home &amp; Decor</li>
              <li className="inactive">Kitchen Accessories</li>
            </ul>
          </aside>
          <article className="article">
            <div className="formGroup">
              <input
                type="text"
                placeholder="Search Items By Product name"
                autoFocus
                value={this.state.search}
                onChange={this.updateSearch}
              />
              <i className="fa fa-search search" aria-hidden="true"></i>
            </div>
            <div className="cardWrapper">
              {filtereddata.map((item) => {
                return (
                  <div className="card">
                    <div className="prodPic">
                      <img src={item.image} />
                    </div>
                    <div className="prodDetailsWrapper">
                      <p className="brand">{item.nameofproduct}</p>
                      <p className="prodName">
                        {item.brand} <span>{item.qty}</span>
                      </p>
                      <p className="price">&#8377;{item.price}/-</p>
                      <p className="category">Category: {item.category}</p>
                    </div>
                    <div className="addToCart">
                      <button type="button" onClick={this.handleChange}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </section>
      </div>
    );
  }
}
