import StickyNavigationBar from "../components/StickyNavigationBar";
import { shallow } from "enzyme";

describe("StickyNavigationBar", () => {
  it("renders correctly", () => {
    expect(
      shallow(<StickyNavigationBar>{"Button here"}</StickyNavigationBar>)
    ).toMatchSnapshot();
  });
});
