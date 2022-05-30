import { NextPage } from 'next';
import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';
import ArticleLayout from 'layouts/ArticleLayout';

const Announcement: NextPage = () => {
  const SEODetails = {
    title: 'Бесплатные операции на сердце для всех жителей России.',
    description:
      'Бесплатные операции на сердце по ОМС и федеральным квотам. Прием врачей в Петербурге и регионах РФ. Лучшие кардиохирурги страны!',
    pageLink:
      'https://heartteamspb.com/announcements/besplatnye-operacii-na-serdce',
    type: 'article',
  };

  return (
    <ArticleLayout details={SEODetails}>
      <section className='container mt'>
        <h1>Оперируем БЕСПЛАТНО по федеральным квотам и&nbsp;ОМС</h1>
        <p>
          Осуществляем прием пациентов для диагностики и лечения болезней сердца
          и органов сердечно-сосудистой системы.{' '}
          <Link href='/operacii-na-serdce' text='Операции на сердце' /> проводим
          в нашем Центре кардиохирургии и интервенционной кардиологии в
          Санкт-Петербурге, однако специалисты нашей клиники регулярно выезжают
          на приемы в разные регионы России. Информацию о приемах врачей можно
          найти <Link href='/regions' text='тут' />.
        </p>
        <p>
          Напоминаем вам о возможности БЕСПЛАТНОГО хирургического лечения
          болезней сердца в нашей клинике по федеральным квотам и ОМС.
          Информацию о лечении по федеральным квотам читайте{' '}
          <Link href='/besplatnoe-lechenie-po-kvotam' text='тут' /> или звоните
          нам по телефону <PhoneLink />
        </p>
      </section>
    </ArticleLayout>
  );
};

export default Announcement;
