import Link from '@/components/Link';
import SEO from '@/components/SEO';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import PhoneLink from '@/components/PhoneLink';
import { NextPage } from 'next';

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
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <section className='container mt'>
          <h1 className='article__header'>
            Оперируем БЕСПЛАТНО по федеральным квотам и ОМС
          </h1>
          <p className='article__p'>
            Осуществляем прием пациентов для диагностики и лечения болезней
            сердца и органов сердечно-сосудистой системы.{' '}
            <Link href='/operacii-na-serdce' text='Операции на сердце' />{' '}
            проводим в нашем Центре кардиохирургии и интервенционной кардиологии
            в Санкт-Петербурге, однако специалисты нашей клиники регулярно
            выезжают на приемы в разные регионы России. Информацию о приемах
            врачей можно найти <Link href='/regions' text='тут' />.
          </p>
          <p className='article__p'>
            Напоминаем вам о возможности БЕСПЛАТНОГО хирургического лечения
            болезней сердца в нашей клинике по федеральным квотам и ОМС.
            Информацию о лечении по федеральным квотам читайте{' '}
            <Link href='/besplatnoe-lechenie-po-kvotam' text='тут' /> или
            звоните нам по телефону{' '}
            <PhoneLink phoneNumber='+7 (999) 238-01-36' />
          </p>
        </section>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default Announcement;