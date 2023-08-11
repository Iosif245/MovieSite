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
export const PageButton = styled.button`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.hoverGold};
  }
`;
export const ButtonsContainer = styled.div`
  margin-left: 70px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: left;
  width: 80vw;
  padding: 0px;
  flex-direction: row;
`;
export const MoviesContainer = styled.div`
  width: calc(100vw - 120px);
  height: calc(100vh - 120px);
  justify-content: center;
  display: flex;
  margin: 10px;
  padding-left: 100px;
  gap: 20px;
  flex-direction: column;
`;
export const SlideType = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  height: 30px;
  width: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
