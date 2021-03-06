import { NextPage } from 'next';
import PhoneLink from '@/components/PhoneLink';
import ArticleLayout from 'layouts/ArticleLayout';
import Link from '@/components/Link';

const Announcement: NextPage = () => {
  const SEODetails = {
    title: 'Стентирование коронарных артерий бесплатно по ОМС и квотам.',
    description:
      'Записывайтесь на операцию по стентированию коронарных артерий в больницу кардиохирургии в Петербурге.',
    pageLink:
      'https://heartteamspb.com/announcements/stentirovanie-koronarnyh-arterij',
    type: 'article',
  };

  return (
    <ArticleLayout details={SEODetails}>
      <section className='container mt'>
        <h1>Стентирование коронарных артерий бесплатно по ОМС и квотам</h1>
        <p>
          Стентирование коронарных артерий способствует восстановлению просвета
          артерий при отсутствии нормального кровотока из-за
          атеросклеротического изменения на внутренней поверхности стенки
          сосуда.{' '}
          <Link
            href='/treatment/stentirovanie-koronarnih-arteriy'
            text='Стентирование коронарных артерий'
          />{' '}
          применяется так же при лечении ишемической болезни сердца.
        </p>
        <p>
          В нашей клинике кардиохирургии и интервенционной кардиологии проводят
          операции по стентированию коронарных артерий. Сообщаем вам о том, что
          лечение можно получить БЕСПЛАТНО как по полису ОМС, так и по
          федеральным квотам.
        </p>
        <p>
          Для того, чтобы получить бесплатное лечение в нашем центре, необходимо
          собрать пакет документов: заключение кардиолога или другого
          специалиста, направление на получение ВМП, паспорт, полис ОМС и СНИЛС.{' '}
        </p>
        <p>
          Для уточнения более подробной информации, позвоните по телефону{' '}
          <PhoneLink />. Мы расскажем вам о записи на прием и диагностику, а
          также о процессе лечения в нашей клинике в Санкт-Петербурге.
        </p>
        <p>
          Обращаем ваше внимание, что наши врачи проводят приемы пациентов в
          разных регионах РФ. Ознакомьтесь с{' '}
          <Link
            href='/regions'
            text='датами приемов наших кардиохирургов
          в регионах'
          />
          .
        </p>
      </section>
    </ArticleLayout>
  );
};

export default Announcement;
