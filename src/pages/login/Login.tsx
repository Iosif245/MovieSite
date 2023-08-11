import React from "react";
import Swal from "sweetalert2";
import { useState, useContext } from "react";
import "./styled";
import {
  FooterContainer,
  HomeContainer,
  InputElement,
  ElementSection,
  LogoImg,
  MainContainer,
  SectionContainer,
  Title,
  TitleElement,
  CreateButton,
  BottomLeftText,
  BottomRightText,
  BottomSection,
} from "./styled";
import DataContext from "../../context/DataContext";
import { useIsConnected } from "../../context/DataContext";
import { useNavigate, NavigateFunction } from "react-router-dom";
import logo from "./kisspng-imdb-film-director-computer-icons-television-u-5ac6f594137fd3.2912686215229884360799.png";
const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsConnected } = useIsConnected();
  const { usersList, account, setAccount } = useContext(DataContext);
  const navigate: NavigateFunction = useNavigate();
  interface UserInterface {
    name: string;
    email: string;
    password: string;
  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const user: UserInterface = usersList.find(
      (user: UserInterface) =>
        user.email === email && user.password === password
    );
    if (user) {
      Swal.fire("Good job!", "You log in!", "success");
      setIsConnected(true);
      setAccount(user.name);
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong authentication data!",
      });
    }
  };
  return (
    <HomeContainer>
      <MainContainer>
        <LogoImg src={logo}></LogoImg>
        <SectionContainer>
          <Title>Sign in</Title>
          <ElementSection>
            <TitleElement>Email</TitleElement>
            <InputElement
              placeholder="Email"
              type="text"
              required
              value={email}
              onChange={handleEmailChange}
            ></InputElement>
          </ElementSection>
          <ElementSection>
            <TitleElement>Password</TitleElement>
            <InputElement
              placeholder="Password"
              type="text"
              required
              value={password}
              onChange={handlePasswordChange}
            ></InputElement>
            <CreateButton type="submit" onClick={handleSubmit}>
              Sign in
            </CreateButton>
          </ElementSection>
          <BottomSection>
            <BottomLeftText>New to IMDb?</BottomLeftText>
            <BottomRightText to="/createaccount">
              Create your IMDb account
            </BottomRightText>
          </BottomSection>
        </SectionContainer>
      </MainContainer>
      <FooterContainer>
        <BottomLeftText> Help Conditions of Use Privacy Notice </BottomLeftText>
        <BottomLeftText>
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </BottomLeftText>
      </FooterContainer>
    </HomeContainer>
  );
};

export default Login;
