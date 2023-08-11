import React, { useContext, useState } from "react";
import { MovieDetails } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import DataContext from "../../context/DataContext";
import {
  AverageContainer,
  AverageNumber,
  DescriptionContainer,
  HomeContainer,
  HomeBodyContainer,
  ImgContainer,
  OverviewContainer,
  TitleContainer,
  AddAtList,
} from "./styled";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useIsConnected } from "../../context/DataContext";
import Swal from "sweetalert2";
import { List } from "../../context/constants";

const ShowMovie = (): JSX.Element => {
  const { isConnected } = useIsConnected();
  const { postData } = useContext(DataContext);
  const { setLists } = useContext(DataContext);
  const { lists }: { lists: List[] } = useContext(DataContext);
  const { account }: { account: string } = useContext(DataContext);
  let currLists: List;
  const movieData: MovieDetails = postData;

  let ok: boolean = true;
  const handleAddMovie = () => {
    if (isConnected) {
      Swal.fire({
        title: "You want to add this movie?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add it!",
      }).then((result) => {
        if (result.isConfirmed) {
          for (let i = 0; i < lists.length; i++)
            if (lists[i].owner === account) {
              for (let j = 0; j < lists[i].elements.length; j++)
                if (lists[i].elements[j].id === postData.id) ok = false;
              if (ok === true) {
                currLists = lists[i];
                const existingList = [...currLists.elements];
                existingList.push(postData);
                const UpdatedList: List = {
                  elements: existingList,
                  owner: currLists.owner,
                };
                currLists = UpdatedList;
                const existingLists: List[] = [...lists];
                const newList: List[] = existingLists.filter(
                  (value) => value.owner !== lists[i].owner
                );

                const UpdatedLists: List = {
                  elements: currLists.elements,
                  owner: currLists.owner,
                };
                newList.push(UpdatedLists);
                setLists(newList);
                Swal.fire("Added!", "Your movie has been added.", "success");
              } else
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "You already have this movie on your watchlist!",
                });
            }
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to be connected!",
      });
    }
  };
  return (
    <HomeContainer>
      <Header />
      <HomeBodyContainer>
        <ImgContainer
          src={`http://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
        />
        <DescriptionContainer>
          {movieData.title ? (
            <TitleContainer>{movieData.title}</TitleContainer>
          ) : (
            <TitleContainer>{movieData.name}</TitleContainer>
          )}
          <OverviewContainer>{movieData.overview}</OverviewContainer>
          <AverageContainer>
            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
            <AverageNumber>{movieData.vote_average}</AverageNumber>
          </AverageContainer>
          <AddAtList onClick={handleAddMovie}>Add at list</AddAtList>
        </DescriptionContainer>
      </HomeBodyContainer>
      <Footer />
    </HomeContainer>
  );
};

export default ShowMovie;
