import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Contacts from '../components/Contacts';
import { treatments } from '../public/static/databases/links';

export default function Treatment() {
  return (
    <>
      <Head>
        <title>Центр кардиохирургии и интервенционной кардиологии</title>
        <meta
          name="description"
          content="Кардиология, кардиохирургия, сосудистая хирургия, аритмология - в клинике ВМТ им. Н.И.Пирогова. Хирургическое лечение заболеваний органов сердечно-сосудистой системы."
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content="Центр кардиологии и интервенционной кардиологии."
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" data-react-helmet="true" />
        <meta
          property="og:image"
          content="./image.webp"
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content="Кардиология, кардиохирургия, сосудистая хирургия, аритмология - в клинике ВМТ им. Н.И.Пирогова. Хирургическое лечение заболеваний органов сердечно-сосудистой системы."
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content="heartteamspb.com"
          data-react-helmet="true"
        />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <main className="page__services">
          <div className="container container__services">
            <h1 className="services__header">Лечение</h1>
            <div className="services__list">
              {treatments.links.map((treatment, i) => (
                <div className="services__link" key={Date.now() + i}>
                  <Link href={treatment.link}>
                    <a>{treatment.text}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Contacts />
          <Footer />
        </main>
      </div>
    </>
  );
}
