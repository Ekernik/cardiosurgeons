import React from "react";

import Greetings from "../../components/Greetings";
import Banner from "../../organisms/Banner";
import Contacts from "../../components/Contacts";
import AboutTAVI from "../../components/Abouts/TAVI";

export default function Tavi() {
  return (
    <main className="page__miniinvisiv">
      <Greetings
        header="Транскатетерная имплантация аортального клапана"
        subheader=""
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <AboutTAVI />
      <Contacts />
    </main>
  );
}
