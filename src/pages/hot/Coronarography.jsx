import React from 'react';
import Greetings from '../../components/Greetings';
import Header from '../../components/Header';
import Banner from '../../organisms/Banner';
import AboutCG from '../../components/AboutCG';
import Advantages from '../../organisms/Advantages/Advantages';
import Contacts from '../../components/Contacts';
import Footer from '../../components/Footer';

function Coronarography() {
  return (
    <div className="Coronarography-page">
      <Header />
      <Greetings
        header="Коронарография"
        subheader="эффективный и достоверный метод диагностики поражения артерий сердца"
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <AboutCG />
      <Advantages />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Coronarography;
