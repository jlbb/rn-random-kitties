import {
  ContextAppState,
  RESET_BG_COLOR,
  SET_BG_COLOR,
  ContextAppReducer
} from "../types";
import { colors } from "../../config/contants";

const initialState: ContextAppState = {
  backgroundColor: colors.BACKGROUND_COLOR
};

const contextAppReducer: ContextAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_BG_COLOR:
      return {
        ...state,
        backgroundColor: initialState.backgroundColor
      };
    case SET_BG_COLOR:
      return {
        ...state,
        backgroundColor: action.payload
      };
    default:
      return state;
  }
};

export default contextAppReducer;
