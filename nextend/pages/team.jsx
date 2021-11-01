import Head from "next/head";
import Header from "../components/Header/Header";
import DoctorCard from "../components/DoctorCard";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer/Footer";
import doctors from "../public/static/databases/doctors";

export default function OurTeam() {
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
        <main className="section__our-team">
          <div className="container">
            <h1 className="doctors__header">Наша команда</h1>
            <div className="doctors__list">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctors.id}
                  imgSrc={doctor.img}
                  imgAlt={doctor.alt}
                  title={doctor.name}
                  subtitle={doctor.title}
                  link={doctor.link}
                />
              ))}
            </div>
          </div>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
