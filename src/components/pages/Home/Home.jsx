import { useState, useEffect } from 'react';
import { fetchTrendingFilm } from '../../ServisesApi/TmdbApi';
import MoviesList from '../../MovieList/MovieList';
import Loader from '../../Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]); // список фільмів та функція зміни списку
  const [loading, setLoading] = useState(false); // стан спінера та функція зміни стану

  // запит на бек для отримання трендових фільмів
  useEffect(() => {
    setLoading(true); //запуск спінера
    fetchTrendingFilm()
      .then(({ results }) => {
        setMovies(results);
      })
      .finally(() => {
        setLoading(false); // зупинка спінера
      });
  }, []);

  return (
    <>
      <h1>Popular movies today</h1>
      <MoviesList movies={movies} />
      {loading && <Loader />}
    </>
  );
};

export default Home;
