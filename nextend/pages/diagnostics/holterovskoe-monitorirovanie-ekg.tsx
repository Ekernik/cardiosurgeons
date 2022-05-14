import { NextPage } from 'next';
import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Greetings from '@/components/Greetings';
import Banner from '@/components/Banner';
import styles from '@/styles/article.module.scss';

const Holter: NextPage = () => {
  const SEODetails = {
    title: 'Холтеровское мониторирование ЭКГ',
    description:
      'Запишитесь на диагностику: холтеровское мониторирование в больнице кардиохирургии СПБ.',
    pageLink:
      'https://heartteamspb.com/diagnostics/holterovskoe-monitorirovanie-ekg',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header='Холтеровское мониторирование ЭКГ'
        subheader='функциональная диагностика сердца'
        buttonText='записаться на бесплатный прием'
      />
      <Banner />
      <article className='container'>
        <h1>Холтеровское мониторирование ЭКГ</h1>
        <p>
          <strong>Холтеровское мониторирование ЭКГ</strong> – функциональная
          диагностика сердца, основанная на суточной непрерывной записи ЭКГ на
          переносной кардиорегистратор. Исследование помогает преждевременно
          выявить различные виды аритмии, ишемическую болезнь и оценить
          результативность пройденного пациентом лечения.
        </p>
        <h2>Холтеровское мониторирование показано при:</h2>
        <ul>
          <li>головокружение</li>
          <li>частом или редком пульсе</li>
          <li>потере сознания, включая единичные случаи</li>
          <li>неровном сердцебиение</li>
          <li>нестабильной работе сердца</li>
          <li>ощущении «замирания» сердца</li>
          <li>лечение аритмии</li>
          <li>использование электрокардиостимулятора</li>
          <li>перенесенном инфаркте миокарда</li>
          <li>обследовании на ИБС</li>
        </ul>
        <h2>Подготовка и процесс исследования:</h2>
        <p>
          Если ранее пациент делал исследование ЭКГ, то желательно принести
          результаты с собой на прием к врачу. Не рекомендуется надевать платья
          женщинам, синтетическую одежду, а также цепочки и другие виды
          украшений на шею.
        </p>
        <p>
          На первом этапе исследования пациенту выдается в прокат портативный
          медицинский монитор и проводят инструктаж по его использованию.
          Устанавливается это монитор на грудную клетку с помощью электродов,
          которые подключаются к кардиорегистратору. Пациент должен носить его с
          собой в специальной сумке в течение всего обследования. Срок ношение
          прибора устанавливается лечащим врачом. Во время исследования пациент
          занимается обычными для него делами: дом, работа, учеба, отдых и так
          далее.
        </p>
        <div className={styles.marked_container}>
          <h3>Важно!</h3>
          <p>
            Пациент обязан вернуть прибор после завершения обследования в той же
            комплектности, что и был выдан.
          </p>
        </div>
        <h2>
          Для получения более подробной информации при холтеровском
          мониторирование рекомендуется:
        </h2>
        <ul>
          <li>
            Вести ежедневные записи с указанием времени в дневнике /записной
            книжке о приеме пищи или лекарств, состояние сна, физической
            нагрузке, эмоциональном состояние и так далее
          </li>
          <li>
            Следить за расположением электродов. В случае отсоединение одного
            из, необходимо приклеить их на прежнее место
          </li>
          <li>
            Избегать микроволновых печей, радиопередающих устройств, арок
            металлоискателей
          </li>
          <li>
            Запрещается самостоятельно отключать устройство, принимать ванну или
            душ вместе с монитором, самостоятельно проходить любого рода
            исследования, например, компьютерную и магнитно-резонансную
            томографии
          </li>
        </ul>
        <p>
          Важно! Если пациент не будет соблюдать вышеперечисленные рекомендации,
          то это снизит информативность холтеровского мониторирования, и врач не
          сможет оценить состояние организма.
        </p>
        <h2>Как проходит сбор результатов из кардиорегистратора?</h2>
        <p>
          После суточного ношения монитора (Или более суток) пациент приходит в
          клинику, и врачи снимают аппарат. Далее полученные данные переносят на
          компьютер и обрабатывают в специальной программе. После тщательного
          изучения результатов ЭКГ врач приступает к составлению заключения.
          Заключение составляется не только на основе выявленных патологических
          изменений, но и на записях в дневнике пациента (
          <a
            href='/dnevnik-holter.pdf'
            className='article__link'
            target='_blank'
            download
          >
            скачать&nbsp;дневник&nbsp;пациента
          </a>
          ). Такой процесс может занять от 30 минут до нескольких дней, в
          зависимости от выявленных изменений.
        </p>
        <h3>При таком исследовании пациенту необходимо сделать 3 приема:</h3>
        <ul>
          <li>Первое посещение – установка монитора</li>
          <li>
            Второе посещение – снятие монитора и расшифровка полученных данных
          </li>
          <li>Третье посещение – пациент забирает заключение</li>
        </ul>
        <h3>
          В нашей клинике проводится холтеровское мониторирование длительностью
          24 и 72 часа:
        </h3>
        <ul>
          <li>
            ЭКГ 24 часа для диагностики любого вида артериального давления
          </li>
          <li>
            ЭКГ в 12-ти отведениях 24 часа, наиболее распространен для
            диагностики любых нарушений сердца, ИБС, хронических и острых
            повреждений миокарда
          </li>
          <li>
            ЭКГ 72 часа для диагностики нарушений работы сердца при редко
            возникающих симптомах
          </li>
        </ul>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Holter;
