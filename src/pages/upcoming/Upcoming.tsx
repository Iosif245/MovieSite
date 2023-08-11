import React from "react";
import Movies from "../../components/movies";

const Upcoming = (): JSX.Element => {
  const categorie: string = "movie/upcoming";
  return <Movies urlLink={categorie} />;
};

export default Upcoming;
