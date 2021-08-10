import React, { useState, useEffect } from "react";
import "./ParticularCategory.scss";
import request from "../../Request";
import axios from "../../Axios";

const baseURL = "https://image.tmdb.org/t/p/original/";

export const ParticularCategory = (props) => {
  const movieGenresID = props.location.state.id;
  const movieGenresName = props.location.state.sectionTitle;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(request.fetchMovies + `${movieGenresID}`);
      console.table(req.data.results);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [movieGenresID]);

  return (
    <div className="particular__category">
      <div className="particular__category__heading">
        <h1>{movieGenresName}</h1>
      </div>

      <div className="particular__category__row">
        {movies.map((movie) => {
          return (
            <img
              className="particular__category__movie__poster"
              src={`${baseURL}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};
