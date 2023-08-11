import React, { useState } from "react";
import { MovieDetails } from "../../context/constants";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import {
  MovieTitle,
  MovieContainer,
  MoviesContainer,
  MovieBodyContainer,
  MovieImg,
  DateContainer,
} from "./styled";
import Movie from "../movie";
const Slider = ({ content }: { content: MovieDetails[] }): JSX.Element => {
  const load: boolean = content[0] !== undefined;
  const itemsPerPage: number = 8;
  const [startIndex, setStartIndex] = useState<number>(0);
  const handleNext = () => {
    if (startIndex + itemsPerPage < content.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const displayedMovies = content.slice(startIndex, startIndex + itemsPerPage);
  return (
    <MoviesContainer>
      {load ? (
        <MovieBodyContainer>
          <MovieContainer>
            <MdArrowBackIos
              onClick={handlePrev}
              style={{
                height: "100px",
                width: "50px",
                fill: "black",
                overflow: "visible",
              }}
            />
            {displayedMovies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
            <MdArrowForwardIos
              onClick={handleNext}
              style={{
                height: "100px",
                width: "50px",
                fill: "black",
                overflow: "visible",
              }}
            />
          </MovieContainer>
        </MovieBodyContainer>
      ) : (
        <></>
      )}
    </MoviesContainer>
  );
};

export default Slider;
