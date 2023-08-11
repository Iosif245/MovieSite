import React from "react";
import {
  FooterLine,
  FooterContainer,
  FooterLogoTextSection,
  FooterLeftSection,
  FooterWrapper,
  FooterCopyRight,
  FooterLogoImg,
  FooterRight,
  FooterDiscordLogo,
} from "./styles";
import logo from "./logo.png";
import discord from "./discord.png";

const Footer = (): JSX.Element => {
  const handleOpenDiscord = () => {
    window.open("https://discord.gg/kfmSPkkU");
  };
  return (
    <FooterContainer>
      <FooterLine />
      <FooterWrapper>
        <FooterLeftSection>
          <FooterLogoTextSection>
            <FooterLogoImg src={logo} />
          </FooterLogoTextSection>
          <FooterCopyRight>
            2023 © Designed by Joseph. All rights reserved
          </FooterCopyRight>
          <FooterRight>
            <FooterDiscordLogo
              src={discord}
              onClick={() => handleOpenDiscord()}
            />
          </FooterRight>
        </FooterLeftSection>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
