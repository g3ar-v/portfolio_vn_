import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";

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

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  font-weight: bold;
  color: #3a3845;

  &:link {
    color: #434343;
    font-weight: bold;
    text-decoration: none;
  }
  &:hover {
    color: #c69b7b;
    font-weight: bold;
  }
  &:active {
    color: #c69b7b;
  }
`;
export const GlobalStyles = createGlobalStyle`
body {
	background: ${({ theme }) => theme.body};
	color: ${({ theme }) => theme.text};
	font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	transition: all 0.50s linear;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar {
  display: none;
  width: 10px;
  background: "#E6E1CC"; 
}
::-webkit-scrollbar-thumb  {
  border-radius: 9em;
  background: #3a3845
}
`;
