import React from "react";

import Greetings from "../../components/Greetings";
import Banner from "../../organisms/Banner";
import Operation06 from "../../components/Abouts/Operation_06";
import Contacts from "../../components/Contacts";
import Advantages from "../../organisms/Advantages";

export default function miniinvisiv() {
  return (
    <main className="page__miniinvisiv">
      <Greetings
        header="Миниинвизивное протезирование клапанов"
        subheader=""
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <Operation06 />
      <Advantages />
      <Contacts />
    </main>
  );
}
