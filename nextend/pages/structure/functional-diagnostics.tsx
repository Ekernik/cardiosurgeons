import { NextPage } from 'next';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Structure: NextPage = () => {
  const SEODetails = {
    title: 'Отделение функциональной диагностики',
    description:
      'Прием специалистов отделения функциональной диагностики Центра кардиохирургии и интервенционной кардиологии. Записывайтесь на диагностику.',
    pageLink: 'https://heartteamspb.com/structure/functional-diagnostics',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <main className='mt container'>
        <article>
          <h1>Отделение функциональной диагностики</h1>
          <p>
            Деятельность врачей - специалистов функциональной диагностики,
            являющихся неотъемлемым подразделением клиники Высоких медицинских
            технологий, посвящена анализу функционального состояния сердца
            для&nbsp;подготовки к&nbsp;оперативному лечению, а&nbsp;также
            определения необходимой медикаментозной терапии, оценки соответствия
            и&nbsp;эффективности проводимого лечения.
          </p>
          <p>
            Наиболее востребованные методы исследований сердечно-сосудистой
            патологии это:
          </p>
          <ul>
            <li>
              Для визуализации камер сердца применяется
              трансторакальная&nbsp;(неинвазивная) и&nbsp;чреспищеводная
              эхокардиография. Эти&nbsp;два метода позволяют оценить размеры
              предсердий и&nbsp;желудочков, их&nbsp;сократимость; работу
              сердечных клапанов, направление внутрисердечных потоков крови
              через них, тем самым определяя наличие той или&nbsp;иной
              патологии: сужение&nbsp;(стеноз) клапана
              или&nbsp;его&nbsp;недостаточность.
            </li>
            <li>
              При подозрении на&nbsp;ишемическую болезнь сердца применяют
              эхокардиографию с&nbsp;физической или&nbsp;фармакологической
              нагрузкой&nbsp;(стресс-эхокардиография). Во&nbsp;время прохождения
              данной процедуры постоянно измеряется артериальное давление
              и&nbsp;регистрируется электрокардиограмма. Непосредственно перед
              исследованием и&nbsp;сразу после остановки врач проводит
              ультразвуковое исследование сердца, что&nbsp;позволяет оценить
              сократимость сердечной мышцы “до”&nbsp;и&nbsp;“после”.
            </li>
            <li>
              Для анализа электрической активности сердца на&nbsp;помощь
              приходит электрокардиограмма&nbsp;(ЭКГ) - краткосрочная запись
              и&nbsp;суточный (или&nbsp;многосуточный) мониторинг
              ЭКГ&nbsp;по&nbsp;Холтеру, позволяющие выявлять всевозможные
              аритмии (тахи&nbsp;и&nbsp;бради), наличие и&nbsp;степень
              недостаточности коронарного кровообращения и&nbsp;локализацию
              (место поражения) постинфарктных нарушений в&nbsp;сердечной мышце
              – рубцовых изменений миокарда.
            </li>
          </ul>
          <p>
            Всем пациентам перед выполнением сложных операций обязательно
            проводится дуплексное сканирование сосудов головы и&nbsp;шеи
            (брахиоцефальных артерий), для&nbsp;профилактики возникновения
            острой ишемии головного мозга, т.е.&nbsp;инсульта.
          </p>
          <p>
            Вышеописанные методы исследований выполняются на&nbsp;высококлассном
            оборудовании. Необходимо понимать, что&nbsp;сопоставлением
            результатов и&nbsp;определением дальнейшей тактики лечения
            занимается непосредственно лечащий врач.
          </p>
        </article>
      </main>
      <Contacts />
      <Footer />
    </>
  );
};

export default Structure;
