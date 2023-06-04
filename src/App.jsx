import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Monetization from "./components/Monetization/Monetization";
import Faq from "./components/Faq/Faq";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Faq />
        <Monetization />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
