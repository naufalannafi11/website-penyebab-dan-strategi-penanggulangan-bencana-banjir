import TabComp from "../components/TabComp";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { ThemeProvider, ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";

function BeritaPages() {
  return (
    <ThemeProvider>
      <BeritaPagesContent />
    </ThemeProvider>
  );
}

function BeritaPagesContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <NavbarComp />
      <div className="beritaPages">
        <h2>Berita</h2>
        <p>
          Lihat berita seputar informasi bencana di Jakarta. Berita yang
          ditampilkan berdasarkan informasi resmi dari Pemprov DKI Jakarta
        </p>
      </div>
      
      <TabComp />
      <Footer />
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Toggle Theme
      </button>
    </div>
  );
}

export default BeritaPages;
