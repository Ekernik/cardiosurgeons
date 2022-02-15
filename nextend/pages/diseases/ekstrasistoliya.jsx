import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Page = () => {
  const SEODetails = {
    title: 'Экстрасистолия. Сокращение камер сердца',
    description:
      'Симптомы экстрасистолии. Лечение, диагностика. Экстрасистолия и абляция.',
    pageLink: 'https://heartteamspb.com/diseases/ekstrasistoliya',
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
            <h1 className='article__header'>Экстрасистолия</h1>
            <p className='article__p'>
              Экстрасистолия - внеочередное преждевременное сокращение камер
              сердца, возникающее в эктопическом очаге под влиянием
              патологического импульса. В зависимости от места возникновения
              патологического импульса экстрасистолия классифицируется на
              предсердную и желудочковую.
            </p>
            <h2 className='article__p text-center'>Причины экстрасистолии</h2>
            <p className='article__p'>
              Причиной экстрасистолии могут быть ишемическая болезнь сердца,
              перенесенный инфаркт, гормональные и электролитные нарушения,
              миокардит, пороки сердца, употребление алкоголя и психоактивных
              веществ, стресс.
            </p>
            <h2 className='article__p text-center'>
              Симптомы и проявления экстрасистолии
            </h2>
            <p className='article__p'>
              Характерные симптомы экстрасистолии, которые предъявляют пациенты
              - «толчки» и сильные удары сердца, чувство «замирания» в груди,
              «кувыркания сердца», ощущение остановившегося сердца, но бывают
              случаи, когда жалоб нет, а диагноз устанавливается случайно при
              плановом обследовании на основании данных ЭКГ или суточного
              мониторирования ЭКГ.
            </p>
            <h2 className='article__p text-center'>
              Диагностика экстрасистолии
            </h2>
            <p className='article__p'>
              Диагноз обычно устанавливается на основе ЭКГ или суточного
              мониторирования ЭКГ. По ЭКГ часто можно даже вычислить
              расположение источника экстрасистолии, что позволяет спланировать
              ход оперативного лечения заранее, если такое лечение будет
              назначено. Для записи на диагностику экстрасистолии позвоните нам
              по телефону{' '}
              <a href='tel:+79992380136' className='article__link'>
                +7 (999) 238-01-36
              </a>
              .
            </p>
            <h2 className='article__p text-center'>Лечение экстрасистолии</h2>
            <p className='article__p'>
              Выбор метода лечения основывается на клинической картине
              заболевания, данных инструментальных исследований и действующих
              рекомендаций. Как правило, лечение экстрасистолии начинается с
              медикаментозной антиаритмической терапии.
            </p>
            <p className='article__p'>
              Контроль эффективности лечения выполняется путем повторного
              суточного мониторирования ЭКГ.
            </p>
            <p className='article__p'>
              При неэффективности терапии, появлении серьезных побочных эффектов
              или при невозможности длительного приема таблеток (например, при
              планировании беременности) может быть выполнена радиочастотная
              абляция - устранение патологического очага радиочастотной
              энергией, подаваемой с помощью катетера. РЧА во многих случаях
              позволяет избавиться от аритмии навсегда без необходимости
              последующего длительного приема препаратов.
            </p>
            <h2 className='article__p text-center'>Выводы</h2>
            <p className='article__p'>
              Экстрасистолия часто может значительно снижать качество жизни
              пациентов. Может провоцировать развитие более серьезных устойчивых
              нарушений ритма сердца: предсердная экстрасистолия способна
              «запустить»{' '}
              <Link
                href='/diseases/fibrilyaciya-predcerdiy'
                text='фибрилляцию предсердий'
              />
              , желудочковая экстрасистолия способна спровоцировать устойчивую
              желудочковую тахикардию – потенциально жизнеопасное состояние.
            </p>
            <p className='article__p'>
              Сама же по себе желудочковая экстрасистолия требует тщательного
              обследования пациента, включая эхокардиографию, нагрузочные пробы,
              МРТ, или{' '}
              <Link href='/diagnostics/coronarographia' text='коронарографию' />
              .
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
