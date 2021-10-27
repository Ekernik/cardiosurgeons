import React from "react";
import Greetings from "../../components/Greetings";
import Banner from "../../organisms/Banner";
import About from "../../components/Abouts/OpuholiSerdca";
import Advantages from "../../organisms/Advantages/Advantages";
import Contacts from "../../components/Contacts";
import { Helmet } from "react-helmet";
import "./index.scss";

const OpuholiSerdca = () => {
  return (
    <div id="page__opuholi-serdca">
      <Helmet>
        <title>Опухоли сердца. Миксома сердца. Опухоли сосудов сердца</title>
        <meta
          name="description"
          content="Проводим операции по устранению опухолей сердца: как доброкачественных, так и злокачественных. Устранение миксомы сердца. Записывайтесь на прием!"
        />
        <meta
          property="og:title"
          content="Опухоли сердца. Миксома сердца. Опухоли сосудов сердца."
        />
        <meta
          property="og:description"
          content="Проводим операции по устранению опухолей сердца: как доброкачественных, так и злокачественных. Устранение миксомы сердца. Записывайтесь на прием!"
        />
        <meta
          property="og:url"
          content="heartteamspb.com/treatment/opuholi-serdca"
        />
      </Helmet>
      <Greetings
        header="Опухоли сердца"
        subheader=""
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <About />
      <Advantages />
      <Contacts />
    </div>
  );
};

export default OpuholiSerdca;
