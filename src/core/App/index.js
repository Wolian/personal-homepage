import { Header } from "../../features/personallHomepage/Header";
import { Skills } from "../../features/personallHomepage/Skills";
import { NextLearn } from "../../features/personallHomepage/NextLearn";
import { Portfolio } from "../../features/personallHomepage/Portfolio";
import { Footer } from "../../features/personallHomepage/Footer";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { ThemeProvider } from "styled-components";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <ThemeSwitch />
      <Header />
      <main>
        <Skills />
        <NextLearn />
        <Portfolio />
      </main>
      <Footer />
    </ThemeProvider>
  );
};
