import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { hideModal } from "@src/actions";
import { addCard } from "@scenes/home/actions";

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch => ({
  addCard(data) {
    dispatch(addCard(data));
  },

  hideModal() {
    dispatch(hideModal());
  }
});

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  _listenChangeRates(e) {
    const {
      home: { latest }
    } = this.props;

    this.props.addCard({
      rate: e.target.value,
      money: latest[e.target.value]
    });
  }

  render() {
    return (
      <div className={`modal modal-option ${this.props.active && "is-active"}`}>
        <div className="modal-background" />
        <div className="modal-content">
          <p className="subtitle">Select your currency</p>
          <div className="select">
            <select onChange={e => this._listenChangeRates(e)}>
              {this.props.rate &&
                this.props.rate.map((v, keys) => (
                  <option key={keys}>{v.code}</option>
                ))}
            </select>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => this.props.hideModal()}
        />
      </div>
    );
  }
}

Modal.defaultProps = {
  active: false
};

Modal.propTypes = {
  active: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
