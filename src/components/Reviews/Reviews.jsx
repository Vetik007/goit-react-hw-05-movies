import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovie } from '../../servicesApi/TmdbApi';
import { Reviewscard } from './Reviews.styled';

const Reviews = () => {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsMovie(movieId).then(moviesReviews => {
      setMoviesReviews(moviesReviews);
    });
  }, [movieId]);

  return (
    <>
      {moviesReviews.length > 0 ? (
        moviesReviews.map(({ id, author, content }) => {
          return (
            <Reviewscard key={id}>
              <li>
                <b> Author: {author}</b>
              </li>
              <li>{content}</li>
            </Reviewscard>
          );
        })
      ) : (
        <p>Sorry, no reviews found for this movie</p>
      )}
    </>
  );
};
export default Reviews;
