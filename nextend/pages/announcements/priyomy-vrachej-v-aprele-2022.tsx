import SEO from '@/components/SEO';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import { NextPage } from 'next';
import PhoneLink from '@/components/PhoneLink';

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
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <section className='container mt'>
          <h1 className='article__header'>
            Выездные приемы кардиохирургов в городах России – апрель 2022
          </h1>
          <p className='article__p'>
            В апреле 2022 года планируются выездные приемы кардиохирургов нашего
            Центра в городах России:
          </p>
          <p className='article__p'>05 апреля – Нижний Новгород</p>
          <p className='article__p'>06 апреля – Арзамас</p>
          <p className='article__p'>07 апреля – Саранск</p>
          <p className='article__p'>11 апреля – Великие Луки</p>
          <p className='article__p'>25 апреля – Черкесск</p>
          <p className='article__p'>26 апреля – Ставрополь</p>
          <p className='article__p'>
            На прием приглашаются пациенты с заболеваниями сердца и органов
            сердечно-сосудистой системы.
          </p>
          <p className='article__p'>
            По итогам обследования нашими специалистами вы можете быть
            направлены на <strong>бесплатное лечение по квотам</strong> и ОМС в
            наш Центр кардиохирургии в Санкт-Петербурге.
          </p>
          <p className='article__p'>
            Записаться на прием можно по телефону:{' '}
            <PhoneLink phoneNumber='+7 (999) 238-01-36' />.
          </p>
        </section>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default Announcement;
