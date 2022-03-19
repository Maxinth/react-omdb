import MovieList from "..";
import renderer from "react-test-renderer";

const mockProps = {
  list: [
    {
      Poster: "me",
      Title: "snapshots",
      Type: "first-type",
      Year: "2022",
      imdbID: "---",
    },
  ],
  category: "FC",
};

it("renders a snapshot of <MovieList with mock props", () => {
  const elem = renderer.create(<MovieList {...mockProps} />).toJSON();
  expect(elem).toMatchSnapshot();
});
