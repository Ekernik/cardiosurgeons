import React from "react";

import Greetings from "../components/Greetings/";
// import WhyUs from "../components/WhyUs/";
// import OurServices from "../components/OurServices/";
import Contacts from "../components/Contacts/";
import NewsSlider from "../components/NewsSlider/";
import Banner from "../organisms/Banner/";
import { Helmet } from "react-helmet";

function Landing() {
  return (
    <main className="landing-page">
      <Helmet>
        <title>Центр кардиохирургии и интервенционной кардиологии</title>
        <meta
          name="description"
          content="Кардиология, кардиохирургия, сосудистая хирургия, аритмология - в клинике ВМТ им. Н.И.Пирогова. Хирургическое лечение заболеваний органов сердечно-сосудистой системы."
        />
      </Helmet>
      <Greetings
        header="Центр кардиохирургии и интервенционной кардиологии"
        subheader="Медицина, доступная каждому"
        buttonText="Записаться на прием"
      />
      <Banner />
      <NewsSlider />
      {/* <WhyUs /> */}
      {/* <OurServices /> */}
      <Contacts />
    </main>
  );
}

export default Landing;
