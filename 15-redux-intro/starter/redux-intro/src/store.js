import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer, // accountคือชื่อที่แสดงใน console เปลี่ยนได้
  customer: customerReducer,
});

const store = createStore(rootReducer);
export default store;
