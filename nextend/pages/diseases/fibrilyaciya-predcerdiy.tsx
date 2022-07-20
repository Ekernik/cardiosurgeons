import { NextPage } from 'next';
import Link from '@/components/Link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';
import Banner from '@/components/Banner';
import Greetings from '@/components/Greetings';

const DiseaseArticle: NextPage = () => {
  const SEODetails = {
    title: 'Фибрилляция предсердий (ФП)',
    description:
      'Диагностика и лечение фибрилляции предсердий (ФП). Рекомендации ведущих аритмологов Центра кардиохирургии и кардиологии.',
    pageLink: 'https://heartteamspb.com/diseases/fibrilyaciya-predcerdiy',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header='Фибрилляция предсердий'
        subheader='аритмия с «триггерным» механизмом'
        buttonText='записаться на бесплатный прием'
      />
      <Banner />
      <article className='container'>
        <h1>Фибрилляция предсердий (ФП)</h1>
        <p>
          Фибрилляция предсердий – это нерегулярный и, как правило, частый
          предсердный ритм, обусловленный множественными волнами хаотичного
          возбуждения в предсердиях.
        </p>
        <h2>Причины возникновения фибрилляции предсердий</h2>
        <p>
          Фибрилляция предсердий — это аритмия с «триггерным» механизмом, где
          триггером (пусковым фактором) является эктопический фокусный очаг.
          Такие триггеры располагаются в мышечных муфтах устьев легочных вен –
          месте, где легочные вены, несущие обогащенную кислородом кровь из
          легких, впадают в левое предсердие. Причиной фибрилляции предсердий
          могут быть ишемическая болезнь сердца, пороки сердца, артериальная
          гипертензия, гормональные нарушения, употребление психоактивных
          веществ, алкоголя, стресс.
        </p>
        <h2>Симптомы фибрилляции предсердий</h2>
        <p>
          Основными симптомами фибрилляции предсердий являются: слабость и
          недомогание, сердцебиение, одышка, снижение переносимости физической
          нагрузки, перебои в работе сердца, иногда - обморочные состояния, боли
          в груди.
        </p>
        <p>
          Фибрилляция предсердий значительно снижает качество жизни пациентов,
          которые живут в постоянном страхе в ожидании приступа, а также в
          несколько раз повышает вероятность развития инсульта – в этом и
          заключается ее основная опасность.
        </p>
        <p>
          Вовремя выявленные фибрилляции предсердий помогают предотвратить
          возникновение сложных заболеваний, поэтому рекомендуем пройти
          диагностику в нашей{' '}
          <Link href='/' text='клинике кардиохирургии и кардиологии' />.
        </p>
        <h2>Диагностика фибрилляции предсердий</h2>
        <p>
          Диагностируется фибрилляция предсердий на основании клинических
          данных, ЭКГ в момент приступа или по данным суточного мониторирования
          ЭКГ. Важную роль в диагностике занимают имплантируемые электронные
          устройства (ЭКС, ИКД, подкожные регистраторы ЭКГ), которые в
          автоматическом режиме способны зафиксировать нарушение ритма сердца и
          предоставить важную информацию врачу.
        </p>
        <h2>Лечение фибрилляции предсердий</h2>
        <p>
          Лечение фибрилляции предсердий заключается в назначении препаратов,
          способствующих профилактике возникновения приступов и профилактике
          инсульта. Важно также проводить лечение сопутствующей патологии –
          артериальной гипертензии, сердечной недостаточности и т.д., т.к.
          механизмы прогрессирования ФП тесно взаимодействуют с механизмами
          развития перечисленной патологии. При неэффектинвости медикаментозной
          антиаритмической терапии возможно выполнение{' '}
          <Link href='/treatment/radiochastotnaya-ablyaciya' text='РЧА' /> –
          радиочастотной изоляции устьев легочных вен.
        </p>
        <p>
          Эффективность РЧА выше, чем эффективность медикаментозной терапии, и
          во многих случаях это позволяет избавиться от приступов аритмии.
        </p>
        <h2>Прогноз</h2>
        <p>
          Наличие фибрилляции предсердий, протекающей симптомно или
          бессимптомно, связано с увеличением рисков госпитализации, развития и
          прогрессирования сердечной недостаточности, развития инсульта и
          повышенной смертности.
        </p>
        <p>
          Важно начинать лечение ФП как можно раньше, и проводить его комлексно,
          включая лечение сопутствующей патологии.
        </p>
        <p>
          Катетерная абляция значительно повышает качество жизни пациентов,
          страдающих ФП, позволяя достичь длительной ремиссии или значительно
          снизить «бремя» фибрилляции предсердий.
        </p>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default DiseaseArticle;