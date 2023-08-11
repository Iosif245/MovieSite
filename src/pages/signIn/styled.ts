import styled from "styled-components";
import * as Router from "react-router-dom";
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HomeContainerMain = styled.div`
  width: 100vw;
  height: calc(100vh - 101px);
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  flex-direction: 1;
  align-items: center;
  justify-content: center;
`;
export const AllSectionContainer = styled.div`
  width: calc(100vw - 400px);
  height: calc(100vh - 201px);
  display: flex;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 10px;
`;
export const SectionLine = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  height: 350px;
  width: 2px;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
`;
export const LeftSectionContainer = styled.div`
  height: calc(100vh - 201px);
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RightSectionContainer = styled.div`
  height: calc(100vh - 201px);
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkGray};
  font-family: ${(props) => props.theme.fonts.extraBold};
`;
export const ElementTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  font-family: ${(props) => props.theme.fonts.extraBold};
  margin: 0px;
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: bold;
  padding: 0px;
`;
export const ElementText = styled.p`
  font-size: ${(props) => props.theme.fontSize.mSmall};
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkGray};
  margin: 0px;
  padding: 0px;
  padding-top: 5px;
`;
export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
export const RightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled(Router.Link)`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: row;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.gold};
  }
  align-items: center;
  border: solid 1px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.colors.lightGray};
  height: 35px;
  width: 220px;
  margin: 5px;
  text-decoration: none;
`;
export const ButtonImg = styled.img`
  height: 25px;
  width: 30px;
  margin-left: 10px;
  margin-right: 20px;
`;
export const ButtonText = styled.p`
  color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSize.mSmall};
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-weight: bold;
`;
export const NewButtonContainer = styled(Router.Link)`
  display: flex;
  background-color: ${(props) => props.theme.colors.hoverGold};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.lightGray};
  }
  align-items: center;
  justify-content: center;
  border: solid 1px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.colors.lightGray};
  height: 35px;
  width: 220px;
  margin: 5px;
  text-decoration: none;
`;
export const NewButtonText = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.small};
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-weight: bold;
  display: flex;
  flex: column;
  align-items: center;
  justify-content: center;
`;
