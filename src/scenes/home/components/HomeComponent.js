import React, { Component, Fragment } from "react";
import Modal from "@components/Modal";
import GridRates from "@components/GridRates";
import { API } from "@src/services/APIServices";

class HomeComponent extends Component {
  componentDidMount() {}

  _deleteCard(card) {
    this.props.deleteCard(card.code);
  }

  render() {
    const {
      modal: { show },
      home: { card, rates }
    } = this.props;

    return (
      <Fragment>
        <nav
          className="navbar is-info is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a href="#" className="navbar-item">
              Exchange Rate
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </nav>

        <main className="rates">
          <div className="rates-type">
            <p className="subtitle is-6">USD - United States Dollars</p>
          </div>
          <div className="rates-value">
            <div className="rates-value__box">USD</div>
            <div className="rates-value__box">10.000,-</div>
          </div>
        </main>

        <main className="column content card-wrapper">
          {card.length ? (
            card.map((v, keys) => (
              <GridRates
                {...v}
                key={keys}
                deleteFunc={() => this._deleteCard(v, keys)}
              />
            ))
          ) : (
            <div className="message is-primary">
              <div className="message-body">Card not found</div>
            </div>
          )}
        </main>
        <div className="button-wrapper">
          <button
            className="button is-primary is-fullwidth btn-submit"
            onClick={() => this.props.showModal()}
          >
            (+) Add more currencies
          </button>
        </div>

        <Modal active={show} rate={rates} {...this.props} />
      </Fragment>
    );
  }
}

export default HomeComponent;
