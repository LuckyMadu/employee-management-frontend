import React from "react";
import renderer from "react-test-renderer";
import EmployeeList from "../page";

describe("EmployeeList", () => {
  test("Employee list renders correctly", () => {
    const component = renderer.create(<EmployeeList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
