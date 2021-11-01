import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer/Footer";
import illnesses from "../public/static/databases/illnesses";

export default function Diagnostics() {
  const renderItems = (object, illness, isLastItem) => {
    const isObject = typeof illness === "object";
    const illnessLink = (
      <div className="diagnostics__link">
        <Link href={`/diagnostics${illness.link}`}>
          <a>{illness.title}</a>
        </Link>
      </div>
    );

    return (
      <div
        key={`i_${object.categoryName}_${object.illnesses.indexOf(illness)}`}
      >
        <li className="illness-list__item">
          {isObject ? illnessLink : illness}
        </li>
        {isLastItem ? "" : <hr />}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Центр кардиохирургии и интервенционной кардиологии</title>
        <meta
          name="description"
          content="Кардиология, кардиохирургия, сосудистая хирургия, аритмология - в клинике ВМТ им. Н.И.Пирогова. Хирургическое лечение заболеваний органов сердечно-сосудистой системы."
        />
        <meta
          property="og:title"
          content="Центр кардиологии и интервенционной кардиологии."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./image.webp" />
        <meta
          property="og:description"
          content="Кардиология, кардиохирургия, сосудистая хирургия, аритмология - в клинике ВМТ им. Н.И.Пирогова. Хирургическое лечение заболеваний органов сердечно-сосудистой системы."
        />
        <meta property="og:url" content="heartteamspb.com" />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <main className="page__diagnostics">
          <section className="container  section__diagnostics">
            <h1 className="section__header">
              Мы производим диагностику по следующим направлениям
            </h1>
            <ul className="list-container__list">
              {illnesses.map((object) => (
                <div
                  className="illness-subsection"
                  key={`is${illnesses.indexOf(object)}`}
                >
                  <h3 className="illness-list__header">
                    {object.categoryName}
                  </h3>
                  {object.illnesses.map((illness) => {
                    return object.illnesses[object.illnesses.length - 1] ===
                      illness
                      ? renderItems(object, illness, true)
                      : renderItems(object, illness, false);
                  })}
                </div>
              ))}
            </ul>
          </section>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}