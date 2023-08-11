import React, { useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useState } from "react";
import { RequestOptions, MovieDetails } from "./constants";
import {
  HomeContainer,
  PageButton,
  ButtonsContainer,
  MoviesContainer,
  RowContainer,
} from "./styled";
import Header from "../header";
import Footer from "../footer";
import Movie from "../movie";
const Movies = ({ urlLink }: { urlLink: string }): JSX.Element => {
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [nr, setNr] = useState<number>(1);

  const handlePosts = (item: number) => {
    const url = `https://api.themoviedb.org/3/${urlLink}?include_adult=false&include_video=false&language=en-US&page=${item}&sort_by=popularity.desc`;
    const options: RequestOptions = {
      method: "GET",
      url: url,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGU0ODY0NjlkY2ZjNjhkMjkzMjg1ZTZkZDAzNmI4NyIsInN1YiI6IjY0YTQ2NzA3ZGExMGYwMDBhZGYzZjA1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUIRrRQmJzTVUP3qx7xUxITVhHdVVnbSYm5rSOScfVY",
      },
    };
    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setMovies(response.data.results);
      })
      .catch(function (error: AxiosError) {
        console.error(error);
      });
  };

  const handleButtonClick = (page: number) => {
    let nextPage = Math.min(319, Math.max(1, page));
    setNr(nextPage);
  };
  useEffect(() => {
    handlePosts(nr);
  }, [nr]);

  const generateButtons = (start: number, end: number) => {
    const buttons = [];
    if (start >= 315) {
      end = 318;
    }
    for (let i = start; i <= end; i++) {
      const buttonStyle =
        i === nr
          ? { backgroundColor: "#cc8f00" }
          : { backgroundColor: "#D3D3D3" };
      buttons.push(
        <PageButton
          key={i}
          onClick={() => handleButtonClick(i)}
          style={buttonStyle}
        >
          {i}
        </PageButton>
      );
    }
    return buttons;
  };
  const generateMovies = (part: number) => {
    const moviesList = [];
    for (let i = 1; i <= 10; i++)
      if (part === 1) {
        moviesList.push(<Movie key={i - 1} movie={movies[i - 1]} />);
      } else {
        moviesList.push(<Movie key={i + 9} movie={movies[i + 9]} />);
      }

    return moviesList;
  };
  return (
    <HomeContainer>
      {movies.length > 0 && (
        <HomeContainer>
          <Header />
          <MoviesContainer>
            <RowContainer>{generateMovies(1)}</RowContainer>
            <RowContainer>{generateMovies(2)}</RowContainer>
          </MoviesContainer>
          <ButtonsContainer>
            {nr > 5 ? (
              <>
                <PageButton onClick={() => handleButtonClick(nr - 1)}>
                  Previous page
                </PageButton>
                <PageButton onClick={() => handleButtonClick(1)}>
                  {1}
                </PageButton>
                <PageButton>...</PageButton>
                {generateButtons(nr - 4, nr - 1)}
                <PageButton
                  style={{ backgroundColor: "#cc8f00" }}
                  onClick={() => handleButtonClick(nr)}
                >
                  {nr}
                </PageButton>
                {generateButtons(nr + 1, nr + 4)}
                <PageButton>...</PageButton>
                <PageButton onClick={() => handleButtonClick(319)}>
                  {319}
                </PageButton>

                <PageButton onClick={() => handleButtonClick(nr + 1)}>
                  Next page
                </PageButton>
              </>
            ) : (
              <>
                <PageButton onClick={() => handleButtonClick(nr - 1)}>
                  Previous page
                </PageButton>
                {generateButtons(1, 6)}
                <PageButton>...</PageButton>
                <PageButton onClick={() => handleButtonClick(319)}>
                  {319}
                </PageButton>
                <PageButton onClick={() => handleButtonClick(nr + 1)}>
                  Next page
                </PageButton>
              </>
            )}
          </ButtonsContainer>
          <Footer />
        </HomeContainer>
      )}
    </HomeContainer>
  );
};

export default Movies;
