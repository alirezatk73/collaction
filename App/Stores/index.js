import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "App/Sagas";
import { persistReducer } from "redux-persist";
import { reducer as UsersReducer } from "./Users/Reducers";
import storage from "@react-native-community/async-storage";

//Add a nested state of reducer for rehydrated
const PersistConfig = {
  key: "Users",
  storage: storage,
  blacklist: [""],
};

export default () => {
  const rootReducer = combineReducers({
    users: UsersReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
