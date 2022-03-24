import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Greetings from '@/components/Greetings';
import Banner from '@/components/Banner';
import NewsSlider from '@/components/NewsSlider';
import Contacts from '@/components/Contacts';
import ReviewSlider from '@/components/ReviewSlider';
import SEO from '@/components/SEO';
import { NextPage } from 'next';

const App: NextPage = () => {
  const SEODetails = {
    title: 'Центр кардиохирургии и интервенционной кардиологии',
    description:
      'Кардиология, кардиохирургия, сосудистая хирургия, аритмология - в клинике ВМТ им. Н.И.Пирогова. Хирургическое лечение заболеваний органов сердечно-сосудистой системы.',
    pageLink: 'https://heartteamspb.com',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <main className='landing-page'>
          <Greetings
            header='Центр кардиохирургии и интервенционной кардиологии'
            subheader='Медицина, доступная каждому'
            buttonText='Записаться на прием'
          />
          <Banner />
          <section className='container'>
            <h2 className='article__header'>
              Центр кардиохирургии и интервенционной кардиологии
            </h2>
            <p className='article__p'>
              Центр кардиохирургии и интервенционной кардиологии приглашает
              на&nbsp;прием, <Link href='/diagnostics' text='диагностику' />{' '}
              и&nbsp;
              <Link href='/treatment' text='лечение' /> пациентов
              с&nbsp;заболеваниями сердца и&nbsp;сердечно-сосудистой системы.
            </p>
            <p className='article__p'>
              В нашей клинике работают специалисты разных направлений
              деятельности: кардиологии, кардиохирургии, аритмологии, сосудистой
              хирургии, кардиоанестезиологии и&nbsp;др. Благодаря их слаженной
              работе, процесс лечения и&nbsp;последующего наблюдения пациентов
              происходит в&nbsp;кратчайшие сроки. Сотрудники
              кардиохирургического отделения работают в&nbsp;единой команде
              с&nbsp;хирургами, терапевтами, неврологами на&nbsp;всех этапах
              лечебно-диагностического процесса, поэтому при&nbsp;выявлении
              у&nbsp;пациента острой патологии, он&nbsp;будет незамедлительно
              направлен на&nbsp;консультацию к&nbsp;профильному специалисту.
            </p>
            <p className='article__p'>
              Для комфортного пребывания пациентов наше отделение располагает
              одноместными, двух- и&nbsp;трехместными палатами со&nbsp;всеми
              удобствами.
            </p>
            <PhoneLink
              phoneNumber='+7&nbsp;(999)&nbsp;238-01-36'
              text='Для записи на прием к специалистам Центра кардиохирургии и
              интервенционной кардиологии, звоните по телефону '
            />
          </section>
          <NewsSlider />
          <ReviewSlider />
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default App;
