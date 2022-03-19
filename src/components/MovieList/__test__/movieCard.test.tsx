import MovieCard from "../MovieCard";
import renderer from "react-test-renderer";
import React from "react";

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
