import * as Router from "react-router-dom";
import styled from "styled-components";

export const MovieContainer = styled.div`
  height: 190px;
  width: 110px;
  padding: 0px;
  margin: 0px;
  background-color: ${(props) => props.theme.colors.darkGray};
`;
export const MovieBodyContainer = styled.div`
  height: 190px;
  width: 110px;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.hoverGold};
  }
  background-color: ${(props) => props.theme.colors.darkGray};
`;
export const MovieTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  padding-left: 5px;
  text-decoration: none;
  justify-content: center;
  margin: 0px;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
`;
export const DateContainer = styled.div`
  border: solid 1px ${(props) => props.theme.colors.darkGray};
`;
export const MovieImg = styled.img`
  height: 150px;
  border: solid 1px ${(props) => props.theme.colors.darkGray};
  padding: 0px;
  margin: 0px;
  width: 108px;
`;
export const AverageContainer = styled.div`
  padding: 0px;
  margin: 0px;
`;
export const AverageIcon = styled.img``;
export const AverageNumber = styled.h2``;
