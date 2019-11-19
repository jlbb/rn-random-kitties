import Card from "../components/Card";
import { mount } from "enzyme";

describe("Card", () => {
  it("renders correctly", () => {
    const wrapper = mount(<Card title={"Test Card"} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("ButtonRK").length).toBe(0);
  });

  it("renders with 1 control by default", () => {
    const wrapper = mount(<Card title={"Test Card"} controls />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("ButtonRK").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the controls passed by props", () => {
    const wrapper = mount(
      <Card
        title={"Test Card"}
        controls
        controlsItem={[
          {
            label: "Buton1",
            action: jest.fn()
          },
          {
            label: "Buton2",
            action: jest.fn()
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("ButtonRK").length).toBe(2);
  });
});
