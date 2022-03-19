import MovieCard from "../MovieCard";
import renderer from "react-test-renderer";

const mockProps = {
  Poster: "me",
  Title: "snapshots",
  Type: "first-type",
  Year: "2022",
  imdbID: "---",
};

it("renders a snapshot of <MovieCard />", () => {
  const card = renderer.create(<MovieCard {...mockProps} />).toJSON();
  expect(card).toMatchSnapshot();
});
