import React from "react";
import { About, Footer, Header, SelfEducation, Skills, Work } from "./container";
import { NavBar } from "./components";
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <SelfEducation />
      <Footer />
    </div>
  );
};

export default App;
