import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header/Header";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer/Footer";
import team from "../public/static/images/team.jpg";
import operation01 from "../public/static/images/operation_01.jpg";
import operation02 from "../public/static/images/operation_02.jpg";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>
          Кардиохирургия и интервенционная кардиология клиники ВМТ им.
          Н.И.Пирогова СПБГУ
        </title>
        <meta
          name="description"
          content="Центр кардиологии и кардиохирургии находится в Санкт-Петербурге и принимает пациентов со всех регионов России и мира."
        />
        <meta
          property="og:title"
          content="Кардиохирургия и интервенционная кардиология клиники ВМТ им. Н.И.Пирогова СПБГУ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./image.webp" />
        <meta
          property="og:description"
          content="Центр кардиологии и кардиохирургии находится в Санкт-Петербурге и принимает пациентов со всех регионов России и мира."
        />
        <meta property="og:url" content="https://heartteamspb.com/about-us" />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <main className="page__about-us">
          <Header />
          <section className="container section__about-us">
            <h1 className="article__header">О клинике</h1>
            <div className="about-us__cover-img">
              <Image
                src={team}
                alt="Команда врачей Центра кардиохирургии и интервенционной кардиологии"
                layout="responsive"
                quality={100}
              />
            </div>
            <p className="article__p">
              <strong>
                Центр кардиохирургии и интервенционной кардиологии
              </strong>{" "}
              основан в 2014 году на базе “Клиники высоких технологий
              им.&nbsp;Н.И.Пирогова” Санкт-Петербургского Государственного
              Университета. За короткий срок наш Центр стал одним из ведущих
              учреждений в&nbsp;России по хирургическому лечению заболеваний
              сердечно-сосудистой системы взрослого населения.
            </p>
            <h2 className="section__subheader">Структура центра</h2>
            <ul className="article__ul">
              <li className="article__li">— Кардиохирургическое отделение</li>
              <li className="article__li">
                — Отдел рентгенэндоваскулярных методов диагностики и лечения
              </li>
              <li className="article__li">
                — Отделение кардиоанастезиологии и реаниматологии
              </li>
              <li className="article__li">
                — Амбулаторно-диагностическое отделение кардиологии и
                функциональной диагностики
              </li>
              <li className="article__li">
                — Отделение функциональной диагностики
              </li>
            </ul>
            <div className="about-us__flex-main">
              <p className="article__p">
                Результаты лечения в нашей клинике высоко оценены не только
                пациентами и ведущими российскими специалистами, но и именитыми
                врачами из Германии, Италии, Дании, с которыми Центр регулярно
                обменивается опытом и проводит показательные операции. По
                базовым критериям оценки результатов лечения, таким как
                летальность, осложнения, продолждительность послеоперационного
                лечения, наш центр — один из лучших в России. Более того, по
                некоторым параметрам превосходит крупные европейские клиники.
              </p>
              <div className="about-us__img">
                <Image
                  src={operation01}
                  alt="Операционная Центра."
                  layout="responsive"
                />
              </div>
            </div>
            <p className="article__p">
              Центр кардиохирургии и интервенционной кардиологии — прекрасный
              пример эффективной деятельности на всех уровнях, — от руководства
              до младшего медицинского персонала, главной целью работы которого
              является следование интересам нашего пациента.
            </p>
            <p className="article__p">
              Кроме хирургического лечения врачи Центра выполняют значительный
              объем работы по{" "}
              <Link href="https://heartteamspb.com/diagnostics">
                <a className="article__link">
                  {" "}
                  диагностике сердечно-сосудистых заболеваний
                </a>
              </Link>
              , оформлению документации пациентам (талоны ОМС и ВМП), а также
              осуществляют амбулаторное ведение этих пациентов.
            </p>
            <div className="about-us__flex-main">
              <p className="article__p">
                Современные операционные и палаты реанимации, оснащенные
                новейшим зарубежным и отечественным оборудованием, весь спектр
                расходных материалов и лекарственных препаратов позволяют нашим
                врачам чувствовать себя уверенно при выполнении сложных
                операций.
              </p>
              <div className="about-us__img">
                <Image
                  src={operation02}
                  alt="Современное и высокотехнологическое оборудование в операционной Центра."
                  layout="responsive"
                />
              </div>
            </div>
            <p className="article__p">
              Среди сотрудников Центра — доктора и кандидаты медицинских наук,
              регулярно выезжающие на стажировки в ведущие клиники Северной
              Америки и Европы. Наши специалисты активно участвуют в работе
              Европейской, Мировой, Скандинавской и Азиатской ассоциаций
              сердечно-сосудистых и торакальных хирургов. Научные работы
              сотрудников Центра публикуются в ведущих европейских и российских
              журналах.
            </p>
            <p className="article__p">
              Являясь важным звеном в системе здравоохранения, активным образом
              улучшая продуктивность, снижая экономические затраты и оказывая
              необходимое влияние,{" "}
              <Link href="https://heartteamspb.com/">
                <a className="article__link">
                  Центр кардиохирургии и интервенционной кардиологии{" "}
                </a>
              </Link>
              создает возможность и в будущем успешно лечить пациентов с
              заболевания сердечно-сосудистой системы.
            </p>
            <p className="article__p">
              Если вы хотите узнать стоимость коронарографии в нашей клинике,
              позвоните нам по телефону{" "}
              <a href="tel:+79992380136">+7 (999) 238-01-36</a>.
            </p>
          </section>
          <Contacts />
          <Footer />
        </main>
      </div>
    </>
  );
}
