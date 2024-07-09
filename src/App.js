import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DataPages from './pages/DataPages';
import TentangBanjirJakartaPages from './pages/TentangBanjirJakartaPages';
import 'bootstrap/dist/css/bootstrap.min.css';
import DokumenPages from './pages/DokumenPages';
import InfografikPages from './pages/InfografikPages';
import BeritaPages from './pages/BeritaPages';
import KontakPages from './pages/KontakPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datapages" element={<DataPages />} />
        <Route path="/tentangbanjirjakartapages" element={<TentangBanjirJakartaPages />} />
        <Route path="/dokumenpages" element={<DokumenPages />} />
        <Route path="/infografikpages" element={<InfografikPages />} />
        <Route path="/beritapages" element={<BeritaPages />} />
        <Route path="/kontakpages" element={<KontakPages />} />
      </Routes>
    </Router>
  );
}

export default App;
