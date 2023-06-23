// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchReviews } from '../../service/fetchAPI';
// import { Reviewscard } from './Reviews.styled';

// const Reviews = () => {
//   const [moviesReviews, setMoviesReviews] = useState([]);
//   const { movieId } = useParams();

//   useEffect(() => {
//     fetchReviews(movieId).then(({ results }) => {
//       setMoviesReviews(results);
//     });
//   }, [movieId]);

//   return (
//     <>
//       {moviesReviews.length > 0 ? (
//         moviesReviews.map(({ id, author, content }) => {
//           return (
//             <Reviewscard key={id}>
//               <li>
//                 <b> Author: {author}</b>
//               </li>
//               <li>{content}</li>
//             </Reviewscard>
//           );
//         })
//       ) : (
//         <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>
//       )}
//     </>
//   );
// };
// export default Reviews;

// =========================================================

import { fetchReviewsMovie } from '../ServisesApi/TmdbApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NoReviews } from 'Error/NoReviews';
import { List, Author, Text } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsMovie(movieId).then(setReviews);
  }, [movieId]);

  console.log(reviews);

  if (!reviews) {
    return;
  }

  return (
    <List>
      {reviews.length === 0 && <NoReviews />}

      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <Author>{author}</Author>
          <Text>{content}</Text>
        </li>
      ))}
    </List>
  );
};
