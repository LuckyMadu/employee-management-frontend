import React from "react";
import renderer from "react-test-renderer";
import AddEmployee from "../page";

describe("AddEmployee", () => {
  test("Employee adding renders correctly", () => {
    const component = renderer.create(<AddEmployee />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
