import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Page = () => {
  const SEODetails = {
    title: 'Ишемическая кардиомиопатия',
    description:
      'Лечение ишемической кардиомиопатии в клинике кардиохирургии. Записывайтесь на прием!',
    pageLink:
      'https://heartteamspb.com/diseases/ishemicheskaya-kardiomiopatiya',
    type: 'article',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <div className='App'>
        <main>
          <Header />
          <article className='container mt'>
            <h1 className='article__header'>Ишемическая кардиомиопатия</h1>
            <p className='article__p'>
              Ишемическая кардиомиопатия является формой хронической{' '}
              <Link
                href='/diseases/ishemicheskaya-bolezn-serdca'
                text='ишемической
              болезни сердца'
              />
              . Данное заболевание характеризуется значительным расширением
              полостей и снижением насосной функции сердца.
            </p>
            <h2 className='article__p text-center'>
              Причины ишемической кардиомиопатии
            </h2>
            <p className='article__p'>
              В основе ишемической кардиомиопатии лежит неадекватное питание
              миокарда, недостаточное снабжение кислородом, вследствие нарушения
              кровотока по артериям сердца. При установлении диагноза четко
              указывается фактор ишемии миокарда в развитии патологии:
              выраженное сужение сосудов сердца, перенесенный инфаркт миокарда,
              операция аортокоронарного шунтирования или стентирования
              коронарных артерий в анамнезе. Таким образом сердечная мышца
              переходит в энергосберегающий режим, умышленно снижая потребность
              в питании, и соответственно снижая силу сокращений.
            </p>
            <h2 className='article__p text-center'>
              Ишемическая кардиомиопатия: симптомы
            </h2>
            <p className='article__p'>
              Основные проявлениями, помимо характерной для ИБС &quot;грудной
              жабы&quot; (дискомфортные ощущения в груди), являются одышка,
              усугубляющаяся с течением времени, может появляться кашель, не
              связанный с простудными заболеваниями, слабость на фоне обычной
              физической нагрузки, отеки лодыжек и нижней части голеней,
              ощущение тяжести или тянущей боли в правом подреберье из-за
              увеличения печени по причине застоя, перебои в работе сердца.
            </p>
            <p className='article__p'>
              Появление вышеописанных ощущений - повод обратиться к кардиологу и
              пройти обследование.
            </p>
            <h2 className='article__p text-center'>
              Диагностика ишемической кардиомиопатии
            </h2>
            <p className='article__p'>
              При появлении вышеописанных жалоб, необходимо как можно скорее
              обратиться к кардиологу, беседа с которым поможет уточнить Ваши
              жалобы, условия их возникновения, а также определить факторы
              риска, некоторые из которых можно устранить или уменьшить приемом
              лекарств или изменением образа жизни.
            </p>
            <p className='article__p'>
              При рентгенографии грудной клетки, возможно заподозрить увеличение
              размеров сердца.{' '}
            </p>
            <p className='article__p'>
              ЭКГ позволяет выявить признаки перенесенного инфаркта миокарда,
              определить признаки ишемии и гипертрофии миоркарда.
            </p>
            <p className='article__p'>
              ЭхоКГ позволяет оценить насосную функцию сердца, определить
              размеры его полостей и толщину стенок.
            </p>
            <p className='article__p'>
              «Положительная» проба с физическими нагрузками является показанием
              к коронарографии.{' '}
              <Link href='/diagnostics/coronarographia' text='Коронарография' />{' '}
              позволяет выявить субстрат заболевания - атеросклеротическую
              бляшку, нарушающую питание миокарда.
            </p>
            <h2 className='article__p text-center'>
              Лечение ишемической кардиомиопатии
            </h2>
            <p className='article__p'>
              При отсутствии эффективности медикаментозной терапии выделяют
              методы хирургического лечения, которые заключаются в
              восстановлении кровотока по артериям сердца, такие как:{' '}
              <Link
                href='/treatment/stentirovanie-koronarnih-arteriy'
                text='стентирование коронарных артерий'
              />
              , операция коронарного шунтирования. Для профилактики внезапной
              смерти нередко стоит вопрос об имплантации кардиостимулятора или
              кардиовертера-дефибриллятора. При крайне запущенном состоянии
              миокарда, радикальным методом лечения является трансплантация
              сердца.
            </p>
            <h2 className='article__p text-center'>Прогноз</h2>
            <p className='article__p'>
              При естественном течении болезни прогноз неутешителен: после
              появления симптомов заболевание быстро прогрессирует, зачастую
              приводит к инвалидизации и высокому проценту смертности.
            </p>
            <p className='article__p'>
              Таким образом, своевременное вмешательство кардиологов,
              качественная диагностика, грамотно составленная программа лечения,
              вовремя выполненное при необходимости хирургическое вмешательство
              способны значительно продлить жизнь и устранить симптомы.
            </p>
          </article>
          <Contacts />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Page;
