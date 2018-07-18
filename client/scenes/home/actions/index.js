import * as types from "@src/constants/actionTypes";
import { API } from "@src/services/APIServices";

export const initCard = data => {
  return {
    type: types.INIT_CARD,
    data
  };
};

export const addCard = data => {
  return dispatch => {
    dispatch({ type: types.ADD_CARD, data });
    dispatch({ type: types.HIDE_MODAL });
  };
};

export const deleteCard = data => {
  return {
    type: types.DELETE_CARD,
    data
  };
};

export const latestRates = data => {
  return dispatch => {
    API()
      .get("latest")
      .then(res => {
        dispatch({ type: types.LATEST_RATES, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
