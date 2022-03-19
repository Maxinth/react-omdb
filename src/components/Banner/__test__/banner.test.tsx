import renderer from "react-test-renderer";
import Banner from "..";
import React from "react";

it("renders a snapshot of <Banner />", () => {
  const banner = renderer.create(<Banner />).toJSON();
  expect(banner).toMatchSnapshot();
});
