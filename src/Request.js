const APIKEY = "5808eb9dc4fbc28bfd38fc7028938e36";

const request = {
  fetchMoviesGenres: `/genre/movie/list?api_key=${APIKEY}&language=en-US`,
  fetchTVGenres: `/genre/tv/list?api_key=${APIKEY}&language=en-US`,
  fetchMovies: `/discover/movie?api_key=${APIKEY}&with_genres=`,
};

export default request;
