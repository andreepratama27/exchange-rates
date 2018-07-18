import * as types from "@src/constants/actionTypes";

const initialState = {
  local: [],
  latest: [],
  rates: [
    {
      code: "USD",
      name: "United States Dollar",
      money: 0
    },
    {
      code: "CAD",
      name: "Canada Dollar",
      money: 0
    },
    {
      code: "IDR",
      name: "Indonesia Rupiah",
      money: 0
    },
    {
      code: "GBP",
      name: "British Poundsterling",
      money: 0
    },
    {
      code: "CHF",
      name: "Switzerland Franc",
      money: 0
    },
    {
      code: "SGD",
      name: "Singapore Dollar",
      money: 0
    },
    {
      code: "INR",
      name: "India Rupee",
      money: 0
    },
    {
      code: "MYR",
      name: "Malaysia Ringgit",
      money: 0
    },
    {
      code: "JPY",
      name: "Japan Yen",
      money: 0
    },
    {
      code: "KRW",
      name: "Korea Won",
      money: 0
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

    case types.LATEST_RATES: {
      return {
        ...state,
        latest: action.data.rates,
        local: action.data.rates.IDR
      };
    }

    case types.ADD_CARD: {
      let findData = state.rates.find(v => v.code === action.data.rate) || {};
      findData.money = action.data.money;

      return {
        ...state,
        card: [...state.card, findData]
      };
    }

    case types.DELETE_CARD: {
      let deleteCard = state.card.find(v => v.code !== action.data);

      console.log(
        "delete card",
        typeof deleteCard === "undefined" ? "yes" : "false"
      );

      return {
        ...state,
        card: typeof deleteCard === "undefined" ? [] : [deleteCard]
      };
    }

    default: {
      return state;
    }
  }
};

export default reducers;
