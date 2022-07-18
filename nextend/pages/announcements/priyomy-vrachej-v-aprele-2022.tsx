import { NextPage } from 'next';
import PhoneLink from '@/components/PhoneLink';
import ArticleLayout from 'layouts/ArticleLayout';

const Announcement: NextPage = () => {
  const SEODetails = {
    title: 'Выездные приемы кардиохирургов в городах России – апрель 2022.',
    description:
      'Осуществляем обследование пациентов более чем в 30 регионах России. Записывайтесь на прием, получайте бесплатное лечение болезней сердца в Санкт-Петербурге.',
    pageLink:
      'https://heartteamspb.com/announcements/priyomy-vrachej-v-aprele-2022',
    type: 'article',
  };

  return (
    <ArticleLayout details={SEODetails}>
      <section className='container mt'>
        <h1>
          Выездные приемы кардиохирургов
          в&nbsp;городах&nbsp;России&nbsp;–&nbsp;апрель&nbsp;2022
        </h1>
        <p>
          В апреле 2022 года планируются выездные приемы кардиохирургов нашего
          Центра в городах России:
        </p>
        <p>05 апреля – Нижний Новгород</p>
        <p>06 апреля – Арзамас</p>
        <p>07 апреля – Саранск</p>
        <p>11 апреля – Великие Луки</p>
        <p>25 апреля – Черкесск</p>
        <p>26 апреля – Ставрополь</p>
        <p>
          На прием приглашаются пациенты с заболеваниями сердца и органов
          сердечно-сосудистой системы.
        </p>
        <p>
          По итогам обследования нашими специалистами вы можете быть направлены
          на <strong>бесплатное лечение по квотам</strong> и ОМС в наш Центр
          кардиохирургии в Санкт-Петербурге.
        </p>
        <p>
          Записаться на прием можно по телефону: <PhoneLink />.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default Announcement;
