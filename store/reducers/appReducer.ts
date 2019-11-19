import {
  MainAppState,
  SET_CAT_ITEMS,
  MainAppReducer
} from "../types";

const initialState: MainAppState = {
  catItems: []
};

const appReducer: MainAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAT_ITEMS:
      return {
        ...state,
        catItems: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
