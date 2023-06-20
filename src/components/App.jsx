import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Movies from './pages/Movies/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Layout from './Layout';

// const StyledLink = NavLink`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>

    //     <li>
    //       <Link to="/movies">Home</Link>
    //     </li>

    //     <li>
    //       <Link to="/movies/:movieId">MovieDetails</Link>
    //     </li>

    //     <li>
    //       <Link to="/movies/:movieId/cast">Cast</Link>
    //     </li>

    //     <li>
    //       <Link to="/movies/:movieId/reviews">Reviews</Link>
    //     </li>
    //   </ul>
    // </nav>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

/**
 * 
 * 
{
  /* <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />

    <Route path="/movies" element={<Movies />} />
    <Route path="/movies/:movieId" element={<MovieDetails />}>
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Reviews />} />
    </Route>
  </Route>

  {/* <Route path="*" element={<NotFound />} /> */
// }
// </Routes>; */}

//  */

/**
 * '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
 * '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
 * '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
 * /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
 * /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
 *
 *
 *
 *
 *
 */

// <Routes>
// {/* <Route path="/" element={<Layout />}> */}

// {/* <Route index element={<Home />} /> */}
// {/* <Route path="dogs" element={<Dogs />} /> */}
// {/* <Route path="dogs/:dogId" element={<DogDetails />}> */}
// {/* <Route path="subbreeds" element={<SubBreeds />} /> */}
// {/* <Route path="gallery" element={<Gallery />} /> */}
// {/* </Route> */}
// {/* </Route> */}
// </Routes>
