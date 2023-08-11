import React from "react";
import Movies from "../../components/movies";

const PopularTv = (): JSX.Element => {
  const categorie: string = "tv/top_rated";
  return <Movies urlLink={categorie} />;
};

export default PopularTv;
