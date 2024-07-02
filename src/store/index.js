import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailReducer from "./modules/detail"


const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detailReducer
  },
});

export default store;
