import * as types from "@src/constants/actionTypes";

const initialState = {
  rates: [
    {
      code: "USD",
      name: "United States Dollar"
    },
    {
      code: "CAD",
      name: "Canada Dollar"
    },
    {
      code: "IDR",
      name: "Indonesia Rupiah"
    },
    {
      code: "GBP",
      name: "British Poundsterling"
    },
    {
      code: "CHF",
      name: "Switzerland Franc"
    },
    {
      code: "SGD",
      name: "Singapore Dollar"
    },
    {
      code: "INR",
      name: "India Rupee"
    },
    {
      code: "MYR",
      name: "Malaysia Ringgit"
    },
    {
      code: "JPY",
      name: "Japan Yen"
    },
    {
      code: "KRW",
      name: "Korea Won"
    }
  ],
  card: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_CARD: {
      return Object.assign({}, state, {
        card: action.data
      });
    }

    case types.ADD_CARD: {
      let findData = state.rates.find(v => v.code === action.data.rate) || {};
      return {
        ...state,
        card: [...state.card, findData]
      };
    }

    case types.DELETE_CARD: {
      let deleteCard = state.card.find(v => v.code !== action.data) || [];

      return {
        ...state,
        card: [deleteCard]
      };
    }

    default: {
      return state;
    }
  }
};

export default reducers;
