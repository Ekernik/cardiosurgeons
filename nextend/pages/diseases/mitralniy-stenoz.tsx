import { NextPage } from 'next';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';
import Banner from '@/components/Banner';
import Greetings from '@/components/Greetings';
import styles from '@/styles/article.module.scss';

const DiseaseArticle: NextPage = () => {
  const SEODetails = {
    title:
      'Митральный стеноз сердца. Диагностика и лечение митрального стеноза',
    description:
      'Заболевание: митральный стеноз сердца. Операции в Петербурге в центре кардиохирургии и интервенционной кардиологии.',
    pageLink: 'https://heartteamspb.com/diseases/mitralniy-stenoz',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header='Митральный стеноз'
        subheader=''
        buttonText='записаться на бесплатный прием'
      />
      <Banner />
      <article className='container'>
        <h1>Митральный стеноз</h1>
        <p>
          Митральный стеноз — это заболевание, являющееся приобретенным пороком
          сердца, то есть пороком, развившимся в течение жизни человека. При
          этом передняя и задняя створки митрального (атриовентрикулярного)
          клапана, расположенного между левым предсердием и левым желудочком,
          срастаются между собой. Кроме этого, хорды и папиллярные мышцы,
          расположенные под створками, срастаются между собой и со створками. В
          результате подвижность створок при открывании и закрывании резко
          ограничивается, препятствуя нормальному движению крови через клапан.
          Как следствие, наступает застой крови в сосудах лёгких.
        </p>
        <h2>Митральный стеноз: причины возникновения</h2>
        <p>
          В большей части случаев стеноз атриовентрикулярного отверстия имеет
          ревматическую этиологию. Дебют ревматизма, происходит в молодом
          возрасте, а клинически выраженный митральный стеноз развивается через
          20–30 лет. Другими причинами, приводящими к митральному стенозу, могут
          быть инфекционный эндокардит, травмы сердца, сифилис, тяжёлый
          кальциноз кольца и створок митрального клапана, атеросклероз, миксома
          левого предсердия, врожденный порок сердца (синдром Лютембаше).
        </p>
        <h2>Симптомы митрального стеноза</h2>
        <p>
          Основными жалобы при такой патологии является одышка при физической
          нагрузке и в покое, что обусловлено застоем крови сосудах лёгких. При
          длительном существовании митрального стеноза возможно присоединение
          постоянного кашля, перебоев в сердце и кровохаркания.
        </p>
        <h2>Митральный стеноз: диагностика</h2>
        <p>
          При появлении вышеописанных симптомов необходимо обратиться на приём к
          кардиологу. Одним из специфичных и распространённых методов
          диагностики митрального стеноза является эхокардиография. Данный метод
          ультразвуковой диагностики выявляет у пациента наличие митрального
          стеноза, определяет степень его выраженности, степень застоя крови в
          лёгких (легочную гипертензию). После этой диагностики врач может
          оценить операбельность пациента.
        </p>
        <h2>Лечение митрального стеноза сердца</h2>
        <p>Лечение митрального стеноза может быть двумя способами:</p>
        <div className={styles.marked_container}>
          <h3>консервативное лечение</h3>
          <p>
            комплекс мероприятий, направленных на изменение образа жизни и приём
            лекарственных препаратов, нацеленных на уменьшение клинических
            проявлений и замедление прогрессирования заболевания.
          </p>
        </div>
        <div className={styles.marked_container}>
          <h3>оперативное лечение</h3>
          <p>
            хирургическое вмешательство, цель которого заключается в
            восстановлении нормального кровотока через зауженное
            атриовентрикулярное отверстие и тем самым разгрузку сосудов лёгких
            от избыточного объёма крови. Смысл операции заключается в замене
            изменённого, плохо функционирующего клапана на механический или
            биологический протез.
          </p>
        </div>
        <h2>Прогноз</h2>
        <p>
          В случае естественного течения заболевания (отсутствии лечения)
          митральный стеноз может привести к&nbsp;инвалидизации пациента. В далеко
          зашедших случаях митральный стеноз осложняется присоединением опасного
          нарушения ритма -{' '}
          <Link
            href='/diseases/fibrilyaciya-predcerdiy'
            text='фибрилляция предсердий'
          />{' '}
          или может приводить к&nbsp;фатальным последствиям: отеку лёгких и&nbsp;смерти
          пациента.
        </p>
        <p>
          Выживаемость декомпенсированных и неоперированных больных в течение 10
          лет не превышает 15%.
        </p>
        <p>
          При формировании тяжелой легочной гипертензии средняя
          продолжительность жизни не превышает 3 лет.
        </p>
        <p>
          Поэтому рекомендуем обратиться в нашу клинику кардиохирургии за
          консультацией опытных кардиологов и&nbsp;кардиохирургов.
        </p>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default DiseaseArticle;
