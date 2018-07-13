import React, { Component, Fragment } from "react";

class HomeComponent extends Component {
  render() {
    return (
      <Fragment>
        <nav
          className="navbar is-info"
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

        <main className="column content">
          <div className="card">
            <div className="card-header">Andre</div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default HomeComponent;
