import styled from "styled-components";
import * as Router from "react-router-dom";
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  width: 100vw;
  height: 50px;
  background-color: ${(props) => props.theme.colors.lightGray};
`;
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const LogoImg = styled.img`
  height: 70px;
  width: auto;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: calc(100vh - 100px);
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
`;
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: calc(100vh - 180px);
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
  border: solid 1px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.colors.lightGray};
`;
export const Title = styled.h3`
  margin: 0px;
  padding: 0px;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-family: ${(props) => props.theme.fonts.extraBold};
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
  padding: 0px;
`;
export const ElementSection = styled.div`
  margin-top: 20px;
`;
export const TitleElement = styled.div`
  font-size: ${(props) => props.theme.fontSize.mSmall};
  font-family: ${(props) => props.theme.fonts.extraBold};
  margin: 0px;
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: bold;
  padding: 0px;
`;
export const InputElement = styled.input`
  width: 330px;
  height: 25px;
  border: solid 1px ${(props) => props.theme.colors.darkGray};
  border-radius: 5px;
  margin-top: 5px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10px;
`;
export const FormSection = styled.form``;
export const CreateButton = styled.button`
  width: 350px;
  height: 35px;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &:hover {
    cursor: pointer;
  }
  background-color: ${(props) => props.theme.colors.gold};
`;
export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;
export const BottomLeftText = styled.p`
  font-size: ${(props) => props.theme.fontSize.mSmall};
  font-family: ${(props) => props.theme.fonts.extraBold};
  margin: 0px;
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: bold;
  padding: 0px;
  margin-bottom: 10px;
`;
export const BottomRightText = styled(Router.Link)`
  font-size: ${(props) => props.theme.fontSize.mSmall};
  font-family: ${(props) => props.theme.fonts.extraBold};
  margin: 0px;
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
  padding: 0px;
  margin-bottom: 10px;
`;
