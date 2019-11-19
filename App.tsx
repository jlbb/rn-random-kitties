import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import MainAppScreen from "./screens/MainAppScreen";

const App = () => {
  return (
    <Provider store={store}>
      <MainAppScreen />
    </Provider>
  );
};

export default App;
