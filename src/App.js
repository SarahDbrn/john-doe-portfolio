import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Mentions from "./pages/Contact";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
          <nav>
            <link href="/">Accueil</link>
            <link href="/portfolio">Portfolio</link>
            <link href="/services">Services</link>
            <link href="/contact">Contact</link>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions" element={<MentionsLegales />} />
        </Routes>
          </nav>
      </header>
    </div>
  );
}

export default App;
