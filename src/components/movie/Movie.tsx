import React, { useEffect, useContext } from "react";
import { MovieDetails } from "./constants";
import {
  MovieTitle,
  MovieContainer,
  MovieBodyContainer,
  MovieImg,
  DateContainer,
} from "./styled";

import DataContext from "../../context/DataContext";
import { useNavigate, NavigateFunction } from "react-router-dom";
const Movie = ({ movie }: { movie: MovieDetails }): JSX.Element => {
  const load: boolean = movie !== undefined;
  const navigate: NavigateFunction = useNavigate();
  const { postData, setPostData } = useContext(DataContext);
  const handleDataChange = () => {
    setPostData(movie);
    navigate("/show");
  };
  return (
    <MovieContainer>
      {load ? (
        <MovieBodyContainer onClick={handleDataChange}>
          <MovieImg
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <DateContainer>
            {movie.title ? (
              <MovieTitle>{movie.title.substring(0, 30)}</MovieTitle>
            ) : (
              <MovieTitle>{movie.name?.substring(0, 30)}</MovieTitle>
            )}
          </DateContainer>
        </MovieBodyContainer>
      ) : (
        <></>
      )}
    </MovieContainer>
  );
};

export default Movie;
