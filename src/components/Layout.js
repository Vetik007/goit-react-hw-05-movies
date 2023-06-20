import { NavLink, Outlet } from 'react-router-dom';
// import styled from 'styled-components';

// const StyledLink = styled(NavLink)`
//   color: #212121;

//   &.active {
//     color: orangered;
//   }
// `;

// localhost:3000/
//localhost:3000/dogs
//localhost:3000/dogs/dog-5

/**
 *
 */

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

/**
 * <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="dogs" element={<Dogs />} />
    <Route path="dogs/:dogId" element={<DogDetails />}>
      <Route path="subbreeds" element={<SubBreeds />} />
      <Route path="gallery" element={<Gallery />} />
    </Route>
  </Route>
</Routes>;
 * 
 * 
 */
