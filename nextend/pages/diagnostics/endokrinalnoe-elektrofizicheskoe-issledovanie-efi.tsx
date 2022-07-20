import { NextPage } from 'next';
import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Greetings from '@/components/Greetings';
import Banner from '@/components/Banner';
import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';

const EFI: NextPage = () => {
  const SEODetails = {
    title: 'Эндокардиальное электрофизиологическое исследование ЭФИ',
    description:
      'Запишитесь на диагностику ЭФИ сердца и пройдите обследование у лучших кардиохирургов и кардиологов Петербурга.',
    pageLink:
      'https://heartteamspb.com/diagnostics/endokrinalnoe-elektrofizicheskoe-issledovanie-efi',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <Greetings
        header='Эндокардиальное электрофизиологическое исследование — ЭФИ'
        buttonText='записаться на бесплатный прием'
      />
      <Banner />
      <article className='container'>
        <h1>Эндокардиальное электрофизиологическое исследование — ЭФИ </h1>
        <p>
          Эндокардиальное (внутрисердечное) электрофизиологическое исследование
          или сокращенно - ЭФИ, является инвазивным диагностическим методом,
          который позволяет с высокой точностью поставить правильный диагноз при
          наличии аритмии.
        </p>
        <h2>Почему ЭФИ эффективно?</h2>
        <p>
          Часто нарушения ритма не удается своевременно зарегистрировать на ЭКГ
          или суточном мониторировании, а пациент при этом предъявляет жалобы на
          периодически возникающие перебои в работе сердца.{' '}
        </p>
        <p>
          Операция ЭФИ сердца основана на оценке функционального состояния
          проводящей системы сердца с помощью программированной стимуляции
          предсердий и желудочков. В ходе ЭФИ выявляются аномальные места
          формирования и проведения электрических импульсов с внутренней
          поверхности сердца, что позволяет точно установить диагноз (например:
          синдром WPW, узловая тахикардия и т.д.).
        </p>
        <h2>Как проводится исследование ЭФИ?</h2>
        <p>
          Исследование проводится в условиях рентгеноперационной под местной
          анестезией из небольших проколов сосуда (бедренная вена) в бедренной
          области и постановки катетеров-электродов под контролем рентгеновских
          лучей.
        </p>
        <p>
          В случае необходимости на основании полученных данных определяются
          показания для следующего этапа хирургического лечения -{' '}
          <Link
            href='/treatment/radiochastotnaya-ablyaciya'
            text='радиочастотной абляции'
          />
          .
        </p>
        <h2>Сколько длится ЭФИ сердца?</h2>
        <p>
          Длительность исследования в среднем составляет 45 минут. Срок
          нахождения в стационаре около 3-х дней, после чего пациент
          выписывается с дальнейшими рекомендациями.
        </p>
        <p>
          Такой современный метод диагностики как ЭФИ помогает в кратчайшие
          сроки получить информацию о существующих рисках аритмий и принять
          правильное решение о методе дальнейшего лечения.
        </p>
        <p>
          Для записи на операцию ЭФИ сердца, позвоните нам по телефону:{' '}
          <PhoneLink />
        </p>
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default EFI;