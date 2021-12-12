import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Greetings from '../components/Greetings';
import Banner from '../components/Banner';
import NewsSlider from '../components/NewsSlider/NewsSlider';
import Contacts from '../components/Contacts';
import ReviewSlider from '../components/ReviewSlider';

function App() {
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
        <main className="landing-page">
          <Greetings
            header="Центр кардиохирургии и интервенционной кардиологии"
            subheader="Медицина, доступная каждому"
            buttonText="Записаться на прием"
          />
          <Banner />
          <section className="container">
            <h2 className="article__header">
              Центр кардиохирургии и интервенционной кардиологии
            </h2>
            <p className="article__p">
              Центр кардиохирургии и интервенционной кардиологии приглашает
              на&nbsp;прием,{' '}
              <Link href="/diagnostics">
                <a className="article__link">диагностику</a>
              </Link>{' '}
              и&nbsp;
              <Link href="/treatment">
                <a className="article__link">лечение</a>
              </Link>{' '}
              пациентов с&nbsp;заболеваниями сердца и&nbsp;сердечно-сосудистой
              системы.
            </p>
            <p className="article__p">
              В нашей клинике работают специалисты разных направлений
              деятельности: кардиологии, кардиохирургии, аритмологии, сосудистой
              хирургии, кардиоанестезиологии и&nbsp;др. Благодаря их слаженной
              работе, процесс лечения и&nbsp;последующего наблюдения пациентов
              происходит в&nbsp;кратчайшие сроки. Сотрудники
              кардиохирургического отделения работают в&nbsp;единой команде
              с&nbsp;хирургами, терапевтами, неврологами на&nbsp;всех этапах
              лечебно-диагностического процесса, поэтому при&nbsp;выявлении
              у&nbsp;пациента острой патологии, он&nbsp;будет незамедлительно
              направлен на&nbsp;консультацию к&nbsp;профильному специалисту.
            </p>
            <p className="article__p">
              Для комфортного пребывания пациентов наше отделение располагает
              одноместными, двух- и&nbsp;трехместными палатами со&nbsp;всеми
              удобствами.
            </p>
            <p className="article__p">
              Для записи на прием к специалистам Центра кардиохирургии и
              интервенционной кардиологии, звоните по телефону{' '}
              <a href="tel:+79992380136" className="article__link">
                +7&nbsp;(999)&nbsp;238-01-36
              </a>
              .
            </p>
          </section>
          <NewsSlider />
          <ReviewSlider />
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
