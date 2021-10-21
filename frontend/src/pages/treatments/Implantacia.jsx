import React from "react";

import Greetings from "../../components/Greetings";
import Banner from "../../organisms/Banner";
import Operation05 from "../../components/Abouts/Operation_05";
import Contacts from "../../components/Contacts";

export default function miniinvisiv() {
  return (
    <main className="page__miniinvisiv">
      <Greetings
        header="Имплантация кардиостимуляторов"
        subheader=""
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <Operation05 />
      <Contacts />
    </main>
  );
}
