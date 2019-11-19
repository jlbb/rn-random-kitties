import {
  RESET_BG_COLOR,
  SET_BG_COLOR,
  SET_CAT_ITEMS,
  ResetBgColorType,
  SetBgColorType,
  SetCatItemsType,
} from "./types";

export const resetBgColor: ResetBgColorType = () => {
  return {
    type: RESET_BG_COLOR
  };
};

export const setBgColor: SetBgColorType = color => {
  return {
    type: SET_BG_COLOR,
    payload: color
  };
};

export const setCatItems: SetCatItemsType = catItems => {
  return {
    type: SET_CAT_ITEMS,
    payload: catItems
  };
};
