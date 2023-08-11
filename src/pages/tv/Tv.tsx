import React from "react";
import Movies from "../../components/movies";

const Tv = (): JSX.Element => {
  const categorie: string = "discover/tv";
  return <Movies urlLink={categorie} />;
};

export default Tv;
