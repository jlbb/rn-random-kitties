import { useDispatch, useSelector } from "react-redux";

import {
  BgColorType,
  StateManagement,
  SetBgColorType,
  ResetBgColorType,
  SetRandomBgColorType
} from "../types";
import { setBgColor, resetBgColor } from "../actions";
import { randomHexColor } from "../../utils/utils";

type ContextBgColorHookType = [
  BgColorType,
  ResetBgColorType,
  SetRandomBgColorType,
  SetBgColorType
];

const useContextBgColor = (): ContextBgColorHookType => {
  const dispatch = useDispatch();
  const bgColor: BgColorType = useSelector(
    ({ context }: StateManagement) => context.backgroundColor
  );

  const _resetBgColor: ResetBgColorType = () => {
    return dispatch(resetBgColor());
  };

  const _setBgColor: SetBgColorType = color => {
    return dispatch(setBgColor(color));
  };

  const _setRandomBgColor: SetRandomBgColorType = () => {
    const randomcolor = randomHexColor();

    return _setBgColor(randomcolor);
  };

  return [bgColor, _resetBgColor, _setRandomBgColor, _setBgColor];
};

export default useContextBgColor;
