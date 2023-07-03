import React from "react";
import { ReactDOM } from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activites from "./components/Activites";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <TopBar/>
      <NavBar />
      <Hero/>
      <Activites/>
      <Booking/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
