import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Greetings from "../components/Greetings";
import Banner from "../components/Banner";
// import NewsSlider from '../components/NewsSlider/NewsSlider';
import Contacts from "../components/Contacts";

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
          {/* <NewsSlider /> */}
          {/* <WhyUs /> */}
          {/* <OurServices /> */}
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
