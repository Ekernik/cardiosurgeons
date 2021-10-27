import React from "react";
import Operation07 from "../../components/Abouts/Operation_07";
import Greetings from "../../components/Greetings";
import Contacts from "../../components/Contacts";
import Banner from "../../organisms/Banner";
import Advantages from "../../organisms/Advantages";
import { Helmet } from "react-helmet";

export default function Stentirovanie() {
  return (
    <main className="page__stentirovanie">
      <Helmet>
        <title>Каротидная эндартерэктомия</title>
        <meta
          name="description"
          content="Операция каротидная эндартерэктомия в ВМТ им. Пирогова. Эверсионная эндартерэктомия."
        />
        <meta
          property="og:description"
          content="Операция каротидная эндартерэктомия в ВМТ им. Пирогова. Эверсионная эндартерэктомия."
        />
        <meta property="og:title" content="Каротидная эндартерэктомия." />
        <meta
          property="og:url"
          content="heartteamspb.com/treatment/karotidnaya-endarterektomiya"
        />
      </Helmet>
      <Greetings
        header="Каротидная эндартерэктомия"
        subheader="один из способов устранения стеноза внутренней сонной артерии"
        buttonText="записаться на бесплатный прием"
      />
      <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
      <Operation07 />
      <Advantages />
      <Contacts />
    </main>
  );
}
