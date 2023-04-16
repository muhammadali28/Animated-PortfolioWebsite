import React from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import AboutUs from "./Components/BodyComponent/AboutMe";
import Portfolio from "./Components/BodyComponent/Portfolio";
import Contact from "./Components/BodyComponent/Contact";
import Skills from "./Components/BodyComponent/Skills";
import Footer from "./Components/BodyComponent/Footer";
import Certificate from "./Components/BodyComponent/Certificate";

function App() {
  return (
    <div>
      <HeaderComponent />
      <AboutUs />
      <Portfolio />
      <Skills />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
