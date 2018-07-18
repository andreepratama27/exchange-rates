import React from "react";
import { shallow } from "enzyme";
import "./../jestsetup";

describe("Testing grid", () => {
  test("render text", () => {
    expect(
      shallow(<p>render text</p>)
        .find("p")
        .exists()
    ).toBe(true);
  });

  test("render bold text", () => {
    expect(<b>Bold text</b>).toMatchSnapshot();
  });
});
