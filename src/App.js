import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import "./App.css";
import CardComp from "./components/CardComp";
import DataBanjirComp from "./components/DataBanjirComp";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import HeaderComp from "./components/HeaderComp";
import { NavbarComp } from "./components/NavbarComp";
import TabComp from "./components/TabComp";
import "./css/main.css";
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <NavbarComp />
      <HeaderComp />
      <TabComp />
      <CardComp />
      <DataBanjirComp />
      <InfoSection />
      <WeatherForecast/>
      <Footer />
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
