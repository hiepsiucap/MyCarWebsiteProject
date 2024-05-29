/** @format */

/** @format */
import carReducer from "../features/listcar/CarSlice";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/carcart/cartSlice";
import rentalreducer from "../features/Rental/RentalSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    listcar: carReducer,
    cartcar: cartReducer,
    rental: rentalreducer,
  },
});
