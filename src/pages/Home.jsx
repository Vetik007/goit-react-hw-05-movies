import { useState, useEffect } from 'react';
import { fetchTrendingFilm } from '../servicesApi/TmdbApi';
import MoviesList from 'components/MoviesList/MoviesList';
// import Title from '../components/Title/Title';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTrendingFilm()
      .then(({ results }) => {
        setMovies(results);
        // console.log(results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Popular movies today</h1>
      {movies && movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <p>No movies found.</p>
      )}
      {loading && <Loader />}
    </>
  );
};

export default Home;
