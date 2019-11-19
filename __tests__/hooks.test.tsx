import { mount } from "enzyme";
import { useContextBgColor, useCatsApi } from "../store/hooks";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { SET_BG_COLOR, RESET_BG_COLOR, SET_CAT_ITEMS } from "../store/types";

(global as any).fetch = require("jest-fetch-mock");

const mockedStore = {
  context: {
    backgroundColor: "red"
  },
  app: {
    catItems: []
  }
};

const HookWrapper = ({ store, hook }) => {
  const Dummy = ({ hook }) => {
    const hooks = hook();
    return <div {...hooks} />;
  };

  return (
    <Provider store={store}>
      <Dummy hook={hook} />
    </Provider>
  );
};

describe("useContextBgColor", () => {
  let mockStore;
  let store;

  beforeAll(() => {
    mockStore = configureMockStore([]);
    store = mockStore(mockedStore);
  });

  it("renders correctly", () => {
    let wrapper = mount(
      <HookWrapper store={store} hook={() => useContextBgColor()} />
    );

    let hook = wrapper.find("div").props();

    let [bgColor, resetBgColor, setRandomBgColor, setBgColor] = Object.values(
      hook
    );

    expect(bgColor).toEqual(mockedStore.context.backgroundColor);

    resetBgColor();

    expect(store.getActions()[0].type).toEqual(RESET_BG_COLOR);
    store.clearActions();

    setRandomBgColor();

    expect(store.getActions()[0].type).toEqual(SET_BG_COLOR);
    store.clearActions();

    setBgColor("green");

    expect(store.getActions()[0].type).toEqual(SET_BG_COLOR);
  });
});

describe("useCatsApi", () => {
  let mockStore;
  let store;

  beforeAll(() => {
    mockStore = configureMockStore([]);
    store = mockStore(mockedStore);
  });
  it("renders correctly", async () => {
    let wrapper = mount(
      <HookWrapper store={store} hook={() => useCatsApi()} />
    );

    let hook = wrapper.find("div").props();

    let [catItems, fetchCats] = Object.values(hook);

    expect(catItems).toEqual(mockedStore.app.catItems);

    (global as any).URL.createObjectURL = jest.fn();

    await fetchCats();

    expect(store.getActions()[0].type).toEqual(SET_CAT_ITEMS);
  });
});
