import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

// const user = createSlice({
//   name: "user",
//   initialState: { name: "Kim", age: 20 },
//   reducers: {
//     changeName(state) {
//       state.name = "park";
//     },
//     increase(state, action) {
//       state.age += action.payload;
//     },
//   },
// });

// export const { changeName, increase } = user.actions;

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      // state[action.payload].count++;
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[num].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
