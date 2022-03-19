import MovieCard from "./MovieCard";
import { Container, Title, MoviesBox, InnerBox } from "./movieList.styled";

export interface ListItem {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface Props {
  list: ListItem[];
  category: string;
}
const MovieList = ({ list, category }: Props) => {
  // const
  return (
    <Container>
      <Title>{category}</Title>
      <MoviesBox>
        <InnerBox>
          {list?.map((item: ListItem, index: number) => (
            <MovieCard key={index} {...item} />
          ))}
        </InnerBox>
      </MoviesBox>
    </Container>
  );
};

export default MovieList;
