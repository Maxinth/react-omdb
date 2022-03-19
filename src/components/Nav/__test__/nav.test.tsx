import Nav from "..";
import renderer from "react-test-renderer";
import React from "react";

it("renders a snapshot of <Nav />", () => {
  const nav = renderer.create(<Nav />).toJSON();
  expect(nav).toMatchSnapshot();
});
