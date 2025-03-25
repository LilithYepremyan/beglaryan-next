import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import mailingsPageReducer from "./slices/mailingsPageSlice";
// import utmReducer from "./slices/utmSlice";
import userReducer from "./slices/userSlice";
import fabricsPageReducer from "./slices/fabricsPageSlice";
// import fabricPageReducer from "./slices/fabricPageSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      mailingsPage: mailingsPageReducer,
      // utm: utmReducer,
      user: userReducer,
      fabricsPage: fabricsPageReducer,
      // fabricPage: fabricPageReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
