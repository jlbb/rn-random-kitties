import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers";
import { StateManagement } from "./types";

export const store: Store<StateManagement> = createStore(
  reducers,
  composeWithDevTools()
);
