import React from "react";

import Operation02 from "../../components/Abouts/Operation_02";
import Greetings from "../../components/Greetings";
import Contacts from "../../components/Contacts";
import Banner from "../../organisms/Banner";
import Advantages from "../../organisms/Advantages";
import { Helmet } from "react-helmet";

export default function Stentirovanie() {
  return (
    <main className="page__stentirovanie">
      <Helmet>
        <title>Стентирование коронарных артерий и сосудов</title>
        <meta
          name="description"
          content="Операции по стентированию коронарных артерий и сосудов. Записывайтесь на прием к кардиохирургам Центра кардиохуриругии и интервенционной кардиологии им. Н.И. Пирогова."
        />
      </Helmet>
      <Greetings
        header="Стентирование коронарных артерий"
        subheader="единственная эффективная и безопасная помощь при текущем инфаркте миокарда"
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <Operation02 />
      <Advantages />
      <Contacts />
    </main>
  );
}
