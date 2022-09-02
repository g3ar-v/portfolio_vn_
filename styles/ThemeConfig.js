import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#363537",
  text: "#F5EDDC",
  link: "#F5EDDC",
  background: "#302E30"
};

export const lightTheme = {
  body: "#E6E1CC",
  text: "#363537",
  background: "#E6E1CC"
};

export const GlobalStyles = createGlobalStyle`
body {
	background: ${({ theme }) => theme.body};
	color: ${({ theme }) => theme.text};
	font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	transition: all 0.50s linear;
}
`;
