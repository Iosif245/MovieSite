import { styled } from "styled-components";

export const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0px;
  align-items: center;
  flex-direction: column;
`;
export const HomeBodyContainer = styled.div`
  width: 900px;
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.white};
  height: calc(100vh - 142px);
  display: flex;
  margin: 20px;
  padding: 0px;
  border: solid 1px ${(props) => props.theme.colors.gold};
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
`;
export const AddAtList = styled.div`
  width: 100px;
  height: 20px;
  border: solid 1px ${(props) => props.theme.colors.gold};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  border-radius: 15px;
  padding-left: 30px;
  align-items: center;
  justify-content: color-interpolation-filters;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.hoverGold};
  }
`;
export const ImgContainer = styled.img`
  height: 440px;
  border: solid 1px ${(props) => props.theme.colors.gold};
  border-radius: 5px;
  width: 350px;
  margin: 20px;
`;
export const DescriptionContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 5px;
  margin: 20px;
`;
export const TitleContainer = styled.div`
  font-size: ${(props) => props.theme.fontSize.large};
`;
export const OverviewContainer = styled.div``;
export const AverageContainer = styled.div`
  padding: 0px;
  display: flex;
  margin: 20px;
  padding: 0px;
  align-items: center;
  justify-content: right;
  flex-direction: row;
  margin: 0px;
`;
export const AverageNumber = styled.h2``;
