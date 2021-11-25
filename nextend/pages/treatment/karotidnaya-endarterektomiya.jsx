import Head from "next/head";
import Header from "../../components/Header/Header";
import Greetings from "../../components/Greetings";
import Contacts from "../../components/Contacts";
import Banner from "../../components/Banner";
import Advantages from "../../components/Advantages";
import Footer from "../../components/Footer/Footer";

export default function Stentirovanie() {
  return (
    <>
      <Head>
        <title>Каротидная эндартерэктомия</title>
        <meta property="og:title" content="Каротидная эндартерэктомия." />
        <meta
          name="description"
          content="Операция каротидная эндартерэктомия в ВМТ им. Пирогова. Эверсионная эндартерэктомия."
        />
        <meta
          property="og:description"
          content="Операция каротидная эндартерэктомия в ВМТ им. Пирогова. Эверсионная эндартерэктомия."
        />
        <meta
          property="og:url"
          content="heartteamspb.com/treatment/karotidnaya-endarterektomiya"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./image.webp" />
      </Head>
      <div className="App">
        <div id="curtain"></div>
        <Header />
        <main className="page__stentirovanie">
          <Greetings
            header="Каротидная эндартерэктомия"
            subheader="один из способов устранения стеноза внутренней сонной артерии"
            buttonText="записаться на бесплатный прием"
          />
          <Banner text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРИЕМ МОГУТ ВСЕ ГРАЖДАНЕ РФ (из любого региона РФ)" />
          <section className="section__about-op-03 container">
            <h1 className="article__header">Каротидная эндартерэктомия</h1>
            <p className="article__p">
              Каротидная эндартерэктомия – хирургическая операция, которая
              применяется у больных со стенозом (сужением) общей или внутренней
              сонной артерии атеросклеротической бляшкой.
            </p>
            <p className="article__p">
              Суть процедуры состоит в удалении отложений холестеринового обмена
              (бляшка) из просвета артерии с восстановлением нормального
              кровоснабжения головного мозга, и как следствие, профилактика
              такого грозного осложнения, как ишемический инсульт.
            </p>
            <p className="article__p">
              Проведенными многочисленными исследованиями доказано, что стеноз
              внутренней сонной артерии более чем на 70%, повышает риски
              развития ишемического инсульта в 5 раз, что приводит к изменению
              локальных параметров кровотока с микротромбообразованием и
              травматизацией стенки сосуда. Чаще всего, пациентов, нуждающихся в
              данной операции, беспокоит головокружение, шаткость при ходьбе,
              шум в ушах или голове, расстройство зрения («пелена», «паутинка»,
              «мушки» перед глазами), внезапно возникшая слабость в руке/ноге.
            </p>
            <p className="article__p">
              Показания к операции каротидной эндартерэктомии определяются
              сосудистым хирургом на основании симптомов, данных дуплексного
              исследования (УЗИ) и компьютерной томографии сосудов
              брахиоцефального сегмента (шейный отдел). Бывают случаи, когда
              предвестников заболевания нет и значимое сужение сонной артерии
              является случайной находкой при обследовании. «Бить тревогу»
              стоит, когда стеноз сонной артерии составляет 50%, а начиная с 70%
              - хирург с большей вероятностью отправит Вас на оперативное
              лечение.
            </p>
            <p className="article__p">
              Теперь более подробно остановимся на технике выполнения самой
              операции каротидной эндартерэктомии. Совместно с анестезиологом
              определяется тип анестезии, местная (проводниковая) или общая.
            </p>
            <ul className="article__ul">
              <li className="article__li">
                При первом варианте на протяжении всей операции пациент остается
                в сознании, обязательно поддерживается речевой и зрительный
                контакт.
              </li>
              <li className="article__li">
                Во втором случае, Вы будете введены в искусственный сон (общий
                наркоз), а пробуждение будет происходить только после окончания
                операции. Традиционный доступ находится по передне-боковой
                поверхности шеи - выполняется линейный разрез длиной 4-6 см.
                Хирург использует профессиональную оптику с увеличением, и при
                помощи специальных инструментов, артерии отделяются от
                окружающих структур (нервы, вены). Выделяются общая, наружная и
                внутренняя сонные артерии с последующим наложением на них
                сосудистых зажимов. Общая сонная артерия пересекается сразу под
                бифуркацией (развилкой). Тщательно удаляются все свободно
                лежащие в просвете сосуда остатки бляшки и наружный слой артерии
                возвращается в прежнее положение. Далее, артерия ушивается
                обвивным швом с последующей пластикой натяжением (эверсия), либо
                заплатой из ксеноперикарда, окончательный выбор хирургической
                тактики возможен только в ходе самой операции. Зажимы снимаются,
                после чего, кровоток в пережатых артериях восстанавливается.
                Только после тщательной проверки швов на герметичность и
                отсутствии источников кровотечения производится послойное
                ушивание раны косметическим швом. Продолжительность
                эндартерэктомии каротидных артерий в среднем занимает около 1-
                1.5 часов, в послеоперационном периоде длительного наблюдения и
                лечения в отделении реанимации как правило не требуется.
              </li>
            </ul>
            <p className="article__p">
              В клинике Высоких Медицинских Технологий разработан четкий
              стандарт, который позволяет выписывать пациентов на следующий день
              после операции, что благоприятно сказывается на ранней
              реабилитации и препятствует появлению инфекционных осложнений.
              Лечащий врач отпустит Вас домой с рекомендациями, строгое
              соблюдение которых поможет избежать дальнейших осложнений и
              появлению новых атеросклеротических бляшек на стенках сосудов,
              питающих головной мозг.
            </p>
          </section>
          <Advantages />
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
