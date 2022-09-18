import axios from 'axios';

const API_KEY = '5d05ad92e2950afb0bac282a2145359d';
const LANGUAGE = 'ru-RU';
const QUERY = 'q';
const PAGE = 1;
const INCLUDE_ADULT = true;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMoviesList = params => {
  const {
    page = PAGE,
    query = QUERY,
    include_adult = INCLUDE_ADULT,
    language = LANGUAGE,
  } = params;

  const queryString = `search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=${language}include_adult=${include_adult}`;

  return axios(queryString);
};

export const getTrendigsList = () => {
  return axios(`trending/movie/day?api_key=${API_KEY}`);
};

export const getMoviesInfo = params => {
  const { id: movie_id, language } = params;
  return axios(`/movie/${movie_id}?api_key=${API_KEY}&language=${language}`);
};

export const getMoviesCast = params => {
  const { id: movie_id, language } = params;
  return axios(
    `/movie/${movie_id}/credits?api_key=${API_KEY}&language=${language}`
  );
};

export const getMoviesReview = params => {
  const { id: movie_id, language = LANGUAGE } = params;
  return axios(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=${language}`
  );
};
