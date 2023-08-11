import React, { useContext, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Swal from "sweetalert2";
import {
  HomeContainer,
  MoviesContainer,
  NothingTitle,
  MovieTitle,
  MovieContainer,
  MovieBodyContainer,
  MovieImg,
  DateContainer,
  DeleteButton,
} from "./styled";
import DataContext from "../../context/DataContext";
import { List, MovieDetails } from "../../context/constants";
import { useNavigate, NavigateFunction } from "react-router-dom";

const Watchlist = (): JSX.Element => {
  const { setLists } = useContext(DataContext);
  const navigate: NavigateFunction = useNavigate();
  const { lists }: { lists: List[] } = useContext(DataContext);
  const { account }: { account: string } = useContext(DataContext);
  let showList: List | null = null;
  for (let i = 0; i < lists.length; i++)
    if (lists[i].owner === account) showList = lists[i];
  const { postData, setPostData } = useContext(DataContext);
  const handleDataChange = ({ movie }: { movie: MovieDetails }) => {
    setPostData(movie);
    navigate("/show");
  };
  const handleDelete = ({ id }: { id: number }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (showList !== null) {
          {
            const newArray: MovieDetails[] = showList.elements.filter(
              (value) => value.id !== id
            );
            const UpdatedList: List = {
              elements: newArray,
              owner: showList.owner,
            };
            const existingLists: List[] = [...lists];
            const newList: List[] = existingLists.filter(
              (value) => value.owner !== UpdatedList.owner
            );
            const UpdatedLists2: List = {
              elements: UpdatedList.elements,
              owner: UpdatedList.owner,
            };
            newList.push(UpdatedLists2);
            setLists(newList);
            navigate("/watchlist");
          }
        }
        Swal.fire("Deleted!", "Your movie has been deleted.", "success");
      }
    });
  };
  return (
    <HomeContainer>
      <Header />
      <MoviesContainer>
        {showList === null ? (
          <NothingTitle>You don't have any movies</NothingTitle>
        ) : (
          showList.elements.slice(0, 30).map((e) => (
            <MovieContainer key={e.id}>
              <MovieBodyContainer
                onClick={() => handleDataChange({ movie: e })}
              >
                <MovieImg
                  src={`http://image.tmdb.org/t/p/w500/${e.poster_path}`}
                />
                <DateContainer>
                  <MovieTitle>
                    {e.title
                      ? e.title.substring(0, 29)
                      : e.name?.substring(0, 29)}
                  </MovieTitle>
                </DateContainer>
              </MovieBodyContainer>
              <DeleteButton onClick={() => handleDelete({ id: e.id })}>
                Delete movie
              </DeleteButton>
            </MovieContainer>
          ))
        )}
      </MoviesContainer>
      <Footer />
    </HomeContainer>
  );
};

export default Watchlist;
