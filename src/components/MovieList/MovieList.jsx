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
