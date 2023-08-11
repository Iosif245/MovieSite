import "styled-components";

type colors = {
  black?: string;
  gold: string;
  hoverGold: string;
  white: string;
  lightGray: string;
  darkGray: string;
};
type fontSize = {
  medium: string;
  xLarge: string;
  xSmall: string;
  small: string;
  mSmall: string;
  large: string;
  xxLarge: string;
  gigant: string;
  xGigant: string;
  mxSmall: string;
  xxGigant: string;
};
type fonts = {
  normal: string;
  roboto: string;
  regular: string;
  aldrich: string;
  inter: string;
  bold: string;
  extraBold: string;
  light: string;
  interBold: string;
  interReg: string;
  cevicheOne: string;
};
declare module "styled-components" {
  export interface DefaultTheme {
    colors: colors;
    fontSize: fontSize;
    fonts: fonts;
  }
}
