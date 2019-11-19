import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import MainAppScreen from "../screens/MainAppScreen";

(global as any).fetch = require("jest-fetch-mock");

const mockedStore = {
  context: {
    backgroundColor: ""
  },
  app: {
    catItems: []
  }
};

const mockStore = configureMockStore([]);

describe("MainAppScreen", () => {
  let store;
  let wrapper;

  beforeAll(() => {
    store = mockStore(mockedStore);
    wrapper = mount(
      <Provider store={store}>
        <MainAppScreen />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with 3 cards by default", () => {
    expect(wrapper.find("Card").length).toBe(0);

    (fetch as any).mockResponseOnce([
      "catPic1.jpg",
      "catPic2.jpg",
      "catPic3.jpg"
    ]);
    fetch("*").then(res => {
      expect(res).toEqual(["catPic1.jpg", "catPic2.jpg", "catPic3.jpg"]);
      expect(wrapper.find("Card").length).toBe(3);
      expect(wrapper.find("Card").find("ButtonRK").length).toBe(2);
    });
  });
});
