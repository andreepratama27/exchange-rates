import React, { Component } from "react";
import { connect } from "react-redux";
import HomeComponent from "@scenes/home/components/HomeComponent";
import { showModal, hideModal } from "@src/actions";
import { addCard, deleteCard, latestRates } from "@scenes/home/actions";

const mapStateToProps = state => ({
  home: state.home,
  modal: state.modal
});

const mapDispatchToProps = dispatch => ({
  showModal(data) {
    dispatch(showModal(data));
  },

  hideModal() {
    dispatch(hideModal());
  },

  addCard(data) {
    dispatch(addCard(data));
  },

  deleteCard(data) {
    dispatch(deleteCard(data));
  },

  getLatest(data) {
    dispatch(latestRates(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
