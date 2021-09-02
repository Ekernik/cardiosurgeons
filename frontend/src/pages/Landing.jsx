import React from "react";

import Greetings from "../components/Greetings/";
import WhyUs from "../components/WhyUs/";
import OurServices from "../components/OurServices/";
import Contacts from "../components/Contacts/";
import NewsSlider from "../components/NewsSlider/";
import Banner from "../organisms/Banner/";

function Landing() {
  return (
    <main className="landing-page">
      <Greetings
        header="Центр кардиохирургии и интервенционной кардиологии"
        subheader="Медицина, доступная каждому"
        buttonText="Записаться на прием"
      />
      <Banner />
      <NewsSlider />
      <WhyUs />
      <OurServices />
      <Contacts />
    </main>
  );
}

export default Landing;
