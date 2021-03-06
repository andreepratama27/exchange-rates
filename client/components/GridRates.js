import React from "react";

const GridRates = ({ code, name, money, latest, deleteFunc }) => {
  return (
    <div className="card card-rates no-shadow">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <div className="currency">
              <div className="currency-top">
                <div className="currency-top__box">{code}</div>
                <div className="currency-top__bottom">
                  {parseFloat(latest[code]).toFixed(2)}
                </div>
              </div>

              <div className="currency-middle">
                <div className="currency-middle__text">
                  <strong>
                    {code} = {name}
                  </strong>
                </div>
              </div>

              <div className="currency-bottom">
                <div className="currency-bottom__text">
                  <i>
                    1 USD = {code} {parseFloat(money).toFixed(2)}
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="media-right">
            <button className="button is-warning" onClick={deleteFunc}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridRates;
