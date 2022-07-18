import { NextPage } from 'next';
import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';
import ArticleLayout from 'layouts/ArticleLayout';

const Announcement: NextPage = () => {
  const SEODetails = {
    title: 'Лечение болезней сердца и органов сердечно-сосудистой системы.',
    description:
      'Записывайтесь к нашим кардиохирургам на диагностику и лечение болезней сердца и сердечно-сосудистой системы. Лечим по квотам и ОМС.',
    pageLink: 'https://heartteamspb.com/announcements/lechenie-boleznei-serdca',
    type: 'article',
  };

  return (
    <ArticleLayout details={SEODetails}>
      <section className='container mt'>
        <h1>
          Лечение болезней сердца и органов сердечно&#8209;сосудистой системы
        </h1>
        <p>
          Наш Центр кардиохирургии и интервенционной кардиологии приглашает на
          прием пациентов со всех регионов России.
        </p>
        <p>
          Если ваш лечащий врач диагностировал у вас заболевания сердца и
          органов сердечно-сосудистой системы, и&nbsp;Вы&nbsp;хотите получить
          бесплатное лечение по ОМС или федеральным квотам, позвоните нам по
          телефону <PhoneLink />. Проконсультируем по всем вопросам, расскажем,
          как записаться к нам на прием и диагностику, расскажем о том, как
          проходит лечение в нашей больнице кардиохирургии в Санкт-Петербурге.
        </p>
        <p>
          Также обращаем ваше внимание на то, что наши врачи осуществляют приемы
          пациентов в разных регионах РФ. Ознакомиться с датами ближайших
          приемов можно <Link href='/regions' text='тут' />.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default Announcement;
