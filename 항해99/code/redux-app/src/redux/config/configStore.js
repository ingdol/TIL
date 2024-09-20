// import { combineReducers, createStore } from "redux";
// import counter from "../modules/counter";

// // 1) rootReducer 만들기
// const rootReducer = combineReducers({
//   counter,
// });

// // 2) store를 생성
// const store = createStore(rootReducer);

// 3) 만든 store 내보내기
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
