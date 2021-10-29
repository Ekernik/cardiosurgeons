import React from "react";

import Greetings from "../../components/Greetings";
import Banner from "../../organisms/Banner";
import Operation06 from "../../components/Abouts/Operation_06";
import Contacts from "../../components/Contacts";
import { Helmet } from "react-helmet";
import './index.scss';

export default function miniinvisiv() {
  return (
    <main className="page__miniinvisiv">
      <Helmet>
        <title>
          Миниинвазивное протезирование клапанов: аорты, митрального,
          трикуспидального
        </title>
        <meta
          name="description"
          content="Проводим кардиохирургические операции любой степени сложности. Протезирование клапана аорты, митрального клапана, трехстворчатого клапана."
        />
        <meta
          property="og:title"
          content="Миниинвазивное протезирование клапанов: аорты, митрального,
          трикуспидального."
        />
        <meta
          property="og:description"
          content="Проводим кардиохирургические операции любой степени сложности. Протезирование клапана аорты, митрального клапана, трехстворчатого клапана."
        />
        <meta
          property="og:url"
          content="heartteamspb.com/treatment/miniinvisivnoe-protezirovanie-klapanov"
        />
      </Helmet>
      <Greetings
        header="Миниинвазивное протезирование клапанов"
        subheader=""
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <Operation06 />
      {/* <Advantages /> */}
      <Contacts />
    </main>
  );
}
