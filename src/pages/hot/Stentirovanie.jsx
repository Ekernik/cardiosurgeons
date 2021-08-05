import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Operation02 from '../../components/Abouts/Operation_02';
import Greetings from '../../components/Greetings';
import Contacts from '../../components/Contacts';

export default function Stentirovanie() {
  return (
    <main className="page__stentirovanie">
      <Header />
      <Greetings
        header="Стентирование коронарных артерий"
        subheader="единственная эффективная и безопасная помощь при текущем инфаркте миокарда"
        buttonText="записаться на бесплатный прием"
      />
      <Operation02 />
      <Contacts />
      <Footer />
    </main>
  );
}
