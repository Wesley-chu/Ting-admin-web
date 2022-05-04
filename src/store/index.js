//import { configureStore } from "@reduxjs/toolkit";
//export const rootReducer = {}
// export const store = configureStore({
//   reducer: rootReducer
// })
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store



