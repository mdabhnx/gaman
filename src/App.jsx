import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Creators from "./components/Creators/Creators";
import Faq from "./components/Faq/Faq";
import Monetization from "./components/Monetization/Monetization";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Steps />
        {/* <Creators /> */}
        {/* <Faq /> */}
        {/* <Monetization /> */}
        {/* <Footer /> */}
        {/* <div style={{ height: "900px" }}></div> */}
      </BrowserRouter>
    </>
  );
};

export default App;
