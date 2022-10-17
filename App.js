import logo from './logo.svg';
import {Helmet} from "react-helmet"
import {Routes, Route} from "react-router-dom";

import Homepage from "./components/routes/homepage";
import About from "./components/routes/aboutpage";
import Contact from "./components/routes/contactpage";
import GameDev from "./components/routes/gamedevpage";
import WebDev from "./components/routes/webdevpage";

import CrownClothing from "./carousels/crownclothingcarousel";
import LaserWars from "./carousels/laserwarscarousel";
import Transcend from "./carousels/transcendcarousel";
import ShaunGour from "./carousels/shaungourcarousel";
import BattleBlades from "./carousels/arcarousel";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
      <title>Ryan Hodges- Programmer</title>
        <style>{"body { background: rgb(68,68,68); background: radial-gradient(circle, rgba(68,68,68,1) 42%, rgba(21,21,21,1) 100%);"}
        </style>
      </Helmet>
      <Navbar/>
      
      <div class="container">
        <Routes>
          <Route path="/" element={<About/>}></Route>
          <Route path="/home" element={<About/>}></Route>
          <Route path="/resume" element={<Contact/>}></Route>
          <Route path="/game-dev" element={<GameDev/>}></Route>
          <Route path="/web-dev" element={<WebDev/>}></Route>
          <Route path="/admin" element={<About/>}></Route>

          {/* Carousels */}
          <Route path="/crownclothing" element={<CrownClothing/>}></Route>
          <Route path="/laserwars" element={<LaserWars/>}></Route>
          <Route path="/transcend" element={<Transcend/>}></Route>
          <Route path="/shaungour" element={<ShaunGour/>}></Route>
          <Route path="/battleblades" element={<BattleBlades/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
