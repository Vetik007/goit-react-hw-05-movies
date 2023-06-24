import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'd7fac244b345f78f55899e7714233f87';

// список популярних фільмів
export const fetchTrendingFilm = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  // console.log(response);
  return response.data;
};

// пошук за ключовим словом
export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data;
};

// запит повної інформації про фільм
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  // console.log(response);
  return response.data;
};

// запит про акторський склад
export const fetchCastMovie = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

// запит відгуків про фільм
export const fetchReviewsMovie = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
