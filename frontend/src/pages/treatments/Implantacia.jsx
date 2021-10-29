import React from "react";

import Greetings from "../../components/Greetings";
import Banner from "../../organisms/Banner";
import Operation05 from "../../components/Abouts/Operation_05";
import Contacts from "../../components/Contacts";
import { Helmet } from "react-helmet";
import './index.scss';

export default function miniinvisiv() {
  return (
    <main className="page__miniinvisiv">
      <Helmet>
        <title>
          Имплантация кардиостимуляторов. Операции по установке
          кардиостимулятора сердца
        </title>
        <meta
          name="description"
          content="Операции по имплантации кардиостимуляторов проводятся опытными специалистами клиники ВМТ им Н.И.Пирогова. Мы выполнили более 4000 операций кардиохирургического профиля."
        />
        <meta
          property="og:description"
          content="Операции по имплантации кардиостимуляторов проводятся опытными специалистами клиники ВМТ им Н.И.Пирогова. Мы выполнили более 4000 операций кардиохирургического профиля."
        />
        <meta
          property="og:title"
          content="Имплантация кардиостимуляторов. Операции по установке
          кардиостимулятора сердца."
        />
        <meta
          property="og:url"
          content="heartteamspb.com/treatment/implantacia-kardiostimulyatorov"
        />
      </Helmet>
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
