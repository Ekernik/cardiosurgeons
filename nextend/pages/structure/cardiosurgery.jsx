import Head from 'next/head';
import Header from '../../components/Header/Header';
import Contacts from '../../components/Contacts';
import Footer from '../../components/Footer/Footer';

export default function Structure() {
  return (
    <>
      <Head>
        <title>Отделение кардиореаниматологии и анастезиологии</title>
        <meta
          property="og:title"
          content="Отделение кардиореаниматологии и анастезиологии"
        />
        <meta
          name="description"
          content="Отделение кардиореаниматологии и анастезиологии Центра кардиологии и кардиохирургии. Комфортное лечение для пациентов."
        />
        <meta
          property="og:description"
          content="Отделение кардиореаниматологии и анастезиологии Центра кардиологии и кардиохирургии. Комфортное лечение для пациентов."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./image.webp" />
        <meta
          property="og:url"
          content="https://heartteamspb.com/structure/cardiosurgery"
        />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <main>
          <Header />
          <section className="container section__about-us">
            <h1 className="article__header">
              Отделение кардиореаниматологии и анастезиологии
            </h1>
            <p className="article__p">
              Отделение кардиореанимации и&nbsp;анестезиологии осуществляет
              оказание высококвалифицированной помощи больным
              с&nbsp;заболеваниями сердечно-сосудистой системы, нуждающимся
              в&nbsp;лечении и&nbsp;интенсивном наблюдении с&nbsp;применением
              полного комплекса современных лечебно-профилактических методов.
              Большой практический опыт наших специалистов и&nbsp;современное
              высокотехнологичное оборудование позволяют выполнять все
              существующие методы обезболивания, создания психологического
              комфорта, глубокого сна во&nbsp;время проведения хирургического
              вмешательства.
            </p>
            <p className="article__p">
              Пациенты в&nbsp;предоперационном периоде обязательно осматриваются
              анестезиологом, оценивается течение их основного заболевания,
              по&nbsp;поводу которого планируется выполнение хирургического
              лечения, оценивается тяжесть сопутствующего заболевания.
              При&nbsp;необходимости, для понимания возможных рисков
              для&nbsp;здоровья и&nbsp;жизни пациентов, выполняются
              дополнительные обследования, проводятся консилиумы,
              на&nbsp;которых принимаются решения по&nbsp;наиболее безопасному
              проведению хирургического лечения и&nbsp;анестезиологическому
              обеспечению выполняемой операции.
            </p>
            <p className="article__p">
              В операционных в&nbsp;постоянной готовности находятся аппараты,
              позволяющие выполнить аутогемотрансфузию крови. Эта&nbsp;процедура
              позволяет в&nbsp;короткие сроки восполнить кровопотерю,
              а&nbsp;в&nbsp;некоторых случаях - полностью отказаться
              от&nbsp;переливания донорской крови и&nbsp;ее&nbsp;компонентов.
              В&nbsp;тяжелых случаях для поддержания жизни и&nbsp;принятия
              решения в&nbsp;дальнейшей тактике лечения применяется аппарат
              экстракорпоральной мембранной оксигенации&nbsp;(ЭКМО). Инвазивно
              создается искусственная циркуляция крови с&nbsp;удалением
              углекислого газа и&nbsp;насыщением кислородом.
            </p>
            <p className="article__p">
              Немаловажно наблюдение пациента в&nbsp;первые сутки после
              проведенной операции, где&nbsp;важен каждый момент,
              будь&nbsp;то&nbsp;изменения в&nbsp;анализах крови, артериального
              давления, насыщение крови кислородом&nbsp;(сатурация) и&nbsp;ЭКГ.
              Все пациенты без&nbsp;исключения активно наблюдаются
              кардиохирургами, кардиологами
              и&nbsp;анестезиологами-реаниматологами. Такой коллегиальный подход
              позволяет в&nbsp;ускоренные сроки перевести пациента
              на&nbsp;профильное отделение, где его дальнейшее выздоровление
              будет происходить в&nbsp;плановом порядке.
            </p>
          </section>
          <Contacts />
          <Footer />
        </main>
      </div>
    </>
  );
}