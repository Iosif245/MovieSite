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
  background-color: ${(props) => props.theme.colors.lightGray};
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 0px;
  margin-bottom: 20px;
  justify-content: center;
  flex-direction: row;
`;
export const MoviesContainer = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 160px);
  display: flex;
  margin: 20px;
  padding: 0px;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;
export const RowContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  padding: 0px;
  align-items: center;
  margin: 0px;
`;
