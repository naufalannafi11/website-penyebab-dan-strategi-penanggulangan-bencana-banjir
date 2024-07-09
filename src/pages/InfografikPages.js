import CardComp from "../components/CardComp";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { ThemeProvider, ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";

function InfografikPages() {
  return (
    <ThemeProvider>
      <InfografikContent />
    </ThemeProvider>
  );
}

function InfografikContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <NavbarComp />
      <div className="infografikPages">
        <h2>Infografik</h2>
        <p>
          Lihat dan unduh infografik seputar informasi bencana di Jakarta.
          Infografik yang ditampilkan berdasarkan informasi resmi dari Pemprov
          DKI Jakarta
        </p>
      </div>
      <br />
      <br />
      <CardComp />
      <Footer />
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Toggle Theme
      </button>
    </div>
  );
}

export default InfografikPages;
