import React from 'react';

import Header from '../components/Header/';
import Footer from '../components/Footer/';
import Greetings from '../components/Greetings/';
import WhyUs from '../components/WhyUs/';
import OurServices from '../components/OurServices/';
import Contacts from '../components/Contacts/';
import News from '../components/News/';

function Landing() {
  return (
    <div className="landing-page">
      <Header />
      <Greetings
        header="Центр кардиохирургии и интервенционной кардиологии"
        subheader="Медицина, доступная каждому"
        buttonText="Записаться на прием"
      />
      <News />
      <WhyUs />
      <OurServices />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Landing;
