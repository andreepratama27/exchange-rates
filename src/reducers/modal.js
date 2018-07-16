import * as types from "@src/constants/actionTypes";

const initialState = {
  show: false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        ...state,
        show: true
      };
    }

    case types.HIDE_MODAL: {
      return {
        ...state,
        show: false
      };
    }

    default: {
      return state;
    }
  }
};

export default reducers;
