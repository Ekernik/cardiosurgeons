import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

export default function Structure() {
  return (
    <>
      <Head>
        <title>
          Структура Центра кардиохирургии и интервенционной кардиологии
        </title>
        <meta
          property="og:title"
          content="Структура Центра кардиохирургии и интервенционной кардиологии"
        />
        <meta
          name="description"
          content="Отделения Центра: кардиохирургическое, кардиореаниматологии и анастезиологии, диагностическое отделение кардиологии, отделение функциональной диагностики, отделение рентгенэндоваскулярных обследований."
        />
        <meta
          property="og:description"
          content="Отделения Центра: кардиохирургическое, кардиореаниматологии и анастезиологии, диагностическое отделение кардиологии, отделение функциональной диагностики, отделение рентгенэндоваскулярных обследований."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./image.webp" />
        <meta property="og:url" content="https://heartteamspb.com/structure" />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <main>
          <Header />
          <section className="container section__about-us">
            <h1 className="article__header">
              Структура Центра кардиохирургии и интервенционной кардиологии
            </h1>
            <p className="article__p">
              Центр кардиохирургии и интервенционной кардиологии основан на базе
              “КВТ им.&nbsp;Н.И.Пирогова” СПбГУ в&nbsp;2014 году.
            </p>
            <p className="article__p">
              Ведем прием пациентов с&nbsp;различными заболеваниями
              сердечно-сосудистой системы. Проводим как миниинвазивные, так
              и&nbsp;тяжелые операции на&nbsp;сердце и&nbsp;сосудах.
            </p>
            <p className="article__p">В структуру нашего Центра входят: </p>
            <ul className="article__ul">
              <li className="article__li">
                —{' '}
                <Link href="/structure/cardiosurgery">
                  <a className="article__link">Отделение кардиохирургии</a>
                </Link>
              </li>
              <li className="article__li">
                —{' '}
                <Link href="/structure/cardioreanimatology">
                  <a className="article__link">
                    Отделение кардиореаниматологии и анастезиологии
                  </a>
                </Link>
              </li>
              <li className="article__li">
                — {/* <Link href="/structure/endovascular-diagnostics"> */}
                {/* <a className="article__link"> */}
                Отделение рентгенэндоваскулярных методов диагностики и лечения
                {/* </a> */}
                {/* </Link> */}
              </li>
              <li className="article__li">
                — {/* <Link href="/structure/outpatient-diagnostics"> */}
                {/* <a className="article__link"> */}
                Амбулаторно-диагностическое отделение кардиологии
                и&nbsp;функциональной диагностики
                {/* </a> */}
                {/* </Link> */}
              </li>
              <li className="article__li">
                — {/* <Link href="/structure/functional-diagnostics"> */}
                {/* <a className="article__link"> */}
                Отделение функциональной диагностики
                {/* </a> */}
                {/* </Link> */}
              </li>
            </ul>
            <p className="article__p">
              В нашем центре вы можете пройти диагностику и получить лечение как
              по ОМС, так и по бесплатным федеральным квотам. За дополнительной
              информацией обращайтесь по телефону:{' '}
              <a className="article__link" href="tel:+79992380136">
                +7 (999) 238-01-36
              </a>
            </p>
          </section>
          <Contacts />
          <Footer />
        </main>
      </div>
    </>
  );
}
