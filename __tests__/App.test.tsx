import App from "../App";
import { shallow } from "enzyme";

describe("RandomKitties App", () => {
  it("renders correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
