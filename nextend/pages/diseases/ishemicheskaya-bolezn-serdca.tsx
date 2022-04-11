import { NextPage } from 'next';
import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';
import Banner from '@/components/Banner';
import Greetings from '@/components/Greetings';

const DiseaseArticle: NextPage = () => {
  const SEODetails = {
    title: 'Ишемическая болезнь сердца ИБС',
    description:
      'Ишемическая болезнь сердца: операции, лечение в больнице кардиохирургии и кардиологии ВМТ им. Н.И.Пирогова',
    pageLink: 'https://heartteamspb.com/diseases/ishemicheskaya-bolezn-serdca',
    type: 'article',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <div className='App'>
        <Header />
        <Greetings
          header='Ишемическая болезнь сердца'
          subheader='основная причина смертности среди взрослого населения развитых стран'
          buttonText='записаться на бесплатный прием'
        />
        <Banner />
        <article className='container'>
          <h1 className='article__header'>Ишемическая болезнь сердца (ИБС)</h1>
          <p className='article__p'>
            Ишемическая болезнь сердца или ИБС - это заболевание при котором
            сосуды, питающие кровью сердечную мышцу, сужаются или закрываются
            полностью атеросклеротическими бляшками. В результате чего сердечная
            мышца (миокард) не может работать эффективно, а в случае полного
            перекрытия сосуда атеросклеротической бляшкой или тромбом,
            развивается <strong>инфаркт</strong>.
          </p>
          <h2 className='article__p text-center'>
            Причины ишемической болезни сердца
          </h2>
          <p className='article__p'>
            ИБС - основная причина смертности среди взрослого населения развитых
            стран. В группе риска находятся люди (чаще мужчины) старше 50 лет, с
            избыточной массой тела, наличием вредных привычек (курение,
            переедание), повышенным уровнем артериального давления и
            холестерина. Важное значение имеет фактор наследственности - если
            прямые родственники переносили инфаркты или инсульты, то необходимо
            наблюдение кардиолога уже после 40-летнего возраста.
          </p>
          <h2 className='article__p text-center'>
            Ишемическая болезнь сердца: симптомы
          </h2>
          <p className='article__p'>
            Симптомы ишемической болезни сердца: в большинстве случаев,
            недостаток кислорода в сердечной мышце проявляется типичными
            жалобами - болью за грудиной или между лопаток, которая может
            сочетаться с ломящей болью в левой руке, нижней челюсти. Боль эта в
            начале заболевания возникает при физическом или эмоциональном
            напряжении, исчезает при прекращении нагрузки. При дальнейшем
            прогрессировании заболевания и степени сужения сосудов сердца -
            жалобы возникают при незначительных нагрузках, даже покое, и могут
            сопровождаться чувством страха, потливостью, одышкой. Такие типичные
            приступы называются - <strong>стенокардией</strong>. В некоторых
            случаях, боли может не быть, тогда основным ощущением может
            оказаться чувство нехватки воздуха. Важно при первых подобных
            ощущениях обратиться к кардиологу и пройти обследование.
          </p>
          <h2 className='article__p text-center'>
            Диагностика ишемической болезни сердца
          </h2>
          <p className='article__p'>
            При появлении вышеописанных жалоб, необходимо как можно скорее
            обратиться к кардиологу, беседа с которым поможет уточнить Ваши
            жалобы, условия их возникновения, а также определить факторы риска,
            некоторые из которых можно устранить или уменьшить приемом лекарств
            или изменением образа жизни.
          </p>
          <p className='article__p'>
            Одним из основных высокоспецифичных исследований для диагностики
            ишемической болезни сердца является проба с физической нагрузкой или
            стресс-тест, которая может проводиться на беговой дорожке
            (тредмил-тест), или устройстве с педалями (велоэргометрия). При
            выполнении физической нагрузки на этих приборах выполняется запись
            ЭКГ и/или ультразвуковое исследование сердца (Эхокардиография),
            которые с высокой степенью достоверности покажут, насколько
            сердечная мышца справляется с физической нагрузкой и необходимы ли
            дальнейшие диагностические мероприятия.
          </p>
          <p className='article__p'>
            Если тест с физической нагрузкой оказался «положительным», то
            следующим шагом в диагностике ИБС - является{' '}
            <Link href='/diagnostics/coronarographia' text='коронарография' />.
            Это исследование проводят в стационаре, госпитализация занимает 1-2
            дня. Суть этого очень важного исследования - в введении в сосуды
            сердца контрастного вещества и определения проходимости и степени
            сужения сосудов сердца. По результатам коронарографии на консилиуме
            принимается решение о дальнейшем лечении, а также необходимости
            операции по устранению ишемической болезни сердца.
          </p>
          <h2 className='article__p text-center'>
            Лечение ишемической болезни сердца
          </h2>
          <p className='article__p'>
            Лечение ИБС возможно тремя основными способами:
          </p>
          <p className='article__p'>
            -{' '}
            <strong>
              Консервативная терапия или оптимальное медикаментозное лечение
            </strong>{' '}
            - комплекс рекомендаций по изменению образа жизни и приему различных
            групп препаратов, направленный на уменьшение прогрессирования
            заболевания и уменьшения жалоб. Консервативная терапия всегда
            сопровождает два других метода лечения, относящиеся к хирургическим.
          </p>
          <p className='article__p'>
            - <strong>Стентирование коронарных артерий</strong> -
            внутрисосудистая операция, которая направлена на устранение сужения
            сердечной артерии путем раздувания специального баллона в месте
            сужения сосуда и установки в этот суженный участок ажурной
            металлической сеточки (стент), покрытой специальным лекарственным
            веществом, уменьшающим вероятность повторного образования сужения.{' '}
            <Link
              href='/treatment/stentirovanie-koronarnih-arteriy'
              text='Стентирование сосудов
              сердца'
            />{' '}
            (коронарное стентирование) проводится в рентгеноперационной как и
            коронарография, не требует применения наркоза и выполняется через
            прокол в лучевой или (редко) в бедренной артерии. Послеоперационный
            период короткий и пациент выписывается через 1-2 дня с
            рекомендациями обязательного приема специальных препаратов, которые
            необходимо использовать в течение 6-12 месяцев после стентирования.
          </p>
          <p className='article__p'>
            - <strong>Аорто-коронарное шунтирование или АКШ</strong> -
            хирургическое вмешательство, направленное на создание путей обхода
            суженного участка коронарной артерии с использованием собственных
            сосудов пациента: вен, взятых с ног или артерий, забирающихся из
            предплечий или внутренней поверхности грудной клетки.{' '}
            <Link
              href='/treatment/aorto-koronarnoe-shuntirovanie'
              text='Аорто-коронарное шунтирование'
            />{' '}
            - самая часто выполняемая операция во всем мире, что связано с ее
            высочайшей потребностью и хорошими результатами. Операция проводится
            с использованием аппарата искусственного кровообращения или без
            него. Послеоперационный период обычно занимает 1 день в палате
            реанимации и 5-7 дней в общей палате. Пациенты ограничены в подъёме
            тяжестей в течение 3-х месяцев, однако в остальном существенных
            ограничений нет.
          </p>
          <h2 className='article__p text-center'>Прогноз</h2>
          <p className='article__p'>
            При, так называемом, естественном течении заболевания, то есть
            отсутствии лечения – ишемическая болезнь сердца способна быстро
            привести инвалидизации и смерти большинства пациентов. До
            сегодняшнего дня, основная смертность в РФ связана именно с ИБС
            (27%).
          </p>
          <p className='article__p'>
            Современные методы обследования сердечно-сосудистой системы помогут
            диагностировать ИБС на ранних стадиях, безболезненно и в кратчайшие
            сроки получить информацию о существующих рисках и принять правильное
            решение о сроках и методе дальнейшего лечения.
          </p>
          <p className='article__p'>
            Применение оптимальной медикаментозной терапии и изменение образа
            жизни существенно уменьшает риски прогрессирования ИБС и развития
            осложнений (инфакт миокарда, сердечная недостаточность, внезапная
            смерть), а современные методы лечения возвращают пациентов к
            полноценной жизни, устраняют жалобы и продляют жизнь.
          </p>
          <p className='article__p'>
            В нашей клинике вы можете пройти диагностику и по ее итогам получить
            лечение ишемической болезни сердца. Операции проводятся на
            регулярной основе, для записи на прием, звоните{' '}
            <a href='tel:+79992380136' className='article__link'>
              +7 (999) 238-01-36
            </a>
          </p>
        </article>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default DiseaseArticle;
