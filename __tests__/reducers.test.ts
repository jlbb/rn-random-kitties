import contextAppReducer from "../store/reducers/contextReducer";
import appReducer from "../store/reducers/appReducer";
import { resetBgColor, setBgColor, setCatItems } from "../store/actions";
import { colors } from "../config/contants";

const initialState = {
  context: {
    backgroundColor: "red"
  },
  app: {
    catItems: []
  }
};

describe("ContextAppReducer", () => {
  let state;

  beforeAll(() => {
    state = initialState.context;
  });

  it("when reset the background color", () => {
    const expectedState = {
      backgroundColor: colors.BACKGROUND_COLOR
    };

    expect(contextAppReducer(state, resetBgColor())).toEqual(expectedState);
  });

  it("change bg color", () => {
    const newColor = "blue";
    const expectedState = {
      backgroundColor: newColor
    };

    expect(contextAppReducer(state, setBgColor(newColor))).toEqual(
      expectedState
    );
  });
});

describe("MainAppReducer", () => {
  let state;

  beforeAll(() => {
    state = initialState.app;
  });

  it("when reset the background color", () => {
    const catItems = ["Cat1.jpg", "Cat2.png"];
    const expectedState = {
      catItems
    };

    expect(appReducer(state, setCatItems(catItems))).toEqual(expectedState);
  });
});
