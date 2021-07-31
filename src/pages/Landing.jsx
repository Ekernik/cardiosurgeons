import React from "react";

import Header from "../components/Header/";
import Footer from "../components/Footer/";
import Greetings from "../components/Greetings/";
import WhyUs from "../components/WhyUs/";
import OurServices from "../components/OurServices/";
import Contacts from "../components/Contacts/";
import NewsSlider from "../components/NewsSlider/";

function Landing() {
  return (
    <main className="landing-page">
      <Header />
      <Greetings
        header="Центр кардиохирургии и интервенционной кардиологии"
        subheader="Медицина, доступная каждому"
        buttonText="Записаться на прием"
      />
      <NewsSlider />
      <WhyUs />
      <OurServices />
      <Contacts />
      <Footer />
    </main>
  );
}

export default Landing;
