import { Card } from "./movieList.styled";
import { ListItem } from ".";
import React from "react";

const MovieCard = (props: ListItem) => {
  const { Title } = props;
  return (
    <Card
    //  style={{ backgroundImage: `url(${Poster})` }}
    >
      {Title}
    </Card>
  );
};

export default MovieCard;
