import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Operation04 from "../../components/Abouts/Operation_04";
import Greetings from "../../components/Greetings";
import Contacts from "../../components/Contacts";
import Banner from "../../organisms/Banner";
import Advantages from "../../organisms/Advantages";

export default function Stentirovanie() {
  return (
    <main className="page__stentirovanie">
      <Header />
      <Greetings
        header="Пластика митрального клапана"
        subheader=""
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <Operation04 />
      <Advantages />
      <Contacts />
      <Footer />
    </main>
  );
}
