import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Mentions from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
          <nav>
            <link href="/">Accueil</link>
            <link href="/Portfolio">Portfolio</link>
            <link href="/Services">Services</link>
            <link href="/Contact">Contact</link>
            <link href="/Mentions">Mentions Légales</link>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Mentions" element={<Mentions />} />
        </Routes>
          </nav>
      </header>
    </div>
  );
}

export default App;
