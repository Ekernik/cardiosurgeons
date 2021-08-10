import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Operation02 from "../../components/Abouts/Operation_02";
import Greetings from "../../components/Greetings";
import Contacts from "../../components/Contacts";
import Banner from "../../organisms/Banner";
import Advantages from "../../organisms/Advantages";

export default function Stentirovanie() {
  return (
    <main className="page__stentirovanie">
      <Header />
      <Greetings
        header="Стентирование коронарных артерий"
        subheader="единственная эффективная и безопасная помощь при текущем инфаркте миокарда"
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <Operation02 />
      <Advantages />
      <Contacts />
      <Footer />
    </main>
  );
}
