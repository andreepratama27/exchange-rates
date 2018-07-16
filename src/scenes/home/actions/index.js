import * as types from "@src/constants/actionTypes";

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
