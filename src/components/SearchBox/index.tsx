// import MovieList from "../MovieList";
import { Box, InputBox, Label } from "./searchBox.styled";

interface Props {
  handleSearch: (id: string) => void;
  val: string;
}
const SearchBox = ({ handleSearch, val }: Props) => {
  return (
    <Box>
      <Label htmlFor="search">Search</Label>
      <InputBox
        type="text"
        value={val}
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Box>
  );
};

export default SearchBox;
