import ButtonRK, { PRIMARY } from "../components/ButtonRK";
import { mount, shallow } from "enzyme";

describe("ButtonRK", () => {
  const buttonAction = jest.fn();

  it("renders correctly", () => {
    expect(
      shallow(<ButtonRK title={"Click me!"} onButtonPress={buttonAction} />)
    ).toMatchSnapshot();
  });

  it("executes a callback when is clicked", () => {
    const wrapper = mount(
      <ButtonRK title={"Click me"} onButtonPress={buttonAction} />
    );

    wrapper.prop("onButtonPress")();

    expect(buttonAction).toHaveBeenCalled();
  });

  it("renders with PRIMARY type style", () => {
    const wrapper = shallow(
      <ButtonRK
        title={"Click me"}
        onButtonPress={buttonAction}
        type={PRIMARY}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
