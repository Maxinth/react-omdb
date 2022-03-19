import SearchBox from "..";
import renderer from "react-test-renderer";
import React from "react";

const mockProps = {
  handleSearch: jest.fn(),
  val: "80j",
};
it("renders a snapshot of <SearchBox /> with mockProp", () => {
  const searchBox = renderer.create(<SearchBox {...mockProps} />).toJSON();
  expect(searchBox).toMatchSnapshot();
});
