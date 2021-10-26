import React from "react";
import Greetings from "../../components/Greetings";
import Banner from "../../organisms/Banner";
import About from "../../components/Abouts/OpuholiSerdca";
import Advantages from "../../organisms/Advantages/Advantages";
import Contacts from "../../components/Contacts";
import "./index.scss";

const OpuholiSerdca = () => {
  return (
    <div id="page__opuholi-serdca">
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
