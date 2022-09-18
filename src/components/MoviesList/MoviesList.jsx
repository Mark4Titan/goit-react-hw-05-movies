import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import * as SC from './MoviesList.styled';
export const MoviesList = ({ movies, state }) => {
  return (
    <SC.MoviesContainer>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <SC.MovieThumb>
            <NavLink to={`/movies/${id}`} state={state}>
              <img
                src={
                  poster_path === null
                    ? `https://via.placeholder.com/64x96`
                    : `https://image.tmdb.org/t/p/w500${poster_path}`
                }
                alt={title}
                width="300"
              />
              {title}
            </NavLink>
          </SC.MovieThumb>
        </li>
      ))}
    </SC.MoviesContainer>
  );
};

MoviesList.propTypes = {
  requiredArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
