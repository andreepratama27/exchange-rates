import React from "react";

const GridRates = () => {
  return (
    <div className="card card-rates no-shadow">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <div className="currency">
              <div className="currency-top">
                <div className="currency-top__box">IDR</div>
                <div className="currency-top__bottom">144,104.5</div>
              </div>

              <div className="currency-middle">
                <div className="currency-middle__text">
                  <strong>IDR = Indonesian Rupiah</strong>
                </div>
              </div>

              <div className="currency-bottom">
                <div className="currency-bottom__text">
                  <i>1 USD = 14,410.50</i>
                </div>
              </div>
            </div>
          </div>
          <div className="media-right">
            <button className="button is-warning">-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridRates;
