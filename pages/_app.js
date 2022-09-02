import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const pull_data = (data) => {
    setTheme(data);
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Navbar func={pull_data} theme={theme} />
    </ThemeProvider>
  );
}

export default MyApp;
