import React from "react";
import Movies from "../../components/movies";

const PopularMovies = (): JSX.Element => {
  const categorie: string = "movie/top_rated";
  return <Movies urlLink={categorie} />;
};

export default PopularMovies;
