import { NextPage } from 'next';
import PhoneLink from '@/components/PhoneLink';
import ArticleLayout from 'layouts/ArticleLayout';

const Announcement: NextPage = () => {
  const SEODetails = {
    title: 'Приемы кардиохирургов в городах России.',
    description:
      'Выездные приемы кардиохирургов в городах России. Июнь 2022 – смотрите расписание, записывайтесь на консультацию.',
    pageLink:
      'https://heartteamspb.com/announcements/priyomy-vrachej-v-iyune-2022',
    type: 'article',
  };

  return (
    <ArticleLayout details={SEODetails}>
      <section className='container mt'>
        <h1>
          Выездные приемы кардиохирургов
          в&nbsp;городах&nbsp;России&nbsp;–&nbsp;июнь&nbsp;2022
        </h1>
        <p>
          В июне 2022 года планируются выездные приемы кардиохирургов нашего
          Центра в городах России:
        </p>
        <p>07 июня – Великие Луки</p>
        <p>10 июня – Брянск</p>
        <p>14 июня – Железногорск</p>
        <p>21 июня – Арзамас</p>
        <p>
          Прием будет осуществляться для пациентов с заболеваниями сердца и
          органов сердечно-сосудистой системы.
        </p>
        <p>
          По результатам обследования наши специалисты могут вас направить в наш
          Центр кардиохирургии в Санкт-Петербурге на бесплатное лечение по
          квотам и ОМС.
        </p>
        <p>
          Записаться на прием можно по телефону: <PhoneLink />.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default Announcement;
