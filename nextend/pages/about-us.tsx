import { NextPage } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import team from '@/public/static/images/team.jpg';
import operation01 from '@/public/static/images/operation_01.jpg';
import operation02 from '@/public/static/images/operation_02.jpg';
import ImageSlider from '@/components/ImageSlider';
import { SliderData__aboutUs } from 'public/static/databases/sliderData/about-us';
import PhoneLink from '@/components/PhoneLink';
import styles from '@/styles/aboutUs.module.scss';

const AboutUs: NextPage = () => {
  const SEODetails = {
    title:
      'Кардиохирургия и интервенционная кардиология клиники ВМТ им. Н.И.Пирогова СПБГУ',
    description:
      'Центр кардиологии и кардиохирургии находится в Санкт-Петербурге и принимает пациентов со всех регионов России и мира.',
    pageLink: 'https://heartteamspb.com/diagnostics/about-us',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <main className='mt container'>
        <article>
          <h1>О клинике</h1>
          <Image
            className={styles.team_img}
            src={team}
            alt='Команда врачей Центра кардиохирургии и интервенционной кардиологии'
            layout='responsive'
            quality={100}
          />
          <p>
            <strong>Центр кардиохирургии и интервенционной кардиологии</strong>{' '}
            основан в 2014 году на базе “Клиники высоких технологий
            им.&nbsp;Н.И.Пирогова” Санкт-Петербургского Государственного
            Университета. За короткий срок наш Центр стал одним из ведущих
            учреждений в&nbsp;России по хирургическому лечению заболеваний
            сердечно-сосудистой системы взрослого населения.
          </p>
          <h2>Структура центра</h2>
          <ul>
            <li>Кардиохирургическое отделение</li>
            <li>Отдел рентгенэндоваскулярных методов диагностики и лечения</li>
            <li>Отделение кардиоанастезиологии и реаниматологии</li>
            <li>
              Амбулаторно-диагностическое отделение кардиологии и функциональной
              диагностики
            </li>
            <li>Отделение функциональной диагностики</li>
          </ul>
          <div className={styles.flex}>
            <p>
              Результаты лечения в нашей клинике высоко оценены не только
              пациентами и ведущими российскими специалистами, но и именитыми
              врачами из Германии, Италии, Дании, с которыми Центр регулярно
              обменивается опытом и проводит показательные операции. По базовым
              критериям оценки результатов лечения, таким как летальность,
              осложнения, продолждительность послеоперационного лечения, наш
              центр — один из лучших в России. Более того, по некоторым
              параметрам превосходит крупные европейские клиники.
            </p>
            <div className={styles.img}>
              <Image
                src={operation01}
                alt='Операционная Центра.'
                layout='responsive'
              />
            </div>
          </div>
          <p>
            Центр кардиохирургии и интервенционной кардиологии — прекрасный
            пример эффективной деятельности на всех уровнях, — от руководства до
            младшего медицинского персонала, главной целью работы которого
            является следование интересам нашего пациента.
          </p>
          <p>
            Кроме хирургического лечения врачи Центра выполняют значительный
            объем работы по{' '}
            <Link
              href='/diagnostics'
              text='диагностике сердечно-сосудистых заболеваний'
            />
            , оформлению документации пациентам (талоны ОМС и ВМП), а также
            осуществляют амбулаторное ведение этих пациентов.
          </p>
          <div className={styles.flex}>
            <p>
              Современные операционные и палаты реанимации, оснащенные новейшим
              зарубежным и отечественным оборудованием, весь спектр расходных
              материалов и лекарственных препаратов позволяют нашим врачам
              чувствовать себя уверенно при выполнении{' '}
              <Link
                href='/operacii-na-serdce'
                text='сложных операций на сердце'
              />
              .
            </p>
            <div className={styles.img}>
              <Image
                src={operation02}
                alt='Современное и высокотехнологическое оборудование в операционной Центра.'
                layout='responsive'
              />
            </div>
          </div>
          <p>
            Среди сотрудников Центра — доктора и кандидаты медицинских наук,
            регулярно выезжающие на стажировки в ведущие клиники Северной
            Америки и Европы. Наши специалисты активно участвуют в работе
            Европейской, Мировой, Скандинавской и Азиатской ассоциаций
            сердечно-сосудистых и торакальных хирургов. Научные работы
            сотрудников Центра публикуются в ведущих европейских и российских
            журналах.
          </p>
          <p>
            Являясь важным звеном в системе здравоохранения, активным образом
            улучшая продуктивность, снижая экономические затраты и оказывая
            необходимое влияние,{' '}
            <Link
              href='/'
              text='Центр кардиохирургии и интервенционной кардиологии'
            />{' '}
            создает возможность и в будущем успешно лечить пациентов с
            заболевания сердечно-сосудистой системы.
          </p>
          <p>
            Для консультации по всем вопросам, звоните нашим специалистам по
            телефону кардиохирургии <PhoneLink />
          </p>
        </article>
        <ImageSlider props={SliderData__aboutUs} />
      </main>
      <Contacts />
      <Footer />
    </>
  );
};

export default AboutUs;