import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import { GlobalStyles } from "./app.styled";
import SearchBox from "./components/SearchBox";
import MovieList from "./components/MovieList";

const apiKey = process.env.REACT_APP_API_KEY;
const moviesUrl = ` https://www.omdbapi.com/?s=movies&apikey=${apiKey}`;
const seriesUrl = ` https://www.omdbapi.com/?s=series&apikey=${apiKey}`;
function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);
  const [error, setError] = useState(null);

  const [filterText, setFilterText] = useState("");
  const [initMovies, setInitMovies] = useState([]);
  const [initSeries, setInitSeries] = useState([]);
  //
  const handleFilter = (id: string) => {
    setFilterText(id);
    // return array which contain the search term for movies List
    const newMoviesList = moviesList?.filter((item) =>
      item.Title.toLowerCase().includes(id.toLowerCase())
    );
    if (newMoviesList.length !== 0) {
      setMoviesList(newMoviesList);
    }
    // return array which contain the search term for series List
    const newSeriesList = seriesList?.filter((item) =>
      item.Title.toLowerCase().includes(id.toLowerCase())
    );
    if (newSeriesList.length) {
      setSeriesList(newSeriesList);
    }

    // on search term clear
    if (!filterText) {
      // return initial data
      setMoviesList(initMovies);
      setSeriesList(initSeries);
    }
  };
  // requests for fetching moviesList
  const fetchMovies = async () => {
    try {
      const response = await axios.get(moviesUrl);
      setMoviesList(response?.data?.Search);
      setInitMovies(response?.data?.Search);
    } catch (err) {
      // console.log(err);
      setError(err);
    }
  };

  // fetch series List
  const fetchSeriesList = async () => {
    try {
      const response = await axios.get(seriesUrl);
      setSeriesList(response?.data?.Search);
      setInitSeries(response?.data?.Search);
    } catch (err) {
      // console.log(err);
      setError(err);
    }
  };

  useEffect(() => {
    // reset list to initial list on both categories when the search term gets cleared.
    if (!filterText) {
      setMoviesList(initMovies);
      setSeriesList(initSeries);
    }
  }, [filterText, initMovies, initSeries]);

  useEffect(() => {
    fetchMovies();
    fetchSeriesList();
  }, []);
  return (
    <main className="App">
      <GlobalStyles />
      <Nav />
      <Banner />
      <SearchBox handleSearch={handleFilter} val={filterText} />
      <MovieList list={moviesList} category="Movies" />
      <MovieList list={seriesList} category="Series" />
    </main>
  );
}

export default App;
