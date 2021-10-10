import React from "react";

import Operation08 from "../../components/Abouts/Operation_08";
import Greetings from "../../components/Greetings";
import Contacts from "../../components/Contacts";
import Banner from "../../organisms/Banner";
import Advantages from "../../organisms/Advantages";

function RadioAblacia() {
  return (
    <div className="Coronarography-page">
      <Greetings
        header="Радиочастотная абляция"
        subheader="молодой, эффективный и малоинвазивный метод радикального лечения тахикардий"
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <Operation08 />
      <Advantages />
      <Contacts />
    </div>
  );
}

export default RadioAblacia;
