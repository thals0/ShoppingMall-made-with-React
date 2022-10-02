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
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
