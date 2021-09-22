import React from "react";
import Greetings from "../../components/Greetings";
import About from "../../components/Abouts/Diagnostic_01";
import Advantages from "../../organisms/Advantages/Advantages";
import Contacts from "../../components/Contacts";

export default function Ateroskleros() {
  return (
    <div className="page__ateroskleros">
      <Greetings
        header="Атеросклероз"
        subheader="эффективный и достоверный метод диагностики поражения артерий сердца"
        buttonText="записаться на бесплатный прием"
      />
      <About />
      <Advantages />
      <Contacts />
    </div>
  );
}
