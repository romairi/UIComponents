import React from "react";
import renderer from "react-test-renderer";
import Button from "./index";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "./constants";
import { fireEvent, render } from "@testing-library/react";

describe("Button", () => {
  it("should render the default props", () => {
    const component = renderer.create(<Button>SOME TEXT</Button>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  Object.entries(BUTTON_SIZES).forEach(([size_name, size]) => {
    it(`should render the button with the size: ${size_name}`, () => {
      const component = renderer.create(<Button size={size}>SOME TEXT</Button>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it("should trigget the onClick callback", () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick}>SOME TEXT</Button>);

    fireEvent.click(container.firstChild.firstChild);
    expect(onClick).toHaveBeenCalled();
  });

  Object.values(BUTTON_VARIANTS).forEach((variant) => {
    it(`should render the button with the variant: ${variant}`, () => {
      const component = renderer.create(<Button variant={variant}>SOME TEXT</Button>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
