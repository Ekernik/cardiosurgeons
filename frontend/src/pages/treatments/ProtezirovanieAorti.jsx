import React from "react";
import Greetings from "../../components/Greetings";
import Banner from "../../organisms/Banner";
import About from "../../components/Abouts/ProtezirovanieAorti";
import Advantages from "../../organisms/Advantages/Advantages";
import Contacts from "../../components/Contacts";
import "./index.scss";

const ProtesirovanieAorti = () => {
  return (
    <div id="page__protezirovanie-aorti">
      <Greetings
        header="Протезирование аорты"
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

export default ProtesirovanieAorti;
