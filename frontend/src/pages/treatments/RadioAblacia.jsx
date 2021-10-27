import React from "react";

import Operation08 from "../../components/Abouts/Operation_08";
import Greetings from "../../components/Greetings";
import Contacts from "../../components/Contacts";
import Banner from "../../organisms/Banner";
import Advantages from "../../organisms/Advantages";
import { Helmet } from "react-helmet";

function RadioAblacia() {
  return (
    <div className="Coronarography-page">
      <Helmet>
        <title>Радиочатотная абляция. Операция РЧА на сердце</title>
        <meta
          name="description"
          content="Радиочастотная катетерная абляция (РЧА) - для пациентов с наличием аритмии и др. проблем с сердцем. Записывайтесь на осмотр и консультацию."
        />
        <meta
          property="og:description"
          content="Радиочастотная катетерная абляция (РЧА) - для пациентов с наличием аритмии и др. проблем с сердцем. Записывайтесь на осмотр и консультацию."
        />
        <meta
          property="og:title"
          content="Радиочатотная абляция. Операция РЧА на сердце."
        />
        <meta
          property="og:url"
          content="heartteamspb.com/treatment/radiochastotnaya-ablyaciya"
        />
      </Helmet>
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
