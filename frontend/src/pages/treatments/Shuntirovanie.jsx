import React from "react";

import Operation03 from "../../components/Abouts/Operation_03";
import Greetings from "../../components/Greetings";
import Contacts from "../../components/Contacts";
import Banner from "../../organisms/Banner";
import Advantages from "../../organisms/Advantages";
import { Helmet } from "react-helmet";
import './index.scss';

export default function Shuntirovanie() {
  return (
    <main className="page__shuntirovanie">
      <Helmet>
        <title>
          Аортокоронарное шунтирование сердца. Операции аорто-коронарного
          шунтирования
        </title>
        <meta
          name="description"
          content="Проводим операции коронарного шунтирования в Санкт-Петербурге. Профессиональные врачи, современное оборудование. Обратитесь к нам за консультацией по вопросам аортокоронарного шунтирования."
        />
        <meta
          property="og:description"
          content="Проводим операции коронарного шунтирования в Санкт-Петербурге. Профессиональные врачи, современное оборудование. Обратитесь к нам за консультацией по вопросам аортокоронарного шунтирования."
        />
        <meta
          property="og:title"
          content="Аортокоронарное шунтирование сердца. Операции аорто-коронарного
          шунтирования."
        />
        <meta
          property="og:url"
          content="heartteamspb.com/treatment/aorto-koronarnoe-shuntirovanie"
        />
      </Helmet>
      <Greetings
        header="Аортокоронарное шунтирование"
        subheader="самая частая кардиохирургическая операция"
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <Operation03 />
      <Advantages />
      <Contacts />
    </main>
  );
}
