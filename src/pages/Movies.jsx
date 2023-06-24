import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../servicesApi/TmdbApi';
import SearchForm from '../components/Form/Form';
import MoviesList from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const moviesName = searchParams.get('query') ?? '';
  // console.log(moviesName);

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
    // console.log(changeParams);
  };

  useEffect(() => {
    if (!moviesName) return;

    setLoading(true);
    fetchSearchMovies(moviesName)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [moviesName]);

  return (
    <>
      {error && <h2>{error.message}</h2>}
      <SearchForm searchMovies={handleOnSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading && <Loader />}
    </>
  );
};

export default Movies;
