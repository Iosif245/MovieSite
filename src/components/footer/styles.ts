import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  width: 100vw;
  height: 50px;
`;

export const FooterLine = styled.div`
  background-color: ${(props) => props.theme.colors.gold};
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.gold};
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FooterLeftSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  z-index: 10;
`;

export const FooterLogoTextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const FooterCopyRight = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.xSmall};
  font-family: ${(props) => props.theme.fonts.inter};
  flex: 1;
`;

export const FooterLogoImg = styled.img`
  height: 45px;
  width: auto;
  margin-left: 40px;
`;

export const FooterRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const FooterDiscordLogo = styled.img`
  height: 32px;
  margin-right: 40px;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;
