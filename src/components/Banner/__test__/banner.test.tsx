import renderer from "react-test-renderer";
import Banner from "..";

it("renders a snapshot of <Banner />", () => {
  const banner = renderer.create(<Banner />).toJSON();
  expect(banner).toMatchSnapshot();
});
