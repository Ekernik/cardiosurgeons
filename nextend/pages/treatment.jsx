import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import { treatments } from '@/public/static/databases/links';

export default function Treatment() {
  const title =
    'Кардиохирургические операции на сердце. Лечение болезней сердца и сосудов.';
  const description =
    'Записывайтесь на лечение болезней сердца к ведущим кардиологам и кардиохирургам нашей клиники. Прием по федеральным квотам и ОМС.';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://heartteamspb.com/static/images/bg-doctors.webp'
        />
        <meta property='og:description' content={description} />
        <meta property='og:url' content='https://heartteamspb.com/treatment' />
      </Head>
      <div className='App'>
        <div id='curtain'></div>
        <Header />
        <main className='page__services'>
          <div className='container container__services'>
            <h1 className='article__header'>Операции</h1>
            <div className='services__list'>
              {treatments.links.map((treatment, i) => (
                <div className='services__link' key={Date.now() + i}>
                  <Link href={treatment.link}>
                    <a>{treatment.text}</a>
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <p className='article__p'>
                В Центре кардиохирургии и интервенционной кардиологии на базе
                КВМТ им Н.И.Пирогова работает команда профессионалов, имеющих
                практический опыт в диагностировании и лечении заболеваний
                сердца и сосудов.
              </p>
              <p className='article__p'>
                Мы проводим полный спектр хирургических, гибридных и
                эндоваскулярных операций при{' '}
                <Link href='https://heartteamspb.com/diagnostics/ateroskleros'>
                  <a className='article__link'>
                    атеросклерозе коронарных артерий
                  </a>
                </Link>
                , артерий нижних конечностей, брахиоцефальных артерий, аорты и
                ее ветвей, аневрзимах аорты и артерий различной локализации.
              </p>
              <p className='article__p'>
                Врачи Центра в сотрудничестве с коллегами из разных городов
                России непрерывно проводят консультативный и амбулаторный прием
                пациентов со всей страны. Сотрудничаем с медицинскими центрами
                более чем 20 субъектов Российской Федерации, и география работы
                постоянно расширяется.
              </p>
              <p className='article__p'>
                Более подробную информацию о кардиохирургических операциях и
                лечении вы можете получить, обратившись к специалистам нашей
                клиники по номеру телефона{' '}
                <a href='tel:+79992380136' className='article__link'>
                  +7 (999) 238-01-36
                </a>
                , или написав нам на электронную почту:{' '}
                <a
                  href='mailto:heartteam.spb@gmail.com'
                  className='article__link'
                >
                  heartteam.spb@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </main>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
