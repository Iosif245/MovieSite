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
  FormSection,
  CreateButton,
  BottomLeftText,
  BottomRightText,
  BottomSection,
} from "./styled";
import logo from "./kisspng-imdb-film-director-computer-icons-television-u-5ac6f594137fd3.2912686215229884360799.png";
import "./constants";
import { TypeInputs } from "./constants";
import DataContext from "../../context/DataContext";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { List, UserInterface } from "../../context/constants";
const CreateAccount = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const { setUsersList, setLists } = useContext(DataContext);
  const { usersList }: { usersList: UserInterface[] } = useContext(DataContext);
  const { lists }: { lists: List[] } = useContext(DataContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  let ok: boolean = true;
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleRePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRePassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email || !password || !repassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields.",
      });
      ok = false;
    }

    if (password !== repassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match.",
      });
      ok = false;
    }
    if (usersList.length > 0)
      for (let i = 0; i <= usersList.length; i++)
        if (usersList[i].name === name) {
          ok = false;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Name already used.",
          });
        } else {
          if (usersList[i].email === email) ok = false;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enail already used.",
          });
        }
    if (ok) {
      const newUser = {
        name,
        email,
        password,
      };
      const newList: List = {
        elements: [],
        owner: name,
      };
      setUsersList([...usersList, newUser]);
      setLists([...lists, newList]);
      setName("");
      setEmail("");
      setPassword("");
      setRePassword("");
      navigate("/login");
    } else {
      ok = true;
    }
    console.log(ok);
  };
  return (
    <HomeContainer>
      <MainContainer>
        <LogoImg src={logo}></LogoImg>
        <SectionContainer>
          <Title>Create account</Title>
          <FormSection>
            {TypeInputs.map((e) => (
              <ElementSection key={e.title}>
                <TitleElement>{e.title}</TitleElement>
                <InputElement
                  placeholder={e.placeholder}
                  type="text"
                  required
                  value={
                    e.title === "Your Name"
                      ? name
                      : e.title === "Email"
                      ? email
                      : e.title === "Password"
                      ? password
                      : repassword
                  }
                  onChange={
                    e.title === "Your Name"
                      ? handleNameChange
                      : e.title === "Email"
                      ? handleEmailChange
                      : e.title === "Password"
                      ? handlePasswordChange
                      : handleRePasswordChange
                  }
                ></InputElement>
              </ElementSection>
            ))}
            <CreateButton type="submit" onClick={handleSubmit}>
              Create your IMDb account
            </CreateButton>
          </FormSection>
          <BottomSection>
            <BottomLeftText>Already have an account?</BottomLeftText>
            <BottomRightText to="/login">Sign in</BottomRightText>
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

export default CreateAccount;
