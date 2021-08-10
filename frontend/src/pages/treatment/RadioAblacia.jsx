import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Operation08 from '../../components/Abouts/Operation_08';
import Greetings from '../../components/Greetings';
import Contacts from '../../components/Contacts';
import Banner from '../../organisms/Banner';

function RadioAblacia() {
  return (
    <div className="Coronarography-page">
      <Header />
      <Greetings
        header="Радиочастотная абляция"
        subheader="молодой, эффективный и малоинвазивный метод радикального лечения тахикардий"
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <Operation08 />
      <Contacts />
      <Footer />
    </div>
  );
}

export default RadioAblacia;
