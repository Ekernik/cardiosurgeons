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
    title: 'Трепетание предсердий',
    description:
      'Трепетание предсердий: симптомы, диагностика и лечение. Приглашаем на прием к аритмологу.',
    pageLink: 'https://heartteamspb.com/diseases/trepetanie-predserdiy',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header='Трепетание предсердий'
        subheader=''
        buttonText='записаться на бесплатный прием'
      />
      <Banner />
      <article className='container'>
        <h1>Трепетание предсердий</h1>
        <p>
          Трепетание предсердий – предсердная тахиаритмия с частотой сокращения
          предсердий до 250-350 в минуту.
        </p>
        <h2>Причины трепетания предсердий</h2>
        <p>
          В возникновении трепетания предсердий участвует ранее обсуждаемый
          механизм повторного входа возбуждения (re-entry). Клиническая картина,
          симптомы и даже лечение аналогичны описываемым при{' '}
          <Link
            href='/diseases/fibrilyaciya-predcerdiy'
            text='фибрилляции предсердий'
          />
          .
        </p>
        <h2>Трепетание предсердий: симптомы и признаки</h2>
        <p>
          Пациенты с трепетанием предсердий, как и при фибрилляции предсердий,
          испытывают слабость и недомогание, снижение переносимости физической
          нагрузки, сердцебиение, одышку, перебои в работе сердца.
        </p>
        <p>
          Иногда человек испытывает боли в груди или сталкивается с обморочными
          состояниями. Во всех этих случаях лучше обратиться за помощью
          квалифицированных специалистов-аритмологов, дабы избежать риск
          возникновения инсульта.
        </p>
        <h2>Диагностика трепетания предсердий</h2>
        <p>
          В нашем Центре кардиохирургии и интервенционной кардиологии вы можете
          пройти диагностику и, в случае выявления трепетаний предсердий,
          лечение этой болезни.
        </p>
        <p>
          Диагностируется трепетание предсердий на основании клинических данных,
          ЭКГ в момент приступа или по данным суточного мониторирования ЭКГ.
          Важную роль в диагностике занимают имплантируемые электронные
          устройства (ЭКС, ИКД, подкожные регистраторы ЭКГ), которые в
          автоматическом режиме способны зафиксировать нарушение ритма и
          предоставить важную информацию врачу.
        </p>
        <h2>Лечение трепетаний предсердий</h2>
        <p>
          Лечение трепетаний предсердий заключается в назначении препаратов,
          способствующих профилактике возникновения приступов и профилактике
          инсульта.
        </p>
        <p>
          Лечение стоит проводить комплексно, то есть параллельно избавляться от
          сопутствующих патологий, например, сердечной недостаточности или
          артериальной гипертензии.
        </p>
        <p>
          При неэффектинвости медикаментозной антиаритмической терапии возможно
          выполнение радиочастотной абляции.
        </p>
        <p>
          При так называемом «типичном» трепетании предсердий, механизм которого
          предполагается уже на основе данных ЭКГ, эффективность РЧА может
          достигать 90% и более, при этом после операции часто отсутствует
          необходимость в длительном приеме антиаритмических средств.
        </p>
        <h2>Прогноз</h2>
        <p>
          Трепетание предсердий, протекающее с наличием или отсутствием
          симптомов, связано с увеличением рисков госпитализации, развития и
          прогрессирования сердечной недостаточности, развития инсульта и
          повышенной смертности.
        </p>
        <p>
          Радиочастотная аблация (РЧА) субстрата трепетания предсердий имеет
          очень высокую эффективность и, как правило, навсегда избавляет
          пациента от приступов сердцебиения.
        </p>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default DiseaseArticle;
