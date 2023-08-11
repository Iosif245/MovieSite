import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import Slider from "../../components/slider";
import {
  ButtonsContainer,
  HomeContainer,
  MoviesContainer,
  PageButton,
  SlideType,
} from "./styled";
import { MovieDetails } from "../../context/constants";

const Home = (): JSX.Element => {
  const {
    popular,
    dayTrends,
    weekTrends,
  }: {
    popular: MovieDetails[];
    dayTrends: MovieDetails[];
    weekTrends: MovieDetails[];
  } = useContext(DataContext);
  const [time, setTime] = useState<number>(0);
  const handleTimeChange = () => {
    if (time === 0) setTime(1);
    else setTime(0);
  };
  return (
    <HomeContainer>
      <Header />
      <MoviesContainer>
        <ButtonsContainer>
          <SlideType>Trending</SlideType>
          <PageButton onClick={handleTimeChange}>Day</PageButton>
          <PageButton onClick={handleTimeChange}>Week</PageButton>
        </ButtonsContainer>
        {time === 0 ? (
          <Slider content={dayTrends} />
        ) : (
          <Slider content={weekTrends} />
        )}
        <SlideType style={{ marginLeft: "70px" }}>Popular</SlideType>
        <Slider content={popular} />
      </MoviesContainer>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
