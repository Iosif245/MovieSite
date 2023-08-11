import Footer from "../../components/footer";
import Header from "../../components/header";
import {
  AllSectionContainer,
  ButtonContainer,
  ButtonImg,
  ButtonText,
  NewButtonText,
  ElementContainer,
  ElementText,
  ElementTitle,
  HomeContainer,
  HomeContainerMain,
  LeftSectionContainer,
  NewButtonContainer,
  RightSectionContainer,
  RightTextContainer,
  SectionLine,
  SectionTitle,
} from "./styled";
import { Benefits } from "./constants";
import amazon from "./png-transparent-amazon-com-amazon-echo-amazon-music-the-everything-store-jeff-bezos-and-the-age-of-amazon-kindle-fire-black-friday-miscellaneous-text-logo.png";
import facebook from "./Facebook_Logo_(2019).png.webp";
import IMBd from "./kisspng-imdb-logo-television-film-imdb-5b2337c3f0e889.7106501415290346919868.jpg";
import apple from "./apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png";
import google from "./google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";
const SignIn = (): JSX.Element => {
  return (
    <HomeContainer>
      <Header />
      <HomeContainerMain>
        <AllSectionContainer>
          <LeftSectionContainer>
            <SectionTitle>Sign in</SectionTitle>
            <ButtonContainer to="/login">
              <ButtonImg src={IMBd} />
              <ButtonText>Sign in with IMBd</ButtonText>
            </ButtonContainer>
            <ButtonContainer to="/login">
              <ButtonImg src={amazon} />
              <ButtonText>Sign in with Amazon</ButtonText>
            </ButtonContainer>
            <ButtonContainer to="/login">
              <ButtonImg src={google} />
              <ButtonText>Sign in with Google</ButtonText>
            </ButtonContainer>
            <ButtonContainer to="/login">
              <ButtonImg src={apple} />
              <ButtonText>Sign in with Apple</ButtonText>
            </ButtonContainer>
            <ButtonContainer to="/login">
              <ButtonImg src={facebook} />
              <ButtonText>Sign in with Facebook</ButtonText>
            </ButtonContainer>
            <ElementText>or</ElementText>
            <NewButtonContainer to="/createaccount">
              <NewButtonText>Create a New Account</NewButtonText>
            </NewButtonContainer>
          </LeftSectionContainer>
          <SectionLine />
          <RightSectionContainer>
            <SectionTitle>Benefits of your free IMDb account</SectionTitle>
            <RightTextContainer>
              {Benefits.map((e) => (
                <ElementContainer>
                  <ElementTitle>{e.title}</ElementTitle>
                  <ElementText>{e.text}</ElementText>
                </ElementContainer>
              ))}
            </RightTextContainer>
          </RightSectionContainer>
        </AllSectionContainer>
      </HomeContainerMain>
      <Footer />
    </HomeContainer>
  );
};

export default SignIn;
