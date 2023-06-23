import { useEffect, useState, Suspense } from 'react'; // додаємо бібліотеку для хуків
import { Outlet, useLocation, useParams, Link } from 'react-router-dom'; // додаємо бібліотеку для роботи з адресою
import { fetchMovieDetails } from '../../ServisesApi/TmdbApi'; // додаємо запит на фільм
// import { LiaBackwardSolid } from 'react-icons/lia'; // додаємо бібліотеку для іконки
import { AiOutlineSearch } from 'react-icons/ai';
import MovieCard from '../../MovieCard/MovieCard';

import { Container, Button, AddInfo } from './MoviesDetails.styled';

// =====================================

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLink}>
        <Button type="button">
          {' '}
          <AiOutlineSearch />
          Go back
        </Button>
      </Link>
      <MovieCard movie={movieDetails} />
      <Container>
        <AddInfo to={'cast'} state={{ from: backLink }}>
          Cast
        </AddInfo>
        <AddInfo to={'reviews'} state={{ from: backLink }}>
          Reviews
        </AddInfo>
      </Container>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;

// ===================================

//  import {
//    Details,
//    Img,
//    Container,
//    Links,
//    DetailsImg,
//    Button,
//    AddInfo,
//  } from './MoviesDetails.styled';

// return (
// <>
// {/* <Link to={location?.state?.from ?? '/'}>
//   <Button type="button">
//     <LiaBackwardSolid
//       style={{ width: '25px', height: '25px', display: 'inline-block' }}
//     />
//     Go back
//   </Button>
// </Link> */}
//       <Details>
//         <DetailsImg>
//           <Img
//             src={`https://image.tmdb.org/t/p/w300${poster_path}`}
//             alt={title}
//           />
//         </DetailsImg>
//         <div>
//           {title && (
//             <h2>
//               {title} {release_date.substr(0, 4)}
//             </h2>
//           )}

//           <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
//           <h2>Overview</h2>
//           <p>{overview}</p>
//           <h2>Genres</h2>
//           {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
//         </div>
//       </Details>

//       <Container>
//         <h3>Additional information</h3>
//         <li>
//           <Links to="cast">Cast</Links>
//         </li>
//         <li>
//           <Links to="reviews">Reviews</Links>
//         </li>
//       </Container>

//       <Outlet />
//     </>
//   );
// };
