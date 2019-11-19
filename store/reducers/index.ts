import { combineReducers, Reducer } from "redux";
import contextReducer from "./contextReducer";
import appReducer from "./appReducer";
import { StateManagement } from "../types";

const reducers: Reducer<StateManagement> = combineReducers<StateManagement>({
  context: contextReducer,
  app: appReducer
});

export default reducers;
