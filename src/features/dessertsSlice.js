// redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allDeserts: [],
  ordered: [],
  clearOrder: [],
  orderTotal: 0,
  totalProducts: 0,
};

export const dessertsSlice = createSlice({
  name: "dessert",
  initialState,
  reducers: {
    addAllDeserts: (state, { payload }) => {
      state.allDeserts = payload;
    },
    incrementOrder: (state, { payload }) => {
      const item = state.allDeserts.find((dessert) => dessert.id == payload);

      if (!item.amount) {
        item.amount = 1;
      } else {
        item.amount += 1;
      }

      dessertsSlice.caseReducers.calculateTotal(state);
    },
    decrementOrder: (state, { payload }) => {
      const item = state.allDeserts.find((dessert) => dessert.id == payload);

      item.amount -= 1;
      dessertsSlice.caseReducers.calculateTotal(state);
    },
    clearOrder: (state) => {},
    calculateTotal: (state) => {
      state.ordered = state.allDeserts.filter((dessert) => dessert.amount);

      let allOrdersAmout = 0;
      let allOrdersPrice = 0;
      state.ordered.forEach((order) => {
        allOrdersAmout += order.amount;
        allOrdersPrice += order.amount * order.price;
      });

      state.totalProducts = allOrdersAmout;
      state.orderTotal = allOrdersPrice;
    },
  },
});

export const { clearOrder, decrementOrder, incrementOrder, addAllDeserts } =
  dessertsSlice.actions;

export default dessertsSlice.reducer;
