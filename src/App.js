import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./theme";
import NavBar from "./components/NavBar";
import AdvancedStatistics from "./components/AdvancedStatistics";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <AdvancedStatistics />
      <GetStarted />
      <Footer />
    </ThemeProvider>
  );
}
