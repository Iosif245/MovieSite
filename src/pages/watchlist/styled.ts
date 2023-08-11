import * as Router from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  padding: 0px;
  margin: 0px;
  background-color: ${(props) => props.theme.colors.lightGray};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const MoviesContainer = styled.div`
  width: calc(100vw - 120px);
  height: calc(100vh - 140px);
  display: flex;
  margin: 20px;
  align-items: center;
  padding-left: 60px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
export const MovieContainer = styled.div`
  padding: 0px;
  margin: 0px;
  height: 75px;
  width: 192px;
  background-color: ${(props) => props.theme.colors.darkGray};
`;
export const MovieBodyContainer = styled.div`
  height: 50px;
  width: 192px;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.hoverGold};
  }
`;
export const MovieTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 50px;
  font-size: 12px;
  border: solid 1px ${(props) => props.theme.colors.darkGray};
  padding-left: 5px;
  text-decoration: none;
  justify-content: center;
  margin: 0px;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
`;
export const NothingTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 70px;
  padding-left: 5px;
  text-decoration: none;
  justify-content: center;
  margin: 0px;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
`;
export const DateContainer = styled.div``;
export const MovieImg = styled.img`
  height: 50px;
  border: solid 1px ${(props) => props.theme.colors.darkGray};
  padding: 0px;
  margin: 0px;
  width: auto;
`;
export const AverageContainer = styled.div`
  padding: 0px;
  margin: 0px;
`;
export const AverageIcon = styled.img``;
export const AverageNumber = styled.h2``;
export const DeleteButton = styled.div`
  height: 25px;
  width: 192px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.hoverGold};
  }
`;
