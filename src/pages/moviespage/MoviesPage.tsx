import React from "react";
import Movies from "../../components/movies";

const MoviesPage = (): JSX.Element => {
  const categorie: string = "discover/movie";
  return <Movies urlLink={categorie} />;
};

export default MoviesPage;
