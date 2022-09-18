import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//
import { getMoviesInfo } from 'api/api';
import * as SC from './MovieDetails.styled';
//
export const MovieDetails = () => {
  const { id } = useParams();

  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedError, setFetchedError] = useState(null);

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    //

    (async function () {
      try {
        const respone = await getMoviesInfo({ id });
        setFetchedData(respone.data);
        setFetchedError(null);
      } catch (error) {
        setFetchedError(`error with your query ${error.message} `);
        setFetchedData(null);
      }
    })();
  }, [id]);

  return (
    <main>
      {fetchedData && (
        <>
          <SC.GoBack to={location.state?.from ?? '/'}>
            <ArrowBackIcon fontSize="large" />
            Go back
          </SC.GoBack>
          <SC.Container>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${fetchedData.poster_path}`}
                alt={fetchedData.title}
                width="320"
              />
            </div>
            <SC.Info>
              <h1>
                {fetchedData.title} ({fetchedData.release_date.slice(0, 4)})
              </h1>
              <p>User Score: {fetchedData.vote_average.toFixed()}%</p>
              <h2>Обзор</h2>
              <p>
                {fetchedData.overview === ''
                  ? 'не написали'
                  : fetchedData.overview}
              </p>
              <h2>Жанры</h2>
              <p>{fetchedData.genres.map(({ name }) => name).join(' ')}</p>
            </SC.Info>
          </SC.Container>
          <div>
            <div>
              <NavLink to="cast" state={state}>
                Актерский состав
              </NavLink>
            </div>
            <div>
              <NavLink to="reviews" state={state}>
                Отзывы зрителей
              </NavLink>
            </div>
          </div>
          <Outlet />
        </>
      )}
      {fetchedError && <p>{fetchedError}</p>}
    </main>
  );
};
