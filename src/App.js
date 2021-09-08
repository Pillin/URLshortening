import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./theme";
import NavBar from "./components/NavBar";
import AdvancedStatistics from "./components/AdvancedStatistics";
import Footer from "./components/Footer";
import LinkForm from "./components/LinkForm";
import Banner from "./components/Banner";
import GetStarted from "./components/GetStarted";
import "./styles.css";


export default function App() {
  return (
    <ThemeProvider theme={theme}>

        <NavBar />
        <Banner />
        <LinkForm />
        <AdvancedStatistics />

      <GetStarted />
      <Footer />

    </ThemeProvider>
  );
}
