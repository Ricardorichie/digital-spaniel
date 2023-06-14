import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
  ThemeProps,
} from "styled-components"
interface CustomTheme extends DefaultTheme {}

export const lightTheme: CustomTheme = {
  primaryColor: "#19293A",
  secondaryColor: "#C0345E",
  background: "#FFFFFF",
  mutedColorPrimary1: "#EDEFF1",
  mutedColorPrimary2: "#19293A1A",
  mutedColorPrimary3: "#E2E4E6",
  mutedColorPrimary4: "#C5C9CD",
  mutedColorSecondary1: "#50647380",
  mutedColorSecondary2: "#A7B1B8",
  mutedColorSecondary3: "#19293A80",
  mutedColorSecondary4: "#9EA9B1",
  mutedColorSecondary5: "#596D7A",
  mutedColorSecondary6: "#C5CACE",
  mutedColorSecondary7: "#506473",

  accentPrimary: "#C34465",
  accentSecondary: "#112D40",
  accentTertiary: "#344657",
}
export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
/* body {
 background:${(props) => props.theme.background}} */
  *{
    transition: background 0.3s ease;
    transition-property: background, color;
  }
`
