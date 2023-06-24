import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { AiFillBackward } from 'react-icons/ai';

import {
  MovieList,
  MovieItem,
  MovieLink,
  MovieImg,
  MovieName,
  Box,
} from './MoviesList.styled';

// цей компонент відображає список фільмів які передаються через пропс movies
const MoviesList = ({ movies }) => {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  // Додємо перевірку, якщо масив movies невизначений або порожній, повертається null
  if (!movies) {
    return null;
  }

  return (
    <>
      <MovieList>
        {movies.map(({ id, title, original_name, poster_path }) => (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <Box>
                {poster_path ? (
                  <MovieImg src={imgBaseUrl.concat(poster_path)} alt={title} />
                ) : (
                  <AiFillBackward size={200} />
                )}
                <MovieName>{title ?? original_name}</MovieName>
              </Box>
            </MovieLink>
          </MovieItem>
        ))}
      </MovieList>
      <Outlet />

      {/* <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Li key={id}>
              <Links to={`/movies/${id}`} state={{ from: location }}>
                <Card>
                  {poster_path ? (
                    <Img
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                      alt={title}
                    />
                  ) : (
                    <AiOutlineFileImage size={200} />
                  )}
                  {title}
                </Card>
              </Links>
            </Li>
          );
        })}
      </List>
      <Outlet /> */}
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;

// !======================================================
/**
 * 
 * 
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';
import {
  MovieList,
  MovieItem,
  MovieLink,
  MovieImg,
  MovieName,
  Box,
} from './MoviesList.styled';

// цей компонент відображає список фільмів які передаються через пропс movies
const MoviesList = ({ movies }) => {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  if (!movies) {
    return null; // Додайте перевірку, якщо масив movies є невизначеним або порожнім, поверніть null
  }
  return (
    <>
      <MovieList>
        {movies.map(({ id, title, original_name, poster_path }) => {
          return (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Box>
                  {poster_path ? (
                    <MovieImg
                      src={imgBaseUrl.concat(poster_path)}
                      alt={title}
                    />
                  ) : (
                    <AiOutlineFileImage size={200} />
                  )}
                  <MovieName>{title ?? original_name}</MovieName>
                </Box>
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
      <Outlet />
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;



 */

// =================================
/**
 * import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { SearchBox } from 'components/SearchBox/SearchBox';

import { getMovieByName } from 'services/fetchMovies';

import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    getMovieByName(query).then(setMovies);
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} onChange={handleChange} />
      <MoviesList movies={movies} />
    </>
  );
};
 * 
 * 
 * 
 * 
 * 
 * 
 */

// =====================================
