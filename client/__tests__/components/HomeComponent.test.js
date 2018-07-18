import React from "react";
import { shallow } from "enzyme";
import "./../jestsetup";

describe("Make sure test running", () => {
  test("render a label", () => {
    const wrapper = shallow(<label>Andre</label>);
    expect(wrapper).toMatchSnapshot();
  });
});
