import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
      <h1>страница MovieDetails </h1>
      <ul>
        <li>
          <Link to="cast">страница Cast</Link>
        </li>

        <li>
          <Link to="reviews">страница Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
